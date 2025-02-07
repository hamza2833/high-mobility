import { knex } from '../database.js'
import GraphQlService from './GraphQlService.js'
import Auth from './Auth.js'
import { FLEET_AUTH_STATUS } from '../utils/fleet.js'

class VehicleService {
  static async fetchProperties({ id, fleetClearance, vin }, properties) {
    const accessToken = await Auth.getAccessToken(id)
    const appConfig = await knex('app_config').first()
    if (!appConfig) {
      return res.status(404).json({ message: 'No app config found' })
    }
    const graphQl = new GraphQlService(
      appConfig.graph_ql_api_config,
      accessToken
    )

    const propertiesToFetch = properties
    if (fleetClearance === FLEET_AUTH_STATUS.PENDING) {
      propertiesToFetch.push('universal.brand')
      propertiesToFetch.push('universal.vin')
    }

    const graphQlResponse = await graphQl.fetchProperties(propertiesToFetch)

    if (fleetClearance === FLEET_AUTH_STATUS.PENDING) {
      const brand =
        graphQlResponse.universal &&
        graphQlResponse.universal.brand &&
        graphQlResponse.universal.brand.data
      const vin =
        graphQlResponse.universal &&
        graphQlResponse.universal.vin &&
        graphQlResponse.universal.vin.data

      if (brand && vin) {
        await knex('vehicles').where('id', id).update({
          vin,
          brand,
        })
      }
    }

    await knex('logs').insert({
      vin,
      response: JSON.stringify(graphQlResponse),
    })

    return graphQlResponse
  }

  static async refresh(vehicle) {
    const isFleetVehicle = !!vehicle.fleet_clearance
    if (!isFleetVehicle) {
      return null
    }
    const status = await Auth.checkFleetClearance(vehicle.vin)

    await knex('vehicles')
      .where({ vin: vehicle.vin })
      .update({
        fleet_clearance: status,
        pending: status !== FLEET_AUTH_STATUS.APPROVED,
      })

    const accessTokenResponse = await Auth.getFleetVehicleAccessToken(vehicle)

    if (status === FLEET_AUTH_STATUS.APPROVED) {
      await Auth.initProperties(accessTokenResponse)
    }

    return status
  }
}

export default VehicleService
