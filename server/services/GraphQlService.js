import jwt from 'jsonwebtoken'
import uuid4 from 'uuid4'
import axios from 'axios'
// import CAPABILITIES from '../../data/capabilities.json' 
// import UNIVERSAL_PROPERTIES from '../../data/universalProperties.json'
import cache from '../cache.js'

const CAPABILITIES = {
  "adas": {
    "name": "adas",
    "name_cased": "adas",
    "name_pretty": "ADAS",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 108
    },
    "api": {
      "intro": 13,
      "update": 13
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "off"
          },
          {
            "id": 1,
            "name": "on"
          }
        ],
        "id": 1,
        "added": 13,
        "description": "Indicates whether the driver assistance system is active or not.",
        "examples": [
          {
            "data_component": "01",
            "value": "on",
            "description": "ADAS is on"
          }
        ],
        "customType": "on_off_state",
        "capabilityName": "adas"
      },
      {
        "name": "alertness_system_status",
        "name_cased": "alertnessSystemStatus",
        "name_pretty": "Alertness system status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 2,
        "added": 13,
        "description": "Indicates if the driver alertness warning is active or inactive.",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Driver alertness warning system is active."
          }
        ],
        "customType": "active_state",
        "capabilityName": "adas"
      },
      {
        "name": "forward_collision_warning_system",
        "name_cased": "forwardCollisionWarningSystem",
        "name_pretty": "Forward collision warning system",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 3,
        "added": 13,
        "description": "Indicates whether the forward collision warning system is active or inactive.",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Forward collision warning system is active."
          }
        ],
        "customType": "active_state",
        "capabilityName": "adas"
      },
      {
        "name": "blind_spot_warning_state",
        "name_cased": "blindSpotWarningState",
        "name_pretty": "Blind spot warning state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 4,
        "added": 13,
        "description": "Indicates whether the blind spot warning system is active or not.",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Blind spot warning is active."
          }
        ],
        "customType": "active_state",
        "capabilityName": "adas"
      },
      {
        "id": 5,
        "name": "blind_spot_warning_system_coverage",
        "name_cased": "blindSpotWarningSystemCoverage",
        "name_pretty": "Blind spot warning system coverage",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Blind spot warning system coverage.",
        "enum_values": [
          {
            "id": 0,
            "name": "regular"
          },
          {
            "id": 1,
            "name": "trailer"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "regular",
            "description": "Blind spot warning system coverage is regular."
          }
        ],
        "capabilityName": "adas"
      },
      {
        "name": "rear_cross_warning_system",
        "name_cased": "rearCrossWarningSystem",
        "name_pretty": "Rear cross warning system",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 6,
        "added": 13,
        "description": "Indicates whether the rear cross warning system is active or not.",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Rear cross warning system is active."
          }
        ],
        "customType": "active_state",
        "capabilityName": "adas"
      },
      {
        "name": "automated_parking_brake",
        "name_cased": "automatedParkingBrake",
        "name_pretty": "Automated parking brake",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 7,
        "added": 13,
        "description": "Automatic brake state",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Automated parking brake is active."
          }
        ],
        "customType": "active_state",
        "capabilityName": "adas"
      },
      {
        "name": "lane_keep_assist_system",
        "name_cased": "laneKeepAssistSystem",
        "name_pretty": "Lane keep assist system",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "off"
          },
          {
            "id": 1,
            "name": "on"
          }
        ],
        "id": 8,
        "added": 13,
        "description": "Indicates if the lane keep assist system is turned on or not.",
        "examples": [
          {
            "data_component": "01",
            "value": "on",
            "description": "Lane keep assist system is turned on."
          }
        ],
        "customType": "on_off_state",
        "capabilityName": "adas"
      },
      {
        "name": "lane_keep_assists_states",
        "name_cased": "laneKeepAssistsStates",
        "name_pretty": "Lane keep assists states",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "left"
              },
              {
                "id": 1,
                "name": "right"
              }
            ],
            "capabilityName": "adas"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "adas"
          }
        ],
        "id": 9,
        "name_singluar": "lane_keep_assist_state",
        "added": 13,
        "multiple": true,
        "description": "Lane keeping assist state indicating the vehicle is actively controlling the wheels.",
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "location": "left",
              "state": "inactive"
            },
            "description": "Left lane keeping assist is not actively controlling the wheels."
          },
          {
            "data_component": "0101",
            "values": {
              "location": "right",
              "state": "active"
            },
            "description": "Right lane keeping assist is actively controlling the wheels."
          }
        ],
        "customType": "lane_keep_assist_state",
        "capabilityName": "adas"
      },
      {
        "name": "park_assists",
        "name_cased": "parkAssists",
        "name_pretty": "Park assists",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location longitudinal",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "location_longitudinal",
            "capabilityName": "adas"
          },
          {
            "name": "alarm",
            "name_cased": "alarm",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "adas"
          },
          {
            "name": "muted",
            "name_cased": "muted",
            "name_pretty": "Muted",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "not_muted"
              },
              {
                "id": 1,
                "name": "muted"
              }
            ],
            "customType": "muted",
            "capabilityName": "adas"
          }
        ],
        "id": 10,
        "name_singluar": "park_assist",
        "added": 13,
        "multiple": true,
        "description": "If the alarm is active and the driver has muted or not park assists.",
        "examples": [
          {
            "data_component": "000000",
            "values": {
              "location": "front",
              "alarm": "inactive",
              "muted": "not_muted"
            },
            "description": "Front park assist is inactive and not muted."
          },
          {
            "data_component": "010100",
            "values": {
              "location": "rear",
              "alarm": "active",
              "muted": "not_muted"
            },
            "description": "Rear park assist is active and not muted."
          }
        ],
        "customType": "park_assist",
        "capabilityName": "adas"
      },
      {
        "name": "blind_spot_warning_system",
        "name_cased": "blindSpotWarningSystem",
        "name_pretty": "Blind spot warning system",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "off"
          },
          {
            "id": 1,
            "name": "on"
          }
        ],
        "id": 11,
        "added": 13,
        "description": "Indicates whether the blind spot warning system is turned on or not.",
        "examples": [
          {
            "data_component": "01",
            "value": "on",
            "description": "Blind spot warning system is turned on."
          }
        ],
        "customType": "on_off_state",
        "capabilityName": "adas"
      }
    ]
  },
  "browser": {
    "name": "browser",
    "name_cased": "browser",
    "name_pretty": "Browser",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 73
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "setters": [
      {
        "name": "load_url",
        "mandatory": [
          1
        ],
        "description": "Load a URL in the headunit browser. A URL shortener can be used in other cases. Note that for the vehicle emulator the URL has to be for a secure site (HTTPS)."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "url",
        "type": "string",
        "name_cased": "url",
        "name_pretty": "URL",
        "description": "The URL",
        "examples": [
          {
            "data_component": "68747470733a2f2f61626f75742e686967682d6d6f62696c6974792e636f6d",
            "value": "https://about.high-mobility.com",
            "description": "URL is \"https://about.high-mobility.com\""
          }
        ],
        "capabilityName": "browser"
      }
    ]
  },
  "capabilities": {
    "name": "capabilities",
    "name_cased": "capabilities",
    "name_pretty": "Capabilities",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 16
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "getters": {
      "name": "get_capabilities"
    },
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "name": "capabilities",
        "name_cased": "capabilities",
        "name_pretty": "Capabilities",
        "type": "custom",
        "items": [
          {
            "name": "capability_id",
            "name_cased": "capabilityID",
            "name_pretty": "Capability ID",
            "type": "uinteger",
            "size": 2,
            "description": "The identifier of the supported capability",
            "capabilityName": "capabilities"
          },
          {
            "name": "supported_property_ids",
            "name_cased": "supportedPropertyIDs",
            "name_pretty": "Supported property IDs",
            "type": "bytes",
            "description": "Array of supported property identifiers",
            "capabilityName": "capabilities"
          }
        ],
        "id": 1,
        "multiple": true,
        "name_singular": "capability",
        "examples": [
          {
            "data_component": "002000050203040506",
            "values": {
              "capability_id": 32,
              "supported_property_ids": [
                2,
                3,
                4,
                5,
                6
              ]
            },
            "description": "Doors supports inside locks, locks, positions, inside locks state and locks state properties"
          },
          {
            "data_component": "00230003020811",
            "values": {
              "capability_id": 35,
              "supported_property_ids": [
                2,
                8,
                17
              ]
            },
            "description": "Charging supports estimated range, charge limit and departure times properties"
          }
        ],
        "customType": "supported_capability",
        "capabilityName": "capabilities"
      },
      {
        "name": "webhooks",
        "name_cased": "webhooks",
        "name_pretty": "Webhooks",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "available",
            "name_cased": "available",
            "type": "enum",
            "size": 1,
            "description": "If the specified webhook is available.",
            "enum_values": [
              {
                "id": 0,
                "name": "unavailable"
              },
              {
                "id": 1,
                "name": "available"
              }
            ],
            "capabilityName": "capabilities"
          },
          {
            "name": "event",
            "name_cased": "event",
            "type": "enum",
            "name_pretty": "Event",
            "size": 1,
            "description": "Triggered event",
            "enum_values": [
              {
                "id": 0,
                "name": "ping",
                "description": "Sent every time when the webhook is configured or changed."
              },
              {
                "id": 1,
                "name": "trip_started",
                "description": "Sent every time a vehicle starts a trip."
              },
              {
                "id": 2,
                "name": "trip_ended",
                "description": "Sent when a vehicle ends a trip."
              },
              {
                "id": 3,
                "name": "vehicle_location_changed",
                "description": "Sent when the vehicle location changes."
              },
              {
                "id": 4,
                "name": "authorization_changed",
                "description": "Sent when the authorization status changes."
              },
              {
                "id": 5,
                "name": "tire_pressure_changed",
                "description": "Sent when the tire pressure changed to low or too high."
              },
              {
                "id": 6,
                "name": "harsh_acceleration_triggered",
                "description": "Sent when the vehicle’s acceleration rate exceeds the configurable limit for hard acceleration for a duration exceeding the configurable time duration limit."
              },
              {
                "id": 7,
                "name": "harsh_acceleration_pedal_position_triggered",
                "description": "Sent when the vehicle’s acceleration pedal position exceeds the configurable limit for hard acceleration for a duration exceeding the configurable time duration limit."
              },
              {
                "id": 8,
                "name": "harsh_braking_triggered",
                "description": "Indicates if the vehicle’s deceleration rate exceeds the configurable limit for harsh braking for a duration exceeding the configurable time limit."
              },
              {
                "id": 9,
                "name": "harsh_cornering_triggered",
                "description": "Indicates if the vehicle’s lateral acceleration rate exceeds the configurable limit for harsh cornering for a duration exceeding the configurable time duration limit."
              },
              {
                "id": 10,
                "name": "seat_belt_triggered",
                "description": "Indicates a seat belt is buckled while the vehicle is moving."
              },
              {
                "id": 11,
                "name": "maintenance_changed",
                "description": "Triggered when the property \"condition_based_services\" in Maintenance capability changes."
              },
              {
                "id": 12,
                "name": "dashboard_lights_changed",
                "description": "Triggered when the warning/malfunction indicator lights change."
              },
              {
                "id": 13,
                "name": "ignition_changed",
                "description": "Triggered when the ignition state changes, e.g. at the beginning and the end of a trip."
              },
              {
                "id": 14,
                "name": "accident_reported",
                "description": "Triggered when accident assistance call is triggered, either manually by the driver or automatically by the vehicle."
              },
              {
                "id": 15,
                "name": "emergency_reported",
                "description": "Triggered when intelligent emergency call is triggered."
              },
              {
                "id": 16,
                "name": "breakdown_reported",
                "description": "Triggered when the driver calls the roadside assistance service."
              },
              {
                "id": 17,
                "name": "battery_guard_warning",
                "description": "Triggered when the 12V battery runs low"
              },
              {
                "id": 18,
                "name": "engine_changed",
                "description": "Triggered when the engine state changes."
              },
              {
                "id": 19,
                "name": "fleet_clearance_changed",
                "description": "Triggered when the vehicle fleet clearance has changed."
              }
            ]
          }
        ],
        "id": 2,
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "0101",
            "values": {
              "available": "available",
              "event": "trip_started"
            },
            "description": "Webhook 'trip_started' is available to use."
          },
          {
            "data_component": "0102",
            "values": {
              "available": "available",
              "event": "trip_ended"
            },
            "description": "Webhook 'trip_ended' is available to use."
          }
        ],
        "customType": "webhook",
        "capabilityName": "capabilities"
      }
    ]
  },
  "charging": {
    "name": "charging",
    "name_cased": "charging",
    "name_pretty": "Charging",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 35
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "start_stop_charging",
        "mandatory": [
          23
        ],
        "description": "Start or stop charging, which can only be controlled when the vehicle is plugged in."
      },
      {
        "name": "set_charge_limit",
        "mandatory": [
          8
        ],
        "description": "Set the charge limit, to which point the vehicle will charge itself."
      },
      {
        "name": "open_close_charging_port",
        "mandatory": [
          11
        ],
        "description": "Open or close the charge port of the vehicle."
      },
      {
        "name": "set_charge_mode",
        "mandatory": [
          12
        ],
        "description": "Set the charge mode of the vehicle."
      },
      {
        "name": "set_charging_timers",
        "mandatory": [
          21
        ],
        "description": "Set the charging timers of the vehicle. The command can include one of the different timer types or all."
      },
      {
        "name": "set_reduction_of_charging_current_times",
        "mandatory": [
          19
        ],
        "description": "Set the reduction of charging times of the vehicle. The command can include different values for start and stop."
      }
    ],
    "state": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ],
    "properties": [
      {
        "id": 2,
        "name": "estimated_range",
        "name_cased": "estimatedRange",
        "name_pretty": "Estimated range",
        "type": "unit.length",
        "size": 10,
        "description": "Estimated range",
        "examples": [
          {
            "data_component": "1204407b01999999999a",
            "value": {
              "kilometers": 432.1
            },
            "description": "432.1km estimated range"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "name": "battery_level",
        "name_cased": "batteryLevel",
        "name_pretty": "Battery level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Battery level percentage between 0.0-1.0",
        "id": 3,
        "examples": [
          {
            "data_component": "3fe0000000000000",
            "value": 0.5,
            "description": "Battery level 50%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "charging"
      },
      {
        "id": 4,
        "name": "battery_current_ac",
        "name_cased": "batteryCurrentAC",
        "name_pretty": "Battery current (AC)",
        "deprecated": {
          "new_name": "battery_current",
          "reason": "moved AC/DC distinction into a separate property"
        },
        "type": "unit.electric_current",
        "size": 10,
        "description": "Battery alternating current",
        "examples": [
          {
            "data_component": "0900bfe3333333333333",
            "value": {
              "amperes": -0.6
            },
            "description": "Battery alternating current is -0.6A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 5,
        "name": "battery_current_dc",
        "name_cased": "batteryCurrentDC",
        "name_pretty": "Battery current (DC)",
        "deprecated": {
          "new_name": "battery_current",
          "reason": "moved AC/DC distinction into a separate property"
        },
        "type": "unit.electric_current",
        "size": 10,
        "description": "Battery direct current",
        "examples": [
          {
            "data_component": "0900bfe3333333333333",
            "value": {
              "amperes": -0.6
            },
            "description": "Battery direct current is -0.6A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 6,
        "name": "charger_voltage_ac",
        "name_cased": "chargerVoltageAC",
        "name_pretty": "Charger voltage (AC)",
        "deprecated": {
          "new_name": "charger_voltage",
          "reason": "moved AC/DC distinction into a separate property"
        },
        "type": "unit.electric_potential_difference",
        "size": 10,
        "description": "Charger voltage for alternating current",
        "examples": [
          {
            "data_component": "0a004079000000000000",
            "value": {
              "volts": 400
            },
            "description": "Charger voltage is 400.0V for alternating current"
          }
        ],
        "unit": {
          "name": "electric_potential_difference",
          "id": 10,
          "unit_types": [
            {
              "name": "volts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millivolts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilovolts",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 7,
        "name": "charger_voltage_dc",
        "name_cased": "chargerVoltageDC",
        "name_pretty": "Charger voltage (DC)",
        "deprecated": {
          "new_name": "charger_voltage",
          "reason": "moved AC/DC distinction into a separate property"
        },
        "type": "unit.electric_potential_difference",
        "size": 10,
        "description": "Charger voltage for direct current",
        "examples": [
          {
            "data_component": "0a004079000000000000",
            "value": {
              "volts": 400
            },
            "description": "Charger voltage is 400.0V for direct current"
          }
        ],
        "unit": {
          "name": "electric_potential_difference",
          "id": 10,
          "unit_types": [
            {
              "name": "volts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millivolts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilovolts",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "name": "charge_limit",
        "name_cased": "chargeLimit",
        "name_pretty": "Charge limit",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Charge limit percentage between 0.0-1.0",
        "id": 8,
        "examples": [
          {
            "data_component": "3feccccccccccccd",
            "value": 0.9,
            "description": "Charge limit is set to 90%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "charging"
      },
      {
        "id": 9,
        "name": "time_to_complete_charge",
        "name_cased": "timeToCompleteCharge",
        "name_pretty": "Time to complete charge",
        "type": "unit.duration",
        "size": 10,
        "description": "Time until charging completed",
        "examples": [
          {
            "data_component": "0701404e000000000000",
            "value": {
              "minutes": 60
            },
            "description": "Time to complete charge is 60.0 minutes"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 10,
        "name": "charging_rate_kw",
        "name_cased": "chargingRateKW",
        "name_pretty": "Charging rate (kW)",
        "deprecated": {
          "new_name": "charging_rate",
          "reason": "removed the unit from the name"
        },
        "type": "unit.power",
        "size": 10,
        "description": "Charging rate",
        "examples": [
          {
            "data_component": "1402400c000000000000",
            "value": {
              "kilowatts": 3.5
            },
            "description": "Charging rate is 3.5kW"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "name": "charge_port_state",
        "name_cased": "chargePortState",
        "name_pretty": "Charge port state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "open"
          }
        ],
        "id": 11,
        "examples": [
          {
            "data_component": "01",
            "value": "open",
            "description": "Charge port is open"
          }
        ],
        "customType": "position",
        "capabilityName": "charging"
      },
      {
        "id": 12,
        "name": "charge_mode",
        "name_cased": "chargeMode",
        "name_pretty": "Charge mode",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "immediate"
          },
          {
            "id": 1,
            "name": "timer_based"
          },
          {
            "id": 2,
            "name": "inductive",
            "disabled_in_setter": true
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "timer_based",
            "description": "Charging is 'timer based'"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 14,
        "name": "max_charging_current",
        "name_cased": "maxChargingCurrent",
        "name_pretty": "Maximum charging current",
        "type": "unit.electric_current",
        "size": 10,
        "description": "Maximum charging current",
        "examples": [
          {
            "data_component": "09004039000000000000",
            "value": {
              "amperes": 25
            },
            "description": "Maximum charging current is 25.0A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 15,
        "name": "plug_type",
        "name_cased": "plugType",
        "name_pretty": "Plug type",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "type_1"
          },
          {
            "id": 1,
            "name": "type_2"
          },
          {
            "id": 2,
            "name": "ccs",
            "name_pretty": "Combined Charging System (CCS)"
          },
          {
            "id": 3,
            "name": "chademo",
            "name_pretty": "CHAdeMO"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "type_2",
            "description": "Electric plug type is 'Type 2'"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 16,
        "name": "charging_window_chosen",
        "name_cased": "chargingWindowChosen",
        "name_pretty": "Charging window chosen",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "not_chosen"
          },
          {
            "id": 1,
            "name": "chosen"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "not_chosen",
            "description": "Charging window is not chosen"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "name": "departure_times",
        "name_cased": "departureTimes",
        "name_pretty": "Departure times",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "charging"
          },
          {
            "name": "time",
            "name_cased": "time",
            "name_pretty": "Time",
            "type": "custom",
            "size": 2,
            "items": [
              {
                "name": "hour",
                "name_cased": "hour",
                "unit_sign": "h",
                "validation": "min:0|max:23",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 23",
                "capabilityName": "charging"
              },
              {
                "name": "minute",
                "name_cased": "minute",
                "unit_sign": "m",
                "validation": "min:0|max:59",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 59",
                "capabilityName": "charging"
              }
            ],
            "customType": "time",
            "capabilityName": "charging"
          }
        ],
        "id": 17,
        "multiple": true,
        "name_singular": "departure_time",
        "examples": [
          {
            "data_component": "011020",
            "values": {
              "state": "active",
              "time": {
                "hour": 16,
                "minute": 32
              }
            },
            "description": "Departure time 16:32 is active"
          },
          {
            "data_component": "000b33",
            "values": {
              "state": "inactive",
              "time": {
                "hour": 11,
                "minute": 51
              }
            },
            "description": "Departure time 11:51 is inactive"
          }
        ],
        "customType": "departure_time",
        "capabilityName": "charging"
      },
      {
        "name": "reduction_times",
        "name_cased": "reductionTimes",
        "name_pretty": "Reduction of charging times",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "start_stop",
            "name_cased": "startStop",
            "name_pretty": "Start-Stop",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "start"
              },
              {
                "id": 1,
                "name": "stop"
              }
            ],
            "customType": "start_stop",
            "capabilityName": "charging"
          },
          {
            "name": "time",
            "name_cased": "time",
            "name_pretty": "Time",
            "type": "custom",
            "size": 2,
            "items": [
              {
                "name": "hour",
                "name_cased": "hour",
                "unit_sign": "h",
                "validation": "min:0|max:23",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 23",
                "capabilityName": "charging"
              },
              {
                "name": "minute",
                "name_cased": "minute",
                "unit_sign": "m",
                "validation": "min:0|max:59",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 59",
                "capabilityName": "charging"
              }
            ],
            "customType": "time",
            "capabilityName": "charging"
          }
        ],
        "id": 19,
        "multiple": true,
        "name_singular": "reduction_time",
        "examples": [
          {
            "data_component": "001121",
            "values": {
              "start_stop": "start",
              "time": {
                "hour": 17,
                "minute": 33
              }
            },
            "description": "Start reduction of charging at 17:33"
          },
          {
            "data_component": "010c34",
            "values": {
              "start_stop": "stop",
              "time": {
                "hour": 12,
                "minute": 52
              }
            },
            "description": "Stop reduction of charging current at 12:52"
          }
        ],
        "customType": "reduction_time",
        "capabilityName": "charging"
      },
      {
        "id": 20,
        "name": "battery_temperature",
        "name_cased": "batteryTemperature",
        "name_pretty": "Battery temperature",
        "type": "unit.temperature",
        "size": 10,
        "description": "Battery temperature",
        "examples": [
          {
            "data_component": "17014043333333333333",
            "value": {
              "celsius": 38.4
            },
            "description": "The battery temperature is 38.4°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "name": "timers",
        "name_cased": "timers",
        "name_pretty": "Timers",
        "type": "custom",
        "size": 9,
        "items": [
          {
            "name": "timer_type",
            "name_cased": "timerType",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "preferred_start_time"
              },
              {
                "id": 1,
                "name": "preferred_end_time"
              },
              {
                "id": 2,
                "name": "departure_date"
              }
            ],
            "capabilityName": "charging"
          },
          {
            "name": "date",
            "name_cased": "date",
            "type": "timestamp",
            "size": 8,
            "description": "Timer date",
            "capabilityName": "charging"
          }
        ],
        "id": 21,
        "name_singular": "timer",
        "multiple": true,
        "examples": [
          {
            "data_component": "00000001598938e788",
            "values": {
              "timer_type": "preferred_start_time",
              "date": "2017-01-10T16:32:05.000Z"
            },
            "description": "Preferred start time is 10 January 2017 at 16:32:05 UTC"
          },
          {
            "data_component": "0100000159893c9108",
            "values": {
              "timer_type": "preferred_end_time",
              "date": "2017-01-10T16:36:05.000Z"
            },
            "description": "Preferred end time is 10 January 2017 at 16:36:05 GMT"
          },
          {
            "data_component": "0200000159893c9108",
            "values": {
              "timer_type": "departure_date",
              "date": "2017-01-10T16:36:05.000Z"
            },
            "description": "Departure date is 10 January 2017 at 16:36:05 GMT"
          }
        ],
        "customType": "timer",
        "capabilityName": "charging"
      },
      {
        "id": 22,
        "name": "plugged_in",
        "name_cased": "pluggedIn",
        "name_pretty": "Plugged in",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "disconnected"
          },
          {
            "id": 1,
            "name": "plugged_in"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "plugged_in",
            "description": "The charger is plugged in"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 23,
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "not_charging",
            "verb": "stop_charging"
          },
          {
            "id": 1,
            "name": "charging",
            "verb": "start_charging"
          },
          {
            "id": 2,
            "name": "charging_complete",
            "disabled_in_setter": true
          },
          {
            "id": 3,
            "name": "initialising",
            "disabled_in_setter": true
          },
          {
            "id": 4,
            "name": "charging_paused",
            "disabled_in_setter": true
          },
          {
            "id": 5,
            "name": "charging_error",
            "disabled_in_setter": true
          },
          {
            "id": 6,
            "name": "cable_unplugged",
            "disabled_in_setter": true
          },
          {
            "id": 7,
            "name": "slow_charging",
            "disabled_in_setter": true
          },
          {
            "id": 8,
            "name": "fast_charging",
            "disabled_in_setter": true
          },
          {
            "id": 9,
            "name": "discharging",
            "disabled_in_setter": true
          },
          {
            "id": 10,
            "name": "foreign_object_detected",
            "disabled_in_setter": true
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "charging",
            "description": "The vehicle is charging"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 24,
        "name": "charging_rate",
        "name_cased": "chargingRate",
        "name_pretty": "Charging rate",
        "added": 12,
        "type": "unit.power",
        "size": 10,
        "description": "Charge rate when charging",
        "examples": [
          {
            "data_component": "14024062c00000000000",
            "value": {
              "kilowatts": 150
            },
            "description": "Charging rate is 150.0kW"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 25,
        "name": "battery_current",
        "name_cased": "batteryCurrent",
        "name_pretty": "Battery current",
        "added": 12,
        "type": "unit.electric_current",
        "size": 10,
        "description": "Battery current",
        "examples": [
          {
            "data_component": "0900bfe3333333333333",
            "value": {
              "amperes": -0.6
            },
            "description": "Battery current is -0.6A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 26,
        "name": "charger_voltage",
        "name_cased": "chargerVoltage",
        "name_pretty": "Charger voltage",
        "added": 12,
        "type": "unit.electric_potential_difference",
        "size": 10,
        "description": "Charger voltage",
        "examples": [
          {
            "data_component": "0a004079000000000000",
            "value": {
              "volts": 400
            },
            "description": "Charger voltage is 400.0V"
          }
        ],
        "unit": {
          "name": "electric_potential_difference",
          "id": 10,
          "unit_types": [
            {
              "name": "volts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millivolts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilovolts",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 27,
        "name": "current_type",
        "name_cased": "currentType",
        "name_pretty": "Current type",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Type of current in use",
        "enum_values": [
          {
            "id": 0,
            "name": "alternating_current",
            "name_pretty": "AC"
          },
          {
            "id": 1,
            "name": "direct_current",
            "name_pretty": "DC"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "alternating_current",
            "description": "Alternating current is used"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 28,
        "name": "max_range",
        "name_cased": "maxRange",
        "name_pretty": "Max range",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Maximum electric range with 100% of battery",
        "examples": [
          {
            "data_component": "12044081580000000000",
            "value": {
              "kilometers": 555
            },
            "description": "Maximum electric range is 555.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "charging"
      },
      {
        "id": 29,
        "name": "starter_battery_state",
        "name_cased": "starterBatteryState",
        "name_pretty": "Starter battery state",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "State of the starter battery",
        "enum_values": [
          {
            "id": 0,
            "name": "red",
            "description": "Battery charge is greater than 0%"
          },
          {
            "id": 1,
            "name": "yellow",
            "description": "Battery charge is greater than 40%"
          },
          {
            "id": 2,
            "name": "green",
            "description": "Battery charge is greater than 70%"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "green",
            "description": "Starter battery status is green"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 30,
        "name": "smart_charging_status",
        "name_cased": "smartChargingStatus",
        "name_pretty": "Smart charging status",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Status of optimized/intelligent charging",
        "enum_values": [
          {
            "id": 0,
            "name": "wallbox_is_active"
          },
          {
            "id": 1,
            "name": "scc_is_active",
            "description": "Smart Charge Communication is active"
          },
          {
            "id": 2,
            "name": "peak_setting_active",
            "description": "On/Off-peak setting is active (charges when electricity is cheaper)"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "scc_is_active",
            "description": "Smart Charge Communication is active"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "name": "battery_level_at_departure",
        "name_cased": "batteryLevelAtDeparture",
        "name_pretty": "Battery level at departure",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Battery charge level expected at time of departure",
        "id": 31,
        "added": 12,
        "examples": [
          {
            "data_component": "3feccccccccccccd",
            "value": 0.9,
            "description": "Battery level is expected to be 90% at time of departure"
          }
        ],
        "customType": "percentage",
        "capabilityName": "charging"
      },
      {
        "name": "preconditioning_departure_status",
        "name_cased": "preconditioningDepartureStatus",
        "name_pretty": "Preconditioning departure status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 32,
        "added": 12,
        "description": "Status of preconditioning at departure time",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Preconditioning is active for departure time"
          }
        ],
        "customType": "active_state",
        "capabilityName": "charging"
      },
      {
        "name": "preconditioning_immediate_status",
        "name_cased": "preconditioningImmediateStatus",
        "name_pretty": "Preconditioning immediate status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 33,
        "added": 12,
        "description": "Status of immediate preconditioning",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Immediate preconditioning is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "charging"
      },
      {
        "name": "preconditioning_departure_enabled",
        "name_cased": "preconditioningDepartureEnabled",
        "name_pretty": "Preconditioning departure enabled",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "disabled",
            "verb": "disable"
          },
          {
            "id": 1,
            "name": "enabled",
            "verb": "enable"
          }
        ],
        "id": 34,
        "added": 12,
        "description": "Preconditioning activation status at departure",
        "examples": [
          {
            "data_component": "01",
            "value": "enabled",
            "description": "Preconditioning is enabled for departure"
          }
        ],
        "customType": "enabled_state",
        "capabilityName": "charging"
      },
      {
        "id": 35,
        "name": "preconditioning_error",
        "name_cased": "preconditioningError",
        "name_pretty": "Preconditioning error",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Preconditioning error if one is encountered",
        "enum_values": [
          {
            "id": 0,
            "name": "no_change"
          },
          {
            "id": 1,
            "name": "not_possible_low",
            "description": "Preconditioning not possible because battery or fuel is low"
          },
          {
            "id": 2,
            "name": "not_possible_finished",
            "description": "Preconditioning not possible because charging is not finished"
          },
          {
            "id": 3,
            "name": "available_after_engine_restart"
          },
          {
            "id": 4,
            "name": "general_error"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "not_possible_low",
            "description": "Preconditioning not possible because battery or fuel is low"
          }
        ],
        "capabilityName": "charging"
      },
      {
        "id": 36,
        "name": "battery_capacity",
        "name_cased": "batteryCapacity",
        "name_pretty": "Battery capacity",
        "added": 13,
        "type": "unit.energy",
        "size": 10,
        "description": "Indicates the battery capacity",
        "examples": [
          {
            "data_component": "0c044051800000000000",
            "value": {
              "kilowatt_hours": 70
            },
            "description": "Battery capacity is 70.0Kwh"
          }
        ],
        "unit": {
          "name": "energy",
          "id": 12,
          "unit_types": [
            {
              "name": "joules",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilojoules",
              "id": 1,
              "conversion_linear": 1000
            },
            {
              "name": "watt_hours",
              "id": 3,
              "conversion_linear": 3600
            },
            {
              "name": "kilowatt_hours",
              "id": 4,
              "conversion_linear": 3600000
            }
          ]
        },
        "capabilityName": "charging"
      }
    ]
  },
  "charging_session": {
    "name": "charging_session",
    "name_cased": "chargingSession",
    "name_pretty": "Charging session",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 109
    },
    "api": {
      "intro": 13,
      "update": 13
    },
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "properties": [
      {
        "name": "public_charging_points",
        "name_cased": "publicChargingPoints",
        "name_pretty": "Public charging points",
        "type": "custom",
        "items": [
          {
            "name": "city",
            "name_cased": "city",
            "type": "string",
            "description": "City the charging point is in.",
            "capabilityName": "chargingSession"
          },
          {
            "name": "postal_code",
            "name_cased": "postalCode",
            "type": "string",
            "description": "Postal code the charging point is at.",
            "capabilityName": "chargingSession"
          },
          {
            "name": "street",
            "name_cased": "street",
            "type": "string",
            "description": "Street address the chargin point is at.",
            "capabilityName": "chargingSession"
          },
          {
            "name": "provider",
            "name_cased": "provider",
            "type": "string",
            "description": "The provider name of the charging point.",
            "capabilityName": "chargingSession"
          }
        ],
        "id": 1,
        "added": 13,
        "multiple": true,
        "description": "Matching public charging points.",
        "examples": [
          {
            "data_component": "00064265726C696e000531303939370014536b616c69747a65722053747261c39f6520363800284869676820456e65726779204c6f7720507269636573204368617267696e672050726f7669646572",
            "values": {
              "city": "Berlin",
              "postal_code": "10997",
              "street": "Skalitzer Straße 68",
              "provider": "High Energy Low Prices Charging Provider"
            },
            "description": "Matching public charging point from 'High Energy Low Prices Charging Provider' is located at Skalitzer Straße 60, 10997 Berlin"
          },
          {
            "data_component": "000754616c6c696e6e0005313031333000074861726a752036001f46726565205769666920616e64204368617267696e672050726f7669646572",
            "values": {
              "city": "Tallinn",
              "postal_code": "10130",
              "street": "Harju 6",
              "provider": "Free Wifi and Charging Provider"
            },
            "description": "Matching public charging point from 'Free Wifi and Charging Provider' is located at Harju 6, 10130 Tallinn"
          }
        ],
        "customType": "charging_point",
        "capabilityName": "chargingSession"
      },
      {
        "name": "displayed_state_of_charge",
        "name_cased": "displayedStateOfCharge",
        "name_pretty": "Displayed state of charge",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Displayed state of charge to the driver",
        "id": 2,
        "added": 13,
        "examples": [
          {
            "data_component": "3fd28f5c28f5c28f",
            "value": 0.29,
            "description": "Displayed state of charge is 29.0%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "chargingSession"
      },
      {
        "name": "displayed_start_state_of_charge",
        "name_cased": "displayedStartStateOfCharge",
        "name_pretty": "Displayed start state of charge",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Displayed state of charge at start to the driver",
        "id": 3,
        "added": 13,
        "examples": [
          {
            "data_component": "3fbeb851eb851eb8",
            "value": 0.12,
            "description": "Displayed start state of charge is 12.0%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "chargingSession"
      },
      {
        "id": 4,
        "name": "business_errors",
        "name_cased": "businessErrors",
        "name_pretty": "Business errors",
        "name_singular": "business_error",
        "added": 13,
        "type": "string",
        "multiple": true,
        "examples": [
          {
            "data_component": "506c6561736520636865636b20746865206368617267696e672073746174696f6e",
            "value": "Please check the charging station",
            "description": "Business error states 'Please check the charging station'"
          },
          {
            "data_component": "5265706561742074686520706c75672d696e",
            "value": "Repeat the plug-in",
            "description": "Business error states 'Repeat the plug-in'"
          }
        ],
        "capabilityName": "chargingSession"
      },
      {
        "id": 5,
        "name": "time_zone",
        "name_cased": "timeZone",
        "name_pretty": "Time zone",
        "added": 13,
        "type": "string",
        "description": "Time zone of the charging session",
        "examples": [
          {
            "data_component": "4575726f70652f4265726c696e",
            "value": "Europe/Berlin",
            "description": "Charging session`s time zone is Europe - Berlin"
          }
        ],
        "capabilityName": "chargingSession"
      },
      {
        "id": 6,
        "name": "start_time",
        "name_cased": "startTime",
        "name_pretty": "Start time",
        "added": 13,
        "type": "timestamp",
        "size": 8,
        "description": "Start time of the charging session",
        "examples": [
          {
            "data_component": "000001781bcbb94d",
            "value": "2021-03-10T11:00:39.373Z",
            "description": "Charging session started on 10. March 2021 at 10:57:57 CET"
          }
        ],
        "capabilityName": "chargingSession"
      },
      {
        "id": 7,
        "name": "end_time",
        "name_cased": "endTime",
        "name_pretty": "End time",
        "added": 13,
        "type": "timestamp",
        "size": 8,
        "description": "End time of the charging session",
        "examples": [
          {
            "data_component": "000001781bc9fd3e",
            "value": "2021-03-10T10:58:45.694Z",
            "description": "Charging session ended on 10. March 2021 at 10:58:45 CET"
          }
        ],
        "capabilityName": "chargingSession"
      },
      {
        "id": 8,
        "name": "total_charging_duration",
        "name_cased": "totalChargingDuration",
        "name_pretty": "Total charging duration",
        "added": 13,
        "type": "unit.duration",
        "size": 10,
        "description": "Total time charging was active during the session",
        "examples": [
          {
            "data_component": "070040c11e8000000000",
            "value": {
              "seconds": 8765
            },
            "description": "Total time the charging was active was 8765.0s in the session"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "chargingSession"
      },
      {
        "id": 9,
        "name": "calculated_energy_charged",
        "name_cased": "calculatedEnergyCharged",
        "name_pretty": "Calculated energy charged",
        "added": 13,
        "type": "unit.energy",
        "size": 10,
        "description": "Calculated amount of energy charged during the session",
        "examples": [
          {
            "data_component": "0c04400c89374bc6a7f0",
            "value": {
              "kilowatt_hours": 3.567
            },
            "description": "Calculated amount of energy charged was 3.567Kwh during the session"
          }
        ],
        "unit": {
          "name": "energy",
          "id": 12,
          "unit_types": [
            {
              "name": "joules",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilojoules",
              "id": 1,
              "conversion_linear": 1000
            },
            {
              "name": "watt_hours",
              "id": 3,
              "conversion_linear": 3600
            },
            {
              "name": "kilowatt_hours",
              "id": 4,
              "conversion_linear": 3600000
            }
          ]
        },
        "capabilityName": "chargingSession"
      },
      {
        "id": 10,
        "name": "energy_charged",
        "name_cased": "energyCharged",
        "name_pretty": "Energy charged",
        "added": 13,
        "type": "unit.energy",
        "size": 10,
        "description": "Energy charged during the session",
        "examples": [
          {
            "data_component": "0c044002c28f5c28f5c3",
            "value": {
              "kilowatt_hours": 2.345
            },
            "description": "Energy charged in the last session was 2.345Kwh"
          }
        ],
        "unit": {
          "name": "energy",
          "id": 12,
          "unit_types": [
            {
              "name": "joules",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilojoules",
              "id": 1,
              "conversion_linear": 1000
            },
            {
              "name": "watt_hours",
              "id": 3,
              "conversion_linear": 3600
            },
            {
              "name": "kilowatt_hours",
              "id": 4,
              "conversion_linear": 3600000
            }
          ]
        },
        "capabilityName": "chargingSession"
      },
      {
        "name": "preconditioning_state",
        "name_cased": "preconditioningState",
        "name_pretty": "Preconditioning state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 11,
        "added": 13,
        "description": "Preconditioning is active or not",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Preconditioning is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "chargingSession"
      },
      {
        "id": 12,
        "name": "odometer",
        "name_cased": "odometer",
        "name_pretty": "Odometer",
        "added": 13,
        "type": "unit.length",
        "size": 10,
        "description": "The vehicle odometer value in a given units",
        "examples": [
          {
            "data_component": "120440a0040000000000",
            "value": {
              "kilometers": 2050
            },
            "description": "Odometer is showing 2050.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "chargingSession"
      },
      {
        "name": "charging_cost",
        "name_cased": "chargingCost",
        "name_pretty": "Charging cost",
        "type": "custom",
        "description": "Charging cost information",
        "items": [
          {
            "name": "currency",
            "name_cased": "currency",
            "type": "string",
            "description": "Currency ISO code",
            "capabilityName": "chargingSession"
          },
          {
            "name": "calculated_charging_cost",
            "name_cased": "calculatedChargingCost",
            "type": "double",
            "size": 8,
            "description": "Calculated charging cost",
            "capabilityName": "chargingSession"
          },
          {
            "name": "calculated_savings",
            "name_cased": "calculatedSavings",
            "type": "double",
            "size": 8,
            "description": "Calculated savings from charging",
            "capabilityName": "chargingSession"
          },
          {
            "name": "simulated_immediate_charging_cost",
            "name_cased": "simulatedImmediateChargingCost",
            "type": "double",
            "size": 8,
            "description": "Simulated charging costs",
            "capabilityName": "chargingSession"
          }
        ],
        "id": 13,
        "added": 13,
        "examples": [
          {
            "data_component": "0003455552400234eab76265223fe226809d495183400234eab7626522",
            "values": {
              "currency": "EUR",
              "calculated_charging_cost": 2.2758383109,
              "calculated_savings": 0.5672,
              "simulated_immediate_charging_cost": 2.2758383109
            },
            "description": "Charging costs are shown in 'EUR' with calculated costs of 2.2758383109, calculated savings 0.5672 and simulated charging cost of 2.2758383109"
          }
        ],
        "customType": "charging_cost",
        "capabilityName": "chargingSession"
      },
      {
        "name": "location",
        "name_cased": "location",
        "name_pretty": "Location",
        "type": "custom",
        "description": "Charging location address",
        "items": [
          {
            "name": "municipality",
            "name_cased": "municipality",
            "type": "string",
            "description": "Municipality component of the address",
            "capabilityName": "chargingSession"
          },
          {
            "name": "formatted_address",
            "name_cased": "formattedAddress",
            "type": "string",
            "description": "Full formatted address",
            "capabilityName": "chargingSession"
          },
          {
            "name": "street_address",
            "name_cased": "streetAddress",
            "type": "string",
            "description": "Streed address component",
            "capabilityName": "chargingSession"
          }
        ],
        "id": 14,
        "added": 13,
        "examples": [
          {
            "data_component": "00064265726c696e002b536b616c69747a65722053747261c39f652036382c203130393937204265726c696e2c204765726d616e790014536b616c69747a65722053747261c39f65203638",
            "values": {
              "municipality": "Berlin",
              "formatted_address": "Skalitzer Straße 68, 10997 Berlin, Germany",
              "street_address": "Skalitzer Straße 68"
            },
            "description": "Charging location was 'Skalitzer Straße 68, 10997 Berlin, Germany'"
          }
        ],
        "customType": "charging_location",
        "capabilityName": "chargingSession"
      }
    ]
  },
  "chassis_settings": {
    "name": "chassis_settings",
    "name_cased": "chassisSettings",
    "name_pretty": "Chassis Settings",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 83
    },
    "api": {
      "intro": 5,
      "update": 12
    },
    "getters": {
      "name": "get_chassis_settings"
    },
    "setters": [
      {
        "name": "set_driving_mode",
        "mandatory": [
          1
        ],
        "description": "Set the driving mode."
      },
      {
        "name": "start_stop_sports_chrono",
        "mandatory": [
          2
        ],
        "description": "Start/Stop sport chrono."
      },
      {
        "name": "set_spring_rates",
        "mandatory": [
          5
        ],
        "description": "Set the spring rates."
      },
      {
        "name": "set_chassis_position",
        "mandatory": [
          8
        ],
        "description": "Set the chassis position."
      }
    ],
    "state": [
      1,
      2,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "properties": [
      {
        "name": "driving_mode",
        "name_cased": "drivingMode",
        "name_pretty": "Driving mode",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "regular"
          },
          {
            "id": 1,
            "name": "eco"
          },
          {
            "id": 2,
            "name": "sport"
          },
          {
            "id": 3,
            "name": "sport_plus"
          },
          {
            "id": 4,
            "name": "ecoPlus"
          },
          {
            "id": 5,
            "name": "comfort"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "eco",
            "description": "Driving mode is set to ECO"
          }
        ],
        "customType": "driving_mode",
        "capabilityName": "chassisSettings"
      },
      {
        "id": 2,
        "name": "sport_chrono",
        "name_cased": "sportChrono",
        "name_pretty": "Sport chrono",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "stop"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "start"
          },
          {
            "id": 2,
            "name": "reset"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Sport Chrono is active"
          }
        ],
        "capabilityName": "chassisSettings"
      },
      {
        "name": "current_spring_rates",
        "name_cased": "currentSpringRates",
        "name_pretty": "Current spring rates",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "axle",
            "name_cased": "axle",
            "name_pretty": "Axle",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "axle",
            "capabilityName": "chassisSettings"
          },
          {
            "name": "spring_rate",
            "name_cased": "springRate",
            "type": "unit.torque",
            "size": 10,
            "description": "The suspension spring rate",
            "unit": {
              "name": "torque",
              "id": 24,
              "unit_types": [
                {
                  "name": "newton_meters",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "newton_millimeters",
                  "id": 1,
                  "conversion_linear": 0.001
                },
                {
                  "name": "pound_feet",
                  "id": 2,
                  "conversion_linear": 0.73756214927727
                }
              ]
            },
            "capabilityName": "chassisSettings"
          }
        ],
        "id": 5,
        "multiple": true,
        "name_singular": "current_spring_rate",
        "description": "The current values for the spring rates",
        "examples": [
          {
            "data_component": "0018014035000000000000",
            "values": {
              "axle": "front",
              "spring_rate": {
                "newton_millimeters": 21
              }
            },
            "description": "Front axle spring rate is 21.0N/mm"
          },
          {
            "data_component": "0118014037000000000000",
            "values": {
              "axle": "rear",
              "spring_rate": {
                "newton_millimeters": 23
              }
            },
            "description": "Rear axle spring rate is 23.0N/mm"
          }
        ],
        "customType": "spring_rate",
        "capabilityName": "chassisSettings"
      },
      {
        "name": "maximum_spring_rates",
        "name_cased": "maximumSpringRates",
        "name_pretty": "Maximum spring rates",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "axle",
            "name_cased": "axle",
            "name_pretty": "Axle",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "axle",
            "capabilityName": "chassisSettings"
          },
          {
            "name": "spring_rate",
            "name_cased": "springRate",
            "type": "unit.torque",
            "size": 10,
            "description": "The suspension spring rate",
            "unit": {
              "name": "torque",
              "id": 24,
              "unit_types": [
                {
                  "name": "newton_meters",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "newton_millimeters",
                  "id": 1,
                  "conversion_linear": 0.001
                },
                {
                  "name": "pound_feet",
                  "id": 2,
                  "conversion_linear": 0.73756214927727
                }
              ]
            },
            "capabilityName": "chassisSettings"
          }
        ],
        "id": 6,
        "multiple": true,
        "name_singular": "maximum_spring_rate",
        "description": "The maximum possible values for the spring rates",
        "examples": [
          {
            "data_component": "0018014042800000000000",
            "values": {
              "axle": "front",
              "spring_rate": {
                "newton_millimeters": 37
              }
            },
            "description": "Front axle maximum spring rate is 37.0N/mm"
          },
          {
            "data_component": "0118014043800000000000",
            "values": {
              "axle": "rear",
              "spring_rate": {
                "newton_millimeters": 39
              }
            },
            "description": "Rear axle maximum spring rate is 39.0N/mm"
          }
        ],
        "customType": "spring_rate",
        "capabilityName": "chassisSettings"
      },
      {
        "name": "minimum_spring_rates",
        "name_cased": "minimumSpringRates",
        "name_pretty": "Minimum spring rates",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "axle",
            "name_cased": "axle",
            "name_pretty": "Axle",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "axle",
            "capabilityName": "chassisSettings"
          },
          {
            "name": "spring_rate",
            "name_cased": "springRate",
            "type": "unit.torque",
            "size": 10,
            "description": "The suspension spring rate",
            "unit": {
              "name": "torque",
              "id": 24,
              "unit_types": [
                {
                  "name": "newton_meters",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "newton_millimeters",
                  "id": 1,
                  "conversion_linear": 0.001
                },
                {
                  "name": "pound_feet",
                  "id": 2,
                  "conversion_linear": 0.73756214927727
                }
              ]
            },
            "capabilityName": "chassisSettings"
          }
        ],
        "id": 7,
        "multiple": true,
        "name_singular": "minimum_spring_rate",
        "description": "The minimum possible values for the spring rates",
        "examples": [
          {
            "data_component": "0018014030000000000000",
            "values": {
              "axle": "front",
              "spring_rate": {
                "newton_millimeters": 16
              }
            },
            "description": "Front axle minimum spring rate is 16.0N/mm"
          },
          {
            "data_component": "0118014032000000000000",
            "values": {
              "axle": "rear",
              "spring_rate": {
                "newton_millimeters": 18
              }
            },
            "description": "Rear axle minimum spring rate is 18.0N/mm"
          }
        ],
        "customType": "spring_rate",
        "capabilityName": "chassisSettings"
      },
      {
        "id": 8,
        "name": "current_chassis_position",
        "name_cased": "currentChassisPosition",
        "name_pretty": "Current chassis position",
        "type": "unit.length",
        "size": 10,
        "description": "The chassis position calculated from the lowest point",
        "examples": [
          {
            "data_component": "12014039666666666666",
            "value": {
              "millimeters": 25.4
            },
            "description": "Current chassis position is 25.4mm"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "chassisSettings"
      },
      {
        "id": 9,
        "name": "maximum_chassis_position",
        "name_cased": "maximumChassisPosition",
        "name_pretty": "Maximum chassis position",
        "type": "unit.length",
        "size": 10,
        "description": "The maximum possible value for the chassis position",
        "examples": [
          {
            "data_component": "1201404bc00000000000",
            "value": {
              "millimeters": 55.5
            },
            "description": "Maximum chassis position is 55.5mm"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "chassisSettings"
      },
      {
        "id": 10,
        "name": "minimum_chassis_position",
        "name_cased": "minimumChassisPosition",
        "name_pretty": "Minimum chassis position",
        "type": "unit.length",
        "size": 10,
        "description": "The minimum possible value for the chassis position",
        "examples": [
          {
            "data_component": "1201c03c666666666666",
            "value": {
              "millimeters": -28.4
            },
            "description": "Minimum chassis position is -28.4mm"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "chassisSettings"
      }
    ]
  },
  "climate": {
    "name": "climate",
    "name_cased": "climate",
    "name_pretty": "Climate",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 36
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "change_starting_times",
        "mandatory": [
          11
        ],
        "description": "Set the HVAC (Heating, ventilation, and air conditioning) automated starting times."
      },
      {
        "name": "start_stop_hvac",
        "mandatory": [
          5
        ],
        "description": "Start or stop the HVAC system to reach driver and passenger set temperatures. The vehicle will use cooling, defrosting and defogging as appropriate."
      },
      {
        "name": "start_stop_defogging",
        "mandatory": [
          6
        ],
        "description": "Manually start or stop defogging."
      },
      {
        "name": "start_stop_defrosting",
        "mandatory": [
          7
        ],
        "description": "Manually start or stop defrosting."
      },
      {
        "name": "start_stop_ionising",
        "mandatory": [
          8
        ],
        "description": "Manually start or stop ionising."
      },
      {
        "name": "set_temperature_settings",
        "optional": [
          3,
          4,
          12
        ],
        "description": "Set the preferred temperature settings."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      11,
      12
    ],
    "properties": [
      {
        "id": 1,
        "name": "inside_temperature",
        "name_cased": "insideTemperature",
        "name_pretty": "Inside temperature",
        "type": "unit.temperature",
        "size": 10,
        "description": "The inside temperature",
        "examples": [
          {
            "data_component": "1701403319999999999a",
            "value": {
              "celsius": 19.1
            },
            "description": "Inside temperature is 19.1°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      },
      {
        "id": 2,
        "name": "outside_temperature",
        "name_cased": "outsideTemperature",
        "name_pretty": "Outside temperature",
        "type": "unit.temperature",
        "size": 10,
        "description": "The outside temperature",
        "examples": [
          {
            "data_component": "17014028666666666666",
            "value": {
              "celsius": 12.2
            },
            "description": "Outside temperature is 12.2°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      },
      {
        "id": 3,
        "name": "driver_temperature_setting",
        "name_cased": "driverTemperatureSetting",
        "name_pretty": "Driver temperature setting",
        "type": "unit.temperature",
        "size": 10,
        "description": "The driver temperature setting",
        "examples": [
          {
            "data_component": "17014035800000000000",
            "value": {
              "celsius": 21.5
            },
            "description": "Driver temperature setting is 21.5°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      },
      {
        "id": 4,
        "name": "passenger_temperature_setting",
        "name_cased": "passengerTemperatureSetting",
        "name_pretty": "Passenger temperature setting",
        "type": "unit.temperature",
        "size": 10,
        "description": "The passenger temperature setting",
        "examples": [
          {
            "data_component": "17014035b33333333333",
            "value": {
              "celsius": 21.7
            },
            "description": "Passenger temperature setting is 21.7°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      },
      {
        "name": "hvac_state",
        "name_cased": "hvacState",
        "name_pretty": "HVAC state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 5,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "HVAC is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "climate"
      },
      {
        "name": "defogging_state",
        "name_cased": "defoggingState",
        "name_pretty": "Defogging state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 6,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Defogging is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "climate"
      },
      {
        "name": "defrosting_state",
        "name_cased": "defrostingState",
        "name_pretty": "Defrosting state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 7,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Defrosting is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "climate"
      },
      {
        "name": "ionising_state",
        "name_cased": "ionisingState",
        "name_pretty": "Ionising state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 8,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Ionising is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "climate"
      },
      {
        "id": 9,
        "name": "defrosting_temperature_setting",
        "name_cased": "defrostingTemperatureSetting",
        "name_pretty": "Defrosting temperature setting",
        "type": "unit.temperature",
        "size": 10,
        "description": "The defrosting temperature setting",
        "examples": [
          {
            "data_component": "17014035333333333333",
            "value": {
              "celsius": 21.2
            },
            "description": "Defrosting temperature setting is 21.2°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      },
      {
        "name": "hvac_weekday_starting_times",
        "name_cased": "hvacWeekdayStartingTimes",
        "name_pretty": "HVAC weekday starting times",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "weekday",
            "name_cased": "weekday",
            "name_pretty": "Weekday",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "monday"
              },
              {
                "id": 1,
                "name": "tuesday"
              },
              {
                "id": 2,
                "name": "wednesday"
              },
              {
                "id": 3,
                "name": "thursday"
              },
              {
                "id": 4,
                "name": "friday"
              },
              {
                "id": 5,
                "name": "saturday"
              },
              {
                "id": 6,
                "name": "sunday"
              },
              {
                "id": 7,
                "name": "automatic"
              }
            ],
            "customType": "weekday",
            "capabilityName": "climate"
          },
          {
            "name": "time",
            "name_cased": "time",
            "name_pretty": "Time",
            "type": "custom",
            "size": 2,
            "items": [
              {
                "name": "hour",
                "name_cased": "hour",
                "unit_sign": "h",
                "validation": "min:0|max:23",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 23",
                "capabilityName": "climate"
              },
              {
                "name": "minute",
                "name_cased": "minute",
                "unit_sign": "m",
                "validation": "min:0|max:59",
                "type": "uinteger",
                "size": 1,
                "description": "Value between 0 and 59",
                "capabilityName": "climate"
              }
            ],
            "customType": "time",
            "capabilityName": "climate"
          }
        ],
        "id": 11,
        "name_singular": "hvac_weekday_starting_time",
        "multiple": true,
        "examples": [
          {
            "data_component": "001000",
            "values": {
              "weekday": "monday",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is started on monday at 16:00"
          },
          {
            "data_component": "011000",
            "values": {
              "weekday": "tuesday",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is started on tuesday at 16:00"
          },
          {
            "data_component": "021000",
            "values": {
              "weekday": "wednesday",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is started on wednesday at 16:00"
          },
          {
            "data_component": "031000",
            "values": {
              "weekday": "thursday",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is started on thursday at 16:00"
          },
          {
            "data_component": "041000",
            "values": {
              "weekday": "friday",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is started on friday at 16:00"
          },
          {
            "data_component": "05121e",
            "values": {
              "weekday": "saturday",
              "time": {
                "hour": 18,
                "minute": 30
              }
            },
            "description": "HVAC is started on saturday at 18:30"
          },
          {
            "data_component": "06131f",
            "values": {
              "weekday": "sunday",
              "time": {
                "hour": 19,
                "minute": 31
              }
            },
            "description": "HVAC is started on sunday at 19:31"
          },
          {
            "data_component": "071000",
            "values": {
              "weekday": "automatic",
              "time": {
                "hour": 16,
                "minute": 0
              }
            },
            "description": "HVAC is automatic"
          }
        ],
        "customType": "hvac_weekday_starting_time",
        "capabilityName": "climate"
      },
      {
        "id": 12,
        "name": "rear_temperature_setting",
        "name_cased": "rearTemperatureSetting",
        "name_pretty": "Rear temperature setting",
        "type": "unit.temperature",
        "size": 10,
        "description": "The rear temperature",
        "examples": [
          {
            "data_component": "1701403599999999999a",
            "value": {
              "celsius": 21.6
            },
            "description": "Rear temperature setting is 21.6°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "climate"
      }
    ]
  },
  "crash": {
    "name": "crash",
    "name_cased": "crash",
    "name_pretty": "Crash",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 107
    },
    "api": {
      "intro": 13,
      "update": 13
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "properties": [
      {
        "name": "incidents",
        "name_cased": "incidents",
        "name_pretty": "Incidents",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "lateral"
              },
              {
                "id": 2,
                "name": "rear"
              }
            ],
            "capabilityName": "crash"
          },
          {
            "name": "severity",
            "name_cased": "severity",
            "name_pretty": "Severity",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "very_high"
              },
              {
                "id": 1,
                "name": "high"
              },
              {
                "id": 2,
                "name": "medium"
              },
              {
                "id": 3,
                "name": "low"
              }
            ],
            "capabilityName": "crash"
          },
          {
            "name": "repairs",
            "name_cased": "repairs",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "unknown"
              },
              {
                "id": 1,
                "name": "needed"
              },
              {
                "id": 2,
                "name": "not_needed"
              }
            ],
            "capabilityName": "crash"
          }
        ],
        "id": 1,
        "name_singular": "incident",
        "added": 13,
        "multiple": true,
        "examples": [
          {
            "data_component": "000101",
            "values": {
              "location": "front",
              "severity": "high",
              "repairs": "needed"
            },
            "description": "High severity front crash incident needs repairs"
          },
          {
            "data_component": "010201",
            "values": {
              "location": "lateral",
              "severity": "medium",
              "repairs": "needed"
            },
            "description": "Medium severity lateral crash incident needs repairs"
          },
          {
            "data_component": "020302",
            "values": {
              "location": "rear",
              "severity": "low",
              "repairs": "not_needed"
            },
            "description": "Low severity rear crash incident does not need repairs"
          }
        ],
        "customType": "crash_incident",
        "capabilityName": "crash"
      },
      {
        "id": 2,
        "name": "type",
        "name_cased": "type",
        "name_pretty": "Type",
        "added": 13,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "pedestrian"
          },
          {
            "id": 1,
            "name": "non_pedestrian"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "non_pedestrian",
            "description": "Crash type is non-pedestrian (i.e. a another vehicle)"
          }
        ],
        "capabilityName": "crash"
      },
      {
        "id": 3,
        "name": "tipped_state",
        "name_cased": "tippedState",
        "name_pretty": "Tipped state",
        "added": 13,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "tipped_over"
          },
          {
            "id": 1,
            "name": "not_tipped"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "not_tipped",
            "description": "Crash did not tip over the vehicle"
          }
        ],
        "capabilityName": "crash"
      },
      {
        "name": "automatic_ecall",
        "name_cased": "automaticECall",
        "name_pretty": "Automatic eCall",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "disabled",
            "verb": "disable"
          },
          {
            "id": 1,
            "name": "enabled",
            "verb": "enable"
          }
        ],
        "id": 4,
        "added": 13,
        "description": "Automatic emergency call enabled state",
        "examples": [
          {
            "data_component": "01",
            "value": "enabled",
            "description": "Automatic eCall is enabled"
          }
        ],
        "customType": "enabled_state",
        "capabilityName": "crash"
      },
      {
        "id": 5,
        "name": "severity",
        "name_cased": "severity",
        "name_pretty": "Severity",
        "added": 13,
        "type": "uinteger",
        "size": 1,
        "description": "Severity of the crash (from 0 to 7 - very high severity)",
        "examples": [
          {
            "data_component": "02",
            "value": 2,
            "description": "Crash severity is 2"
          }
        ],
        "capabilityName": "crash"
      },
      {
        "id": 6,
        "name": "impact_zone",
        "name_cased": "impactZone",
        "name_pretty": "Impact zone",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Impact zone of the crash",
        "enum_values": [
          {
            "id": 0,
            "name": "predestrian_protection"
          },
          {
            "id": 1,
            "name": "rollover"
          },
          {
            "id": 2,
            "name": "rear_passenger_side"
          },
          {
            "id": 3,
            "name": "rear_driver_side"
          },
          {
            "id": 4,
            "name": "side_passeger_side"
          },
          {
            "id": 5,
            "name": "side_driver_side"
          },
          {
            "id": 6,
            "name": "front_passenger_side"
          },
          {
            "id": 7,
            "name": "front_driver_side"
          }
        ],
        "examples": [
          {
            "data_component": "07",
            "value": "front_driver_side",
            "description": "Impact zone is front driver side"
          }
        ],
        "capabilityName": "crash"
      }
    ]
  },
  "cruise_control": {
    "name": "cruise_control",
    "name_cased": "cruiseControl",
    "name_pretty": "Cruise Control",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 98
    },
    "api": {
      "intro": 7,
      "update": 12
    },
    "disabled_in": [
      "web"
    ],
    "getters": {},
    "setters": [
      {
        "name": "activate_deactivate_cruise_control",
        "mandatory": [
          1
        ],
        "optional": [
          3
        ],
        "description": "Activate or deactivate cruise control."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5
    ],
    "properties": [
      {
        "name": "cruise_control",
        "name_cased": "cruiseControl",
        "name_pretty": "Cruise control",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Cruise control is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "cruiseControl"
      },
      {
        "id": 2,
        "name": "limiter",
        "name_cased": "limiter",
        "name_pretty": "Limiter",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "not_set"
          },
          {
            "id": 1,
            "name": "higher_speed_requested"
          },
          {
            "id": 2,
            "name": "lower_speed_requested"
          },
          {
            "id": 3,
            "name": "speed_fixed"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "higher_speed_requested",
            "description": "Higher speed requested by the limiter"
          }
        ],
        "capabilityName": "cruiseControl"
      },
      {
        "id": 3,
        "name": "target_speed",
        "name_cased": "targetSpeed",
        "name_pretty": "Target speed",
        "type": "unit.speed",
        "size": 10,
        "description": "The target speed",
        "examples": [
          {
            "data_component": "1601404e800000000000",
            "value": {
              "kilometers_per_hour": 61
            },
            "description": "The target speed is set to 61.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "cruiseControl"
      },
      {
        "name": "adaptive_cruise_control",
        "name_cased": "adaptiveCruiseControl",
        "name_pretty": "Adaptive Cruise Control",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Adaptive Cruise Control is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "cruiseControl"
      },
      {
        "id": 5,
        "name": "acc_target_speed",
        "name_cased": "accTargetSpeed",
        "name_pretty": "Adaptive Cruise Control (ACC) target speed",
        "type": "unit.speed",
        "size": 10,
        "description": "The target speed of the Adaptive Cruise Control",
        "examples": [
          {
            "data_component": "16014050c00000000000",
            "value": {
              "kilometers_per_hour": 67
            },
            "description": "The Adaptive Cruise Control target speed is set to 67.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "cruiseControl"
      }
    ]
  },
  "dashboard_lights": {
    "name": "dashboard_lights",
    "name_cased": "dashboardLights",
    "name_pretty": "Dashboard Lights",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 97
    },
    "api": {
      "intro": 7,
      "update": 11
    },
    "getters": {
      "name": "get_dashboard_lights"
    },
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "name": "dashboard_lights",
        "name_cased": "dashboardLights",
        "name_pretty": "Dashboard lights",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "name",
            "name_cased": "name",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "high_beam",
                "name_pretty": "High beam, main beam"
              },
              {
                "id": 1,
                "name": "low_beam",
                "name_pretty": "Low beam, dipped beam"
              },
              {
                "id": 2,
                "name": "hazard_warning",
                "name_pretty": "Hazard warning"
              },
              {
                "id": 3,
                "name": "brake_failure",
                "name_pretty": "Brake failure/brake system malfunction"
              },
              {
                "id": 4,
                "name": "hatch_open",
                "name_pretty": "Hatch open"
              },
              {
                "id": 5,
                "name": "fuel_level",
                "name_pretty": "Fuel level"
              },
              {
                "id": 6,
                "name": "engine_coolant_temperature",
                "name_pretty": "Engine coolant temperature"
              },
              {
                "id": 7,
                "name": "battery_charging_condition",
                "name_pretty": "Battery charging condition"
              },
              {
                "id": 8,
                "name": "engine_oil",
                "name_pretty": "Engine oil"
              },
              {
                "id": 9,
                "name": "position_lights",
                "name_pretty": "Position lights, side lights"
              },
              {
                "id": 10,
                "name": "front_fog_light",
                "name_pretty": "Front fog light"
              },
              {
                "id": 11,
                "name": "rear_fog_light",
                "name_pretty": "Rear fog light"
              },
              {
                "id": 12,
                "name": "park_heating",
                "name_pretty": "Park Heating"
              },
              {
                "id": 13,
                "name": "engine_indicator",
                "name_pretty": "Engine indicator"
              },
              {
                "id": 14,
                "name": "service_call",
                "name_pretty": "Service, call for maintenance"
              },
              {
                "id": 15,
                "name": "transmission_fluid_temperature",
                "name_pretty": "Transmission fluid temperature"
              },
              {
                "id": 16,
                "name": "transmission_failure",
                "name_pretty": "Transmission failure/malfunction"
              },
              {
                "id": 17,
                "name": "anti_lock_brake_failure",
                "name_pretty": "Anti-lock brake system failure"
              },
              {
                "id": 18,
                "name": "worn_brake_linings",
                "name_pretty": "Worn brake linings"
              },
              {
                "id": 19,
                "name": "windscreen_washer_fluid",
                "name_pretty": "Windscreen washer fluid/windshield washer fluid"
              },
              {
                "id": 20,
                "name": "tire_failure",
                "name_pretty": "Tire failure/malfunction"
              },
              {
                "id": 21,
                "name": "engine_oil_level",
                "name_pretty": "Engine oil level"
              },
              {
                "id": 22,
                "name": "engine_coolant_level",
                "name_pretty": "Engine coolant level"
              },
              {
                "id": 23,
                "name": "steering_failure",
                "name_pretty": "Steering failure"
              },
              {
                "id": 24,
                "name": "esc_indication",
                "name_pretty": "Electronic Speed Controller indiction"
              },
              {
                "id": 25,
                "name": "brake_lights",
                "name_pretty": "Brake lights"
              },
              {
                "id": 26,
                "name": "adblue_level",
                "name_pretty": "AdBlue level"
              },
              {
                "id": 27,
                "name": "fuel_filter_diff_pressure",
                "name_pretty": "Fuel filter differential pressure"
              },
              {
                "id": 28,
                "name": "seat_belt",
                "name_pretty": "Seat belt"
              },
              {
                "id": 29,
                "name": "advanced_braking",
                "name_pretty": "Advanced emergency braking system"
              },
              {
                "id": 30,
                "name": "acc",
                "name_pretty": "Autonomous/adaptive Cruise Control"
              },
              {
                "id": 31,
                "name": "trailer_connected",
                "name_pretty": "Trailer connected"
              },
              {
                "id": 32,
                "name": "airbag",
                "name_pretty": "Airbag"
              },
              {
                "id": 33,
                "name": "esc_switched_off",
                "name_pretty": "ESC switched off"
              },
              {
                "id": 34,
                "name": "lane_departure_warning_off",
                "name_pretty": "Lane departure warning switched off"
              },
              {
                "id": 35,
                "name": "air_filter_minder"
              },
              {
                "id": 36,
                "name": "air_suspension_ride_control_fault"
              },
              {
                "id": 37,
                "name": "all_wheel_drive_disabled"
              },
              {
                "id": 38,
                "name": "anti_theft"
              },
              {
                "id": 39,
                "name": "blind_spot_detection"
              },
              {
                "id": 40,
                "name": "charge_system_fault"
              },
              {
                "id": 41,
                "name": "check_fuel_cap"
              },
              {
                "id": 42,
                "name": "check_fuel_fill_inlet"
              },
              {
                "id": 43,
                "name": "check_fuel_filter"
              },
              {
                "id": 44,
                "name": "dc_temp_warning"
              },
              {
                "id": 45,
                "name": "dc_warning_status"
              },
              {
                "id": 46,
                "name": "diesel_engine_idle_shutdown"
              },
              {
                "id": 47,
                "name": "diesel_engine_warning"
              },
              {
                "id": 48,
                "name": "diesel_exhaust_fluid_system_fault"
              },
              {
                "id": 49,
                "name": "diesel_exhaust_over_temp"
              },
              {
                "id": 50,
                "name": "diesel_exhaust_fluid_quality"
              },
              {
                "id": 51,
                "name": "diesel_filter_regeneration"
              },
              {
                "id": 52,
                "name": "diesel_particulate_filter"
              },
              {
                "id": 53,
                "name": "diesel_pre_heat"
              },
              {
                "id": 54,
                "name": "electric_trailer_brake_connection"
              },
              {
                "id": 55,
                "name": "ev_battery_cell_max_volt_warning"
              },
              {
                "id": 56,
                "name": "ev_battery_cell_min_volt_warning"
              },
              {
                "id": 57,
                "name": "ev_battery_charge_energy_storage_warning"
              },
              {
                "id": 58,
                "name": "ev_battery_high_level_warning"
              },
              {
                "id": 59,
                "name": "ev_battery_high_temperature_warning"
              },
              {
                "id": 60,
                "name": "ev_battery_insulation_resist_warning"
              },
              {
                "id": 61,
                "name": "ev_battery_jump_level_warning"
              },
              {
                "id": 62,
                "name": "ev_battery_low_level_warning"
              },
              {
                "id": 63,
                "name": "ev_battery_max_volt_veh_energy_warning"
              },
              {
                "id": 64,
                "name": "ev_battery_min_volt_veh_energy_warning"
              },
              {
                "id": 65,
                "name": "ev_battery_over_charge_warning"
              },
              {
                "id": 66,
                "name": "ev_battery_poor_cell_warning"
              },
              {
                "id": 67,
                "name": "ev_battery_temp_diff_warning"
              },
              {
                "id": 68,
                "name": "forward_collision_warning"
              },
              {
                "id": 69,
                "name": "fuel_door_open"
              },
              {
                "id": 70,
                "name": "hill_descent_control_fault"
              },
              {
                "id": 71,
                "name": "hill_start_assist_warning"
              },
              {
                "id": 72,
                "name": "hv_interlocking_status_warning"
              },
              {
                "id": 73,
                "name": "lighting_system_failure"
              },
              {
                "id": 74,
                "name": "malfunction_indicator"
              },
              {
                "id": 75,
                "name": "motor_controller_temp_warning"
              },
              {
                "id": 76,
                "name": "park_aid_malfunction"
              },
              {
                "id": 77,
                "name": "passive_entry_passive_start"
              },
              {
                "id": 78,
                "name": "powertrain_malfunction"
              },
              {
                "id": 79,
                "name": "restraints_indicator_warning"
              },
              {
                "id": 80,
                "name": "start_stop_engine_warning"
              },
              {
                "id": 81,
                "name": "traction_control_disabled"
              },
              {
                "id": 82,
                "name": "traction_control_active"
              },
              {
                "id": 83,
                "name": "traction_motor_temp_warning"
              },
              {
                "id": 84,
                "name": "tire_pressure_monitor_system_warning"
              },
              {
                "id": 85,
                "name": "water_in_fuel"
              },
              {
                "id": 86,
                "name": "tire_warning_front_right"
              },
              {
                "id": 87,
                "name": "tire_warning_front_left"
              },
              {
                "id": 88,
                "name": "tire_warning_rear_right"
              },
              {
                "id": 89,
                "name": "tire_warning_rear_left"
              },
              {
                "id": 90,
                "name": "tire_warning_system_error"
              },
              {
                "id": 91,
                "name": "battery_low_warning"
              },
              {
                "id": 92,
                "name": "brake_fluid_warning"
              },
              {
                "id": 93,
                "name": "active_hood_fault"
              },
              {
                "id": 94,
                "name": "active_spoiler_fault"
              },
              {
                "id": 95,
                "name": "adjust_tire_pressure"
              },
              {
                "id": 96,
                "name": "steering_lock_alert"
              },
              {
                "id": 97,
                "name": "anti_pollution_failure_engine_start_impossible"
              },
              {
                "id": 98,
                "name": "anti_pollution_system_failure"
              },
              {
                "id": 99,
                "name": "anti_reverse_system_failing"
              },
              {
                "id": 100,
                "name": "auto_parking_brake"
              },
              {
                "id": 101,
                "name": "automatic_braking_deactive"
              },
              {
                "id": 102,
                "name": "automatic_braking_system_fault"
              },
              {
                "id": 103,
                "name": "automatic_lights_settings_failure"
              },
              {
                "id": 104,
                "name": "keyfob_battery_alarm"
              },
              {
                "id": 105,
                "name": "trunk_open"
              },
              {
                "id": 106,
                "name": "check_reversing_lamp"
              },
              {
                "id": 107,
                "name": "crossing_line_system_alert_failure"
              },
              {
                "id": 108,
                "name": "dipped_beam_headlamps_front_left_failure"
              },
              {
                "id": 109,
                "name": "dipped_beam_headlamps_front_right_failure"
              },
              {
                "id": 110,
                "name": "directional_headlamps_failure"
              },
              {
                "id": 111,
                "name": "directional_light_failure"
              },
              {
                "id": 112,
                "name": "dsg_failing"
              },
              {
                "id": 113,
                "name": "electric_mode_not_available"
              },
              {
                "id": 114,
                "name": "electronic_lock_failure"
              },
              {
                "id": 115,
                "name": "engine_control_system_failure"
              },
              {
                "id": 116,
                "name": "engine_oil_pressure_alert"
              },
              {
                "id": 117,
                "name": "esp_failure"
              },
              {
                "id": 118,
                "name": "excessive_oil_temperature"
              },
              {
                "id": 119,
                "name": "tire_front_left_flat"
              },
              {
                "id": 120,
                "name": "tire_front_right_flat"
              },
              {
                "id": 121,
                "name": "tire_rear_left_flat"
              },
              {
                "id": 122,
                "name": "tire_rear_right_flat"
              },
              {
                "id": 123,
                "name": "fog_light_front_left_failure"
              },
              {
                "id": 124,
                "name": "fog_light_front_right_failure"
              },
              {
                "id": 125,
                "name": "fog_light_rear_left_failure"
              },
              {
                "id": 126,
                "name": "fog_light_rear_right_failure"
              },
              {
                "id": 127,
                "name": "fog_light_front_fault"
              },
              {
                "id": 128,
                "name": "door_front_left_open"
              },
              {
                "id": 129,
                "name": "door_front_left_open_high_speed"
              },
              {
                "id": 130,
                "name": "tire_front_left_not_monitored"
              },
              {
                "id": 131,
                "name": "door_front_right_open"
              },
              {
                "id": 132,
                "name": "door_front_right_open_high_speed"
              },
              {
                "id": 133,
                "name": "tire_front_right_not_monitored"
              },
              {
                "id": 134,
                "name": "headlights_left_failure"
              },
              {
                "id": 135,
                "name": "headlights_right_failure"
              },
              {
                "id": 136,
                "name": "hybrid_system_fault"
              },
              {
                "id": 137,
                "name": "hybrid_system_fault_repaired_vehicle"
              },
              {
                "id": 138,
                "name": "hydraulic_pressure_or_brake_fuild_insufficient"
              },
              {
                "id": 139,
                "name": "lane_departure_fault"
              },
              {
                "id": 140,
                "name": "limited_visibility_aids_camera"
              },
              {
                "id": 141,
                "name": "tire_pressure_low"
              },
              {
                "id": 142,
                "name": "maintenance_date_exceeded"
              },
              {
                "id": 143,
                "name": "maintenance_odometer_exceeded"
              },
              {
                "id": 144,
                "name": "other_failing_system"
              },
              {
                "id": 145,
                "name": "parking_brake_control_failing"
              },
              {
                "id": 146,
                "name": "parking_space_measuring_system_failure"
              },
              {
                "id": 147,
                "name": "place_gear_to_parking"
              },
              {
                "id": 148,
                "name": "power_steering_assitance_failure"
              },
              {
                "id": 149,
                "name": "power_steering_failure"
              },
              {
                "id": 150,
                "name": "preheating_deactivated_battery_too_low"
              },
              {
                "id": 151,
                "name": "preheating_deactivated_fuel_level_too_low"
              },
              {
                "id": 152,
                "name": "preheating_deactivated_battery_set_the_clock"
              },
              {
                "id": 153,
                "name": "fog_light_rear_fault"
              },
              {
                "id": 154,
                "name": "door_rear_left_open"
              },
              {
                "id": 155,
                "name": "door_rear_left_open_high_speed"
              },
              {
                "id": 156,
                "name": "tire_rear_left_not_monitored"
              },
              {
                "id": 157,
                "name": "door_rear_right_open"
              },
              {
                "id": 158,
                "name": "door_rear_right_open_high_speed"
              },
              {
                "id": 159,
                "name": "tire_rear_right_not_monitored"
              },
              {
                "id": 160,
                "name": "screen_rear_open"
              },
              {
                "id": 161,
                "name": "retractable_roof_mechanism_fault"
              },
              {
                "id": 162,
                "name": "reverse_light_left_failure"
              },
              {
                "id": 163,
                "name": "reverse_light_right_failure"
              },
              {
                "id": 164,
                "name": "risk_of_ice"
              },
              {
                "id": 165,
                "name": "roof_operation_impossible_apply_parking_break"
              },
              {
                "id": 166,
                "name": "roof_operation_impossible_apply_start_engine"
              },
              {
                "id": 167,
                "name": "roof_operation_impossible_temperature_too_high"
              },
              {
                "id": 168,
                "name": "seatbelt_passenger_front_right_unbuckled"
              },
              {
                "id": 169,
                "name": "seatbelt_passenger_rear_left_unbuckled"
              },
              {
                "id": 170,
                "name": "seatbelt_passenger_rear_center_unbuckled"
              },
              {
                "id": 171,
                "name": "seatbelt_passenger_rear_right_unbuckled"
              },
              {
                "id": 172,
                "name": "battery_secondary_low"
              },
              {
                "id": 173,
                "name": "shock_sensor_failing"
              },
              {
                "id": 174,
                "name": "side_lights_front_left_failure"
              },
              {
                "id": 175,
                "name": "side_lights_front_right_failure"
              },
              {
                "id": 176,
                "name": "side_lights_rear_left_failure"
              },
              {
                "id": 177,
                "name": "side_lights_rear_right_failure"
              },
              {
                "id": 178,
                "name": "spare_wheel_fitter_driving_aids_deactivated"
              },
              {
                "id": 179,
                "name": "speed_control_failure"
              },
              {
                "id": 180,
                "name": "stop_light_left_failure"
              },
              {
                "id": 181,
                "name": "stop_light_right_failure"
              },
              {
                "id": 182,
                "name": "suspension_failure"
              },
              {
                "id": 183,
                "name": "suspension_failure_reduce_speed"
              },
              {
                "id": 184,
                "name": "suspension_fault_limited_to_90kmh"
              },
              {
                "id": 185,
                "name": "tire_pressure_sensor_failure"
              },
              {
                "id": 186,
                "name": "trunk_open_high_speed"
              },
              {
                "id": 187,
                "name": "trunk_window_open"
              },
              {
                "id": 188,
                "name": "turn_signal_front_left_failure"
              },
              {
                "id": 189,
                "name": "turn_signal_front_right_failure"
              },
              {
                "id": 190,
                "name": "turn_signal_rear_left_failure"
              },
              {
                "id": 191,
                "name": "turn_signal_rear_right_failure"
              },
              {
                "id": 192,
                "name": "tire_under_inflation"
              },
              {
                "id": 193,
                "name": "wheel_pressure_fault"
              },
              {
                "id": 194,
                "name": "oil_change_warning"
              },
              {
                "id": 195,
                "name": "inspection_warning"
              }
            ],
            "capabilityName": "dashboardLights"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "On-Off State",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "off"
              },
              {
                "id": 1,
                "name": "on"
              }
            ],
            "customType": "on_off_state",
            "capabilityName": "dashboardLights"
          }
        ],
        "id": 1,
        "multiple": true,
        "name_singular": "dashboard_light",
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "name": "high_beam",
              "state": "off"
            },
            "description": "High beam is off"
          },
          {
            "data_component": "0100",
            "values": {
              "name": "low_beam",
              "state": "off"
            },
            "description": "Low beam is off"
          },
          {
            "data_component": "0201",
            "values": {
              "name": "hazard_warning",
              "state": "on"
            },
            "description": "Hazard warning is on"
          },
          {
            "data_component": "0300",
            "values": {
              "name": "brake_failure",
              "state": "off"
            },
            "description": "Brake failure/brake system malfunction is off"
          },
          {
            "data_component": "0400",
            "values": {
              "name": "hatch_open",
              "state": "off"
            },
            "description": "Hatch open is off"
          },
          {
            "data_component": "0500",
            "values": {
              "name": "fuel_level",
              "state": "off"
            },
            "description": "Fuel level is off"
          },
          {
            "data_component": "0600",
            "values": {
              "name": "engine_coolant_temperature",
              "state": "off"
            },
            "description": "Engine coolant temperature is off"
          },
          {
            "data_component": "0700",
            "values": {
              "name": "battery_charging_condition",
              "state": "off"
            },
            "description": "Battery charging condition is off"
          },
          {
            "data_component": "0800",
            "values": {
              "name": "engine_oil",
              "state": "off"
            },
            "description": "Engine oil is off"
          },
          {
            "data_component": "0900",
            "values": {
              "name": "position_lights",
              "state": "off"
            },
            "description": "Position lights is off"
          },
          {
            "data_component": "0a00",
            "values": {
              "name": "front_fog_light",
              "state": "off"
            },
            "description": "Front fog light is off"
          },
          {
            "data_component": "0b00",
            "values": {
              "name": "rear_fog_light",
              "state": "off"
            },
            "description": "Rear fog light is off"
          },
          {
            "data_component": "0c00",
            "values": {
              "name": "park_heating",
              "state": "off"
            },
            "description": "Park heating is off"
          },
          {
            "data_component": "0d00",
            "values": {
              "name": "engine_indicator",
              "state": "off"
            },
            "description": "Engine indicator is off"
          },
          {
            "data_component": "0e00",
            "values": {
              "name": "service_call",
              "state": "off"
            },
            "description": "Service call for maintenance is off"
          },
          {
            "data_component": "0f01",
            "values": {
              "name": "transmission_fluid_temperature",
              "state": "on"
            },
            "description": "Transmission fluid temperature is on"
          },
          {
            "data_component": "1000",
            "values": {
              "name": "transmission_failure",
              "state": "off"
            },
            "description": "Transmission failure/malfunction is off"
          },
          {
            "data_component": "1100",
            "values": {
              "name": "anti_lock_brake_failure",
              "state": "off"
            },
            "description": "Anti-lock brake system failure is off"
          },
          {
            "data_component": "1200",
            "values": {
              "name": "worn_brake_linings",
              "state": "off"
            },
            "description": "Worn brake linings is off"
          },
          {
            "data_component": "1300",
            "values": {
              "name": "windscreen_washer_fluid",
              "state": "off"
            },
            "description": "Windscreen washer fluid/windshield washer fluid is off"
          },
          {
            "data_component": "1400",
            "values": {
              "name": "tire_failure",
              "state": "off"
            },
            "description": "Tire failure/malfunction is off"
          },
          {
            "data_component": "1501",
            "values": {
              "name": "engine_oil_level",
              "state": "on"
            },
            "description": "Engine oil temperature is on"
          },
          {
            "data_component": "1600",
            "values": {
              "name": "engine_coolant_level",
              "state": "off"
            },
            "description": "Engine coolant level is off"
          },
          {
            "data_component": "1700",
            "values": {
              "name": "steering_failure",
              "state": "off"
            },
            "description": "Steering failure is off"
          },
          {
            "data_component": "1800",
            "values": {
              "name": "esc_indication",
              "state": "off"
            },
            "description": "Electronic Speed Controller is off"
          },
          {
            "data_component": "1900",
            "values": {
              "name": "brake_lights",
              "state": "off"
            },
            "description": "Brake lights is off"
          },
          {
            "data_component": "1a00",
            "values": {
              "name": "adblue_level",
              "state": "off"
            },
            "description": "AdBlue is off"
          },
          {
            "data_component": "1b00",
            "values": {
              "name": "fuel_filter_diff_pressure",
              "state": "off"
            },
            "description": "Fuel filter differential pressure is off"
          },
          {
            "data_component": "1c00",
            "values": {
              "name": "seat_belt",
              "state": "off"
            },
            "description": "Seat belt is off"
          },
          {
            "data_component": "1d00",
            "values": {
              "name": "advanced_braking",
              "state": "off"
            },
            "description": "Advanced emergency braking system is off"
          },
          {
            "data_component": "1e00",
            "values": {
              "name": "acc",
              "state": "off"
            },
            "description": "Autonomous Cruise Control is off"
          },
          {
            "data_component": "1f00",
            "values": {
              "name": "trailer_connected",
              "state": "off"
            },
            "description": "Trailer connected is off"
          },
          {
            "data_component": "2000",
            "values": {
              "name": "airbag",
              "state": "off"
            },
            "description": "Airbag is off"
          },
          {
            "data_component": "2100",
            "values": {
              "name": "esc_switched_off",
              "state": "off"
            },
            "description": "ESC switched off is off"
          },
          {
            "data_component": "2200",
            "values": {
              "name": "lane_departure_warning_off",
              "state": "off"
            },
            "description": "Lane departure warning switched off is off"
          },
          {
            "data_component": "2300",
            "values": {
              "name": "air_filter_minder",
              "state": "off"
            },
            "description": "Air filter minder is off"
          },
          {
            "data_component": "2400",
            "values": {
              "name": "air_suspension_ride_control_fault",
              "state": "off"
            },
            "description": "Air suspension ride control fault is off"
          },
          {
            "data_component": "2500",
            "values": {
              "name": "all_wheel_drive_disabled",
              "state": "off"
            },
            "description": "All wheel drive disabled is off"
          },
          {
            "data_component": "2600",
            "values": {
              "name": "anti_theft",
              "state": "off"
            },
            "description": "Anti theft is off"
          },
          {
            "data_component": "2700",
            "values": {
              "name": "blind_spot_detection",
              "state": "off"
            },
            "description": "Blind spot detection is off"
          },
          {
            "data_component": "2800",
            "values": {
              "name": "charge_system_fault",
              "state": "off"
            },
            "description": "Charge system fault is off"
          },
          {
            "data_component": "2900",
            "values": {
              "name": "check_fuel_cap",
              "state": "off"
            },
            "description": "Check fuel cap is off"
          },
          {
            "data_component": "2a00",
            "values": {
              "name": "check_fuel_fill_inlet",
              "state": "off"
            },
            "description": "Check fuel fill inlet is off"
          },
          {
            "data_component": "2b00",
            "values": {
              "name": "check_fuel_filter",
              "state": "off"
            },
            "description": "Check fuel filter is off"
          },
          {
            "data_component": "2c00",
            "values": {
              "name": "dc_temp_warning",
              "state": "off"
            },
            "description": "DC temperature warning is off"
          },
          {
            "data_component": "2d00",
            "values": {
              "name": "dc_warning_status",
              "state": "off"
            },
            "description": "DC warning status is off"
          },
          {
            "data_component": "2e00",
            "values": {
              "name": "diesel_engine_idle_shutdown",
              "state": "off"
            },
            "description": "Diesel engine idle shutdown is off"
          },
          {
            "data_component": "2f00",
            "values": {
              "name": "diesel_engine_warning",
              "state": "off"
            },
            "description": "Diesel engine warning is off"
          },
          {
            "data_component": "3000",
            "values": {
              "name": "diesel_exhaust_fluid_system_fault",
              "state": "off"
            },
            "description": "Diesel exhaust fluid system fault is off"
          },
          {
            "data_component": "3100",
            "values": {
              "name": "diesel_exhaust_over_temp",
              "state": "off"
            },
            "description": "Diesel exhaust over temperature is off"
          },
          {
            "data_component": "3200",
            "values": {
              "name": "diesel_exhaust_fluid_quality",
              "state": "off"
            },
            "description": "Diesel exhaust fluid quality is off"
          },
          {
            "data_component": "3300",
            "values": {
              "name": "diesel_filter_regeneration",
              "state": "off"
            },
            "description": "Diesel filter regeneration is off"
          },
          {
            "data_component": "3400",
            "values": {
              "name": "diesel_particulate_filter",
              "state": "off"
            },
            "description": "Diesel particulate filter is off"
          },
          {
            "data_component": "3500",
            "values": {
              "name": "diesel_pre_heat",
              "state": "off"
            },
            "description": "Diesel pre heat is off"
          },
          {
            "data_component": "3600",
            "values": {
              "name": "electric_trailer_brake_connection",
              "state": "off"
            },
            "description": "Electric trailer brake connection is off"
          },
          {
            "data_component": "3700",
            "values": {
              "name": "ev_battery_cell_max_volt_warning",
              "state": "off"
            },
            "description": "EV battery cell max voltage warning is off"
          },
          {
            "data_component": "3800",
            "values": {
              "name": "ev_battery_cell_min_volt_warning",
              "state": "off"
            },
            "description": "EV battery cell min voltage warning is off"
          },
          {
            "data_component": "3900",
            "values": {
              "name": "ev_battery_charge_energy_storage_warning",
              "state": "off"
            },
            "description": "EV battery charge energy storage warning is off"
          },
          {
            "data_component": "3a00",
            "values": {
              "name": "ev_battery_high_level_warning",
              "state": "off"
            },
            "description": "EV battery high level warning is off"
          },
          {
            "data_component": "3b00",
            "values": {
              "name": "ev_battery_high_temperature_warning",
              "state": "off"
            },
            "description": "EV battery high temperature warning is off"
          },
          {
            "data_component": "3c00",
            "values": {
              "name": "ev_battery_insulation_resist_warning",
              "state": "off"
            },
            "description": "EV battery insulation resist warning is off"
          },
          {
            "data_component": "3d00",
            "values": {
              "name": "ev_battery_jump_level_warning",
              "state": "off"
            },
            "description": "EV battery jump level warning is off"
          },
          {
            "data_component": "3e00",
            "values": {
              "name": "ev_battery_low_level_warning",
              "state": "off"
            },
            "description": "EV battery low level warning is off"
          },
          {
            "data_component": "3f00",
            "values": {
              "name": "ev_battery_max_volt_veh_energy_warning",
              "state": "off"
            },
            "description": "EV battery max volt veh energy warning is off"
          },
          {
            "data_component": "4000",
            "values": {
              "name": "ev_battery_min_volt_veh_energy_warning",
              "state": "off"
            },
            "description": "EV battery min volt veh energy warning is off"
          },
          {
            "data_component": "4100",
            "values": {
              "name": "ev_battery_over_charge_warning",
              "state": "off"
            },
            "description": "EV battery over charge warning is off"
          },
          {
            "data_component": "4200",
            "values": {
              "name": "ev_battery_poor_cell_warning",
              "state": "off"
            },
            "description": "EV battery poor cell warning is off"
          },
          {
            "data_component": "4300",
            "values": {
              "name": "ev_battery_temp_diff_warning",
              "state": "off"
            },
            "description": "EV battery temperature difference warning is off"
          },
          {
            "data_component": "4400",
            "values": {
              "name": "forward_collision_warning",
              "state": "off"
            },
            "description": "Forward collision warning is off"
          },
          {
            "data_component": "4500",
            "values": {
              "name": "fuel_door_open",
              "state": "off"
            },
            "description": "Fuel doof open is off"
          },
          {
            "data_component": "4600",
            "values": {
              "name": "hill_descent_control_fault",
              "state": "off"
            },
            "description": "Hill descent control fault is off"
          },
          {
            "data_component": "4700",
            "values": {
              "name": "hill_start_assist_warning",
              "state": "off"
            },
            "description": "Hill start assist warning is off"
          },
          {
            "data_component": "4800",
            "values": {
              "name": "hv_interlocking_status_warning",
              "state": "off"
            },
            "description": "HV interlocking status warning is off"
          },
          {
            "data_component": "4900",
            "values": {
              "name": "lighting_system_failure",
              "state": "off"
            },
            "description": "Lighting system failure is off"
          },
          {
            "data_component": "4a00",
            "values": {
              "name": "malfunction_indicator",
              "state": "off"
            },
            "description": "Malfunction indicator is off"
          },
          {
            "data_component": "4b00",
            "values": {
              "name": "motor_controller_temp_warning",
              "state": "off"
            },
            "description": "Motor controller temperature warning is off"
          },
          {
            "data_component": "4c00",
            "values": {
              "name": "park_aid_malfunction",
              "state": "off"
            },
            "description": "Park aid malfunction is off"
          },
          {
            "data_component": "4d00",
            "values": {
              "name": "passive_entry_passive_start",
              "state": "off"
            },
            "description": "Passive entry passive start is off"
          },
          {
            "data_component": "4e00",
            "values": {
              "name": "powertrain_malfunction",
              "state": "off"
            },
            "description": "Powertrain malfunction is off"
          },
          {
            "data_component": "4f00",
            "values": {
              "name": "restraints_indicator_warning",
              "state": "off"
            },
            "description": "Restraints indicator warning is off"
          },
          {
            "data_component": "5000",
            "values": {
              "name": "start_stop_engine_warning",
              "state": "off"
            },
            "description": "Start stop engine warning is off"
          },
          {
            "data_component": "5100",
            "values": {
              "name": "traction_control_disabled",
              "state": "off"
            },
            "description": "Traction control disabled is off"
          },
          {
            "data_component": "5200",
            "values": {
              "name": "traction_control_active",
              "state": "off"
            },
            "description": "Traction control active is off"
          },
          {
            "data_component": "5300",
            "values": {
              "name": "traction_motor_temp_warning",
              "state": "off"
            },
            "description": "Traction motor temperature warning is off"
          },
          {
            "data_component": "5400",
            "values": {
              "name": "tire_pressure_monitor_system_warning",
              "state": "off"
            },
            "description": "Tire pressure monitor system warning is off"
          },
          {
            "data_component": "5500",
            "values": {
              "name": "water_in_fuel",
              "state": "off"
            },
            "description": "Water in fuel is off"
          },
          {
            "data_component": "5600",
            "values": {
              "name": "tire_warning_front_right",
              "state": "off"
            },
            "description": "Tire warning front right is off"
          },
          {
            "data_component": "5700",
            "values": {
              "name": "tire_warning_front_left",
              "state": "off"
            },
            "description": "Tire warning front left is off"
          },
          {
            "data_component": "5800",
            "values": {
              "name": "tire_warning_rear_right",
              "state": "off"
            },
            "description": "Tire warning rear right is off"
          },
          {
            "data_component": "5900",
            "values": {
              "name": "tire_warning_rear_left",
              "state": "off"
            },
            "description": "Tire warning rear left is off"
          },
          {
            "data_component": "5a00",
            "values": {
              "name": "tire_warning_system_error",
              "state": "off"
            },
            "description": "Tire warning system error is off"
          },
          {
            "data_component": "5b00",
            "values": {
              "name": "battery_low_warning",
              "state": "off"
            },
            "description": "Battery low warning is off"
          },
          {
            "data_component": "5c00",
            "values": {
              "name": "brake_fluid_warning",
              "state": "off"
            },
            "description": "Brake fluid warning is off"
          },
          {
            "data_component": "5d00",
            "values": {
              "name": "active_hood_fault",
              "state": "off"
            },
            "description": "Active hood fault is off"
          },
          {
            "data_component": "5e00",
            "values": {
              "name": "active_spoiler_fault",
              "state": "off"
            },
            "description": "Active spoiler fault is off"
          },
          {
            "data_component": "5f00",
            "values": {
              "name": "adjust_tire_pressure",
              "state": "off"
            },
            "description": "Adjust tire pressure is off"
          },
          {
            "data_component": "6000",
            "values": {
              "name": "steering_lock_alert",
              "state": "off"
            },
            "description": "Steering lock alert is off"
          },
          {
            "data_component": "6100",
            "values": {
              "name": "anti_pollution_failure_engine_start_impossible",
              "state": "off"
            },
            "description": "Anti pollution failure engine start impossible is off"
          },
          {
            "data_component": "6200",
            "values": {
              "name": "anti_pollution_system_failure",
              "state": "off"
            },
            "description": "Anti pollution system failure is off"
          },
          {
            "data_component": "6300",
            "values": {
              "name": "anti_reverse_system_failing",
              "state": "off"
            },
            "description": "Anti reverse system failing is off"
          },
          {
            "data_component": "6400",
            "values": {
              "name": "auto_parking_brake",
              "state": "off"
            },
            "description": "Auto parking brake is off"
          },
          {
            "data_component": "6500",
            "values": {
              "name": "automatic_braking_deactive",
              "state": "off"
            },
            "description": "Automatic braking deactive is off"
          },
          {
            "data_component": "6600",
            "values": {
              "name": "automatic_braking_system_fault",
              "state": "off"
            },
            "description": "Automatic braking system fault is off"
          },
          {
            "data_component": "6700",
            "values": {
              "name": "automatic_lights_settings_failure",
              "state": "off"
            },
            "description": "Automatic lights settings failure is off"
          },
          {
            "data_component": "6800",
            "values": {
              "name": "keyfob_battery_alarm",
              "state": "off"
            },
            "description": "Keyfob battery alarm is off"
          },
          {
            "data_component": "6900",
            "values": {
              "name": "trunk_open",
              "state": "off"
            },
            "description": "Trunk open is off"
          },
          {
            "data_component": "6a00",
            "values": {
              "name": "check_reversing_lamp",
              "state": "off"
            },
            "description": "Check reversing lamp is off"
          },
          {
            "data_component": "6b00",
            "values": {
              "name": "crossing_line_system_alert_failure",
              "state": "off"
            },
            "description": "Crossing line system alert failure is off"
          },
          {
            "data_component": "6c00",
            "values": {
              "name": "dipped_beam_headlamps_front_left_failure",
              "state": "off"
            },
            "description": "Dipped beam headlamps front left failure is off"
          },
          {
            "data_component": "6d00",
            "values": {
              "name": "dipped_beam_headlamps_front_right_failure",
              "state": "off"
            },
            "description": "Dipped beam headlamps front right failure is off"
          },
          {
            "data_component": "6e00",
            "values": {
              "name": "directional_headlamps_failure",
              "state": "off"
            },
            "description": "Directional headlamps failure is off"
          },
          {
            "data_component": "6f00",
            "values": {
              "name": "directional_light_failure",
              "state": "off"
            },
            "description": "Directional light failure is off"
          },
          {
            "data_component": "7000",
            "values": {
              "name": "dsg_failing",
              "state": "off"
            },
            "description": "Dsg failing is off"
          },
          {
            "data_component": "7100",
            "values": {
              "name": "electric_mode_not_available",
              "state": "off"
            },
            "description": "Electric mode not available is off"
          },
          {
            "data_component": "7200",
            "values": {
              "name": "electronic_lock_failure",
              "state": "off"
            },
            "description": "Electronic lock failure is off"
          },
          {
            "data_component": "7300",
            "values": {
              "name": "engine_control_system_failure",
              "state": "off"
            },
            "description": "Engine control system failure is off"
          },
          {
            "data_component": "7400",
            "values": {
              "name": "engine_oil_pressure_alert",
              "state": "off"
            },
            "description": "Engine oil pressure alert is off"
          },
          {
            "data_component": "7500",
            "values": {
              "name": "esp_failure",
              "state": "off"
            },
            "description": "Esp failure is off"
          },
          {
            "data_component": "7600",
            "values": {
              "name": "excessive_oil_temperature",
              "state": "off"
            },
            "description": "Excessive oil temperature is off"
          },
          {
            "data_component": "7700",
            "values": {
              "name": "tire_front_left_flat",
              "state": "off"
            },
            "description": "Tire front left flat is off"
          },
          {
            "data_component": "7800",
            "values": {
              "name": "tire_front_right_flat",
              "state": "off"
            },
            "description": "Tire front right flat is off"
          },
          {
            "data_component": "7900",
            "values": {
              "name": "tire_rear_left_flat",
              "state": "off"
            },
            "description": "Tire rear left flat is off"
          },
          {
            "data_component": "7a00",
            "values": {
              "name": "tire_rear_right_flat",
              "state": "off"
            },
            "description": "Tire rear right flat is off"
          },
          {
            "data_component": "7b00",
            "values": {
              "name": "fog_light_front_left_failure",
              "state": "off"
            },
            "description": "Fog light front left failure is off"
          },
          {
            "data_component": "7c00",
            "values": {
              "name": "fog_light_front_right_failure",
              "state": "off"
            },
            "description": "Fog light front right failure is off"
          },
          {
            "data_component": "7d00",
            "values": {
              "name": "fog_light_rear_left_failure",
              "state": "off"
            },
            "description": "Fog light rear left failure is off"
          },
          {
            "data_component": "7e00",
            "values": {
              "name": "fog_light_rear_right_failure",
              "state": "off"
            },
            "description": "Fog light rear right failure is off"
          },
          {
            "data_component": "7f00",
            "values": {
              "name": "fog_light_front_fault",
              "state": "off"
            },
            "description": "Fog light front fault is off"
          },
          {
            "data_component": "8000",
            "values": {
              "name": "door_front_left_open",
              "state": "off"
            },
            "description": "Door front left open is off"
          },
          {
            "data_component": "8100",
            "values": {
              "name": "door_front_left_open_high_speed",
              "state": "off"
            },
            "description": "Door front left open high speed is off"
          },
          {
            "data_component": "8200",
            "values": {
              "name": "tire_front_left_not_monitored",
              "state": "off"
            },
            "description": "Tire front left not monitored is off"
          },
          {
            "data_component": "8300",
            "values": {
              "name": "door_front_right_open",
              "state": "off"
            },
            "description": "Door front right open is off"
          },
          {
            "data_component": "8400",
            "values": {
              "name": "door_front_right_open_high_speed",
              "state": "off"
            },
            "description": "Door front right open high speed is off"
          },
          {
            "data_component": "8500",
            "values": {
              "name": "tire_front_right_not_monitored",
              "state": "off"
            },
            "description": "Tire front right not monitored is off"
          },
          {
            "data_component": "8600",
            "values": {
              "name": "headlights_left_failure",
              "state": "off"
            },
            "description": "Headlights left failure is off"
          },
          {
            "data_component": "8700",
            "values": {
              "name": "headlights_right_failure",
              "state": "off"
            },
            "description": "Headlights right failure is off"
          },
          {
            "data_component": "8800",
            "values": {
              "name": "hybrid_system_fault",
              "state": "off"
            },
            "description": "Hybrid system fault is off"
          },
          {
            "data_component": "8900",
            "values": {
              "name": "hybrid_system_fault_repaired_vehicle",
              "state": "off"
            },
            "description": "Hybrid system fault repaired vehicle is off"
          },
          {
            "data_component": "8a00",
            "values": {
              "name": "hydraulic_pressure_or_brake_fuild_insufficient",
              "state": "off"
            },
            "description": "Hydraulic pressure or brake fuild insufficient is off"
          },
          {
            "data_component": "8b00",
            "values": {
              "name": "lane_departure_fault",
              "state": "off"
            },
            "description": "Lane departure fault is off"
          },
          {
            "data_component": "8c00",
            "values": {
              "name": "limited_visibility_aids_camera",
              "state": "off"
            },
            "description": "Limited visibility aids camera is off"
          },
          {
            "data_component": "8d00",
            "values": {
              "name": "tire_pressure_low",
              "state": "off"
            },
            "description": "Tire pressure low is off"
          },
          {
            "data_component": "8e00",
            "values": {
              "name": "maintenance_date_exceeded",
              "state": "off"
            },
            "description": "Maintenance date exceeded is off"
          },
          {
            "data_component": "8f00",
            "values": {
              "name": "maintenance_odometer_exceeded",
              "state": "off"
            },
            "description": "Maintenance odometer exceeded is off"
          },
          {
            "data_component": "9000",
            "values": {
              "name": "other_failing_system",
              "state": "off"
            },
            "description": "Other failing system is off"
          },
          {
            "data_component": "9100",
            "values": {
              "name": "parking_brake_control_failing",
              "state": "off"
            },
            "description": "Parking brake control failing is off"
          },
          {
            "data_component": "9200",
            "values": {
              "name": "parking_space_measuring_system_failure",
              "state": "off"
            },
            "description": "Parking space measuring system failure is off"
          },
          {
            "data_component": "9300",
            "values": {
              "name": "place_gear_to_parking",
              "state": "off"
            },
            "description": "Place gear to parking is off"
          },
          {
            "data_component": "9400",
            "values": {
              "name": "power_steering_assitance_failure",
              "state": "off"
            },
            "description": "Power steering assitance failure is off"
          },
          {
            "data_component": "9500",
            "values": {
              "name": "power_steering_failure",
              "state": "off"
            },
            "description": "Power steering failure is off"
          },
          {
            "data_component": "9600",
            "values": {
              "name": "preheating_deactivated_battery_too_low",
              "state": "off"
            },
            "description": "Preheating deactivated battery too low is off"
          },
          {
            "data_component": "9700",
            "values": {
              "name": "preheating_deactivated_fuel_level_too_low",
              "state": "off"
            },
            "description": "Preheating deactivated fuel level too low is off"
          },
          {
            "data_component": "9800",
            "values": {
              "name": "preheating_deactivated_battery_set_the_clock",
              "state": "off"
            },
            "description": "Preheating deactivated battery set the clock is off"
          },
          {
            "data_component": "9900",
            "values": {
              "name": "fog_light_rear_fault",
              "state": "off"
            },
            "description": "Fog light rear fault is off"
          },
          {
            "data_component": "9a00",
            "values": {
              "name": "door_rear_left_open",
              "state": "off"
            },
            "description": "Door rear left open is off"
          },
          {
            "data_component": "9b00",
            "values": {
              "name": "door_rear_left_open_high_speed",
              "state": "off"
            },
            "description": "Door rear left open high speed is off"
          },
          {
            "data_component": "9c00",
            "values": {
              "name": "tire_rear_left_not_monitored",
              "state": "off"
            },
            "description": "Tire rear left not monitored is off"
          },
          {
            "data_component": "9d00",
            "values": {
              "name": "door_rear_right_open",
              "state": "off"
            },
            "description": "Door rear right open is off"
          },
          {
            "data_component": "9e00",
            "values": {
              "name": "door_rear_right_open_high_speed",
              "state": "off"
            },
            "description": "Door rear right open high speed is off"
          },
          {
            "data_component": "9f00",
            "values": {
              "name": "tire_rear_right_not_monitored",
              "state": "off"
            },
            "description": "Tire rear right not monitored is off"
          },
          {
            "data_component": "a000",
            "values": {
              "name": "screen_rear_open",
              "state": "off"
            },
            "description": "Screen rear open is off"
          },
          {
            "data_component": "a100",
            "values": {
              "name": "retractable_roof_mechanism_fault",
              "state": "off"
            },
            "description": "Retractable roof mechanism fault is off"
          },
          {
            "data_component": "a200",
            "values": {
              "name": "reverse_light_left_failure",
              "state": "off"
            },
            "description": "Reverse light left failure is off"
          },
          {
            "data_component": "a300",
            "values": {
              "name": "reverse_light_right_failure",
              "state": "off"
            },
            "description": "Reverse light right failure is off"
          },
          {
            "data_component": "a400",
            "values": {
              "name": "risk_of_ice",
              "state": "off"
            },
            "description": "Risk of ice is off"
          },
          {
            "data_component": "a500",
            "values": {
              "name": "roof_operation_impossible_apply_parking_break",
              "state": "off"
            },
            "description": "Roof operation impossible apply parking break is off"
          },
          {
            "data_component": "a600",
            "values": {
              "name": "roof_operation_impossible_apply_start_engine",
              "state": "off"
            },
            "description": "Roof operation impossible apply start engine is off"
          },
          {
            "data_component": "a700",
            "values": {
              "name": "roof_operation_impossible_temperature_too_high",
              "state": "off"
            },
            "description": "Roof operation impossible temperature too high is off"
          },
          {
            "data_component": "a800",
            "values": {
              "name": "seatbelt_passenger_front_right_unbuckled",
              "state": "off"
            },
            "description": "Seatbelt passenger front right unbuckled is off"
          },
          {
            "data_component": "a900",
            "values": {
              "name": "seatbelt_passenger_rear_left_unbuckled",
              "state": "off"
            },
            "description": "Seatbelt passenger rear left unbuckled is off"
          },
          {
            "data_component": "aa00",
            "values": {
              "name": "seatbelt_passenger_rear_center_unbuckled",
              "state": "off"
            },
            "description": "Seatbelt passenger rear center unbuckled is off"
          },
          {
            "data_component": "ab00",
            "values": {
              "name": "seatbelt_passenger_rear_right_unbuckled",
              "state": "off"
            },
            "description": "Seatbelt passenger rear right unbuckled is off"
          },
          {
            "data_component": "ac00",
            "values": {
              "name": "battery_secondary_low",
              "state": "off"
            },
            "description": "Battery secondary low is off"
          },
          {
            "data_component": "ad00",
            "values": {
              "name": "shock_sensor_failing",
              "state": "off"
            },
            "description": "Shock sensor failing is off"
          },
          {
            "data_component": "ae00",
            "values": {
              "name": "side_lights_front_left_failure",
              "state": "off"
            },
            "description": "Side lights front left failure is off"
          },
          {
            "data_component": "af00",
            "values": {
              "name": "side_lights_front_right_failure",
              "state": "off"
            },
            "description": "Side lights front right failure is off"
          },
          {
            "data_component": "b000",
            "values": {
              "name": "side_lights_rear_left_failure",
              "state": "off"
            },
            "description": "Side lights rear left failure is off"
          },
          {
            "data_component": "b100",
            "values": {
              "name": "side_lights_rear_right_failure",
              "state": "off"
            },
            "description": "Side lights rear right failure is off"
          },
          {
            "data_component": "b200",
            "values": {
              "name": "spare_wheel_fitter_driving_aids_deactivated",
              "state": "off"
            },
            "description": "Spare wheel fitter driving aids deactivated is off"
          },
          {
            "data_component": "b300",
            "values": {
              "name": "speed_control_failure",
              "state": "off"
            },
            "description": "Speed control failure is off"
          },
          {
            "data_component": "b400",
            "values": {
              "name": "stop_light_left_failure",
              "state": "off"
            },
            "description": "Stop light left failure is off"
          },
          {
            "data_component": "b500",
            "values": {
              "name": "stop_light_right_failure",
              "state": "off"
            },
            "description": "Stop light right failure is off"
          },
          {
            "data_component": "b600",
            "values": {
              "name": "suspension_failure",
              "state": "off"
            },
            "description": "Suspension failure is off"
          },
          {
            "data_component": "b700",
            "values": {
              "name": "suspension_failure_reduce_speed",
              "state": "off"
            },
            "description": "Suspension failure reduce speed is off"
          },
          {
            "data_component": "b800",
            "values": {
              "name": "suspension_fault_limited_to_90kmh",
              "state": "off"
            },
            "description": "Suspension fault limited to 90kmh is off"
          },
          {
            "data_component": "b900",
            "values": {
              "name": "tire_pressure_sensor_failure",
              "state": "off"
            },
            "description": "Tire pressure sensor failure is off"
          },
          {
            "data_component": "ba00",
            "values": {
              "name": "trunk_open_high_speed",
              "state": "off"
            },
            "description": "Trunk open high speed is off"
          },
          {
            "data_component": "bb00",
            "values": {
              "name": "trunk_window_open",
              "state": "off"
            },
            "description": "Trunk window open is off"
          },
          {
            "data_component": "bc00",
            "values": {
              "name": "turn_signal_front_left_failure",
              "state": "off"
            },
            "description": "Turn signal front left failure is off"
          },
          {
            "data_component": "bd00",
            "values": {
              "name": "turn_signal_front_right_failure",
              "state": "off"
            },
            "description": "Turn signal front right failure is off"
          },
          {
            "data_component": "be00",
            "values": {
              "name": "turn_signal_rear_left_failure",
              "state": "off"
            },
            "description": "Turn signal rear left failure is off"
          },
          {
            "data_component": "bf00",
            "values": {
              "name": "turn_signal_rear_right_failure",
              "state": "off"
            },
            "description": "Turn signal rear right failure is off"
          },
          {
            "data_component": "c000",
            "values": {
              "name": "tire_under_inflation",
              "state": "off"
            },
            "description": "Tire under inflation is off"
          },
          {
            "data_component": "c100",
            "values": {
              "name": "wheel_pressure_fault",
              "state": "off"
            },
            "description": "Wheel pressure fault is off"
          },
          {
            "data_component": "c200",
            "values": {
              "name": "oil_change_warning",
              "state": "off"
            },
            "description": "Oil change warning is off"
          },
          {
            "data_component": "c300",
            "values": {
              "name": "inspection_warning",
              "state": "off"
            },
            "description": "Inspection warning is off"
          }
        ],
        "customType": "dashboard_light",
        "capabilityName": "dashboardLights"
      },
      {
        "id": 2,
        "name": "bulb_failures",
        "name_cased": "bulbFailures",
        "name_pretty": "Bulb failures",
        "name_singular": "bulb_failure",
        "added": 13,
        "type": "enum",
        "size": 1,
        "multiple": true,
        "description": "Vehicle light bulb failure",
        "enum_values": [
          {
            "id": 0,
            "name": "turn_signal_left",
            "description": "Any left turn signal"
          },
          {
            "id": 1,
            "name": "turn_signal_right",
            "description": "Any right turn signal"
          },
          {
            "id": 2,
            "name": "low_beam",
            "description": "Any low beam"
          },
          {
            "id": 3,
            "name": "low_beam_left"
          },
          {
            "id": 4,
            "name": "low_beam_right"
          },
          {
            "id": 5,
            "name": "high_beam",
            "description": "Any high beam"
          },
          {
            "id": 6,
            "name": "high_beam_left"
          },
          {
            "id": 7,
            "name": "high_beam_right"
          },
          {
            "id": 8,
            "name": "fog_light_front",
            "description": "Any front fog light"
          },
          {
            "id": 9,
            "name": "fog_light_rear",
            "description": "Any rear fog light"
          },
          {
            "id": 10,
            "name": "stop",
            "description": "Any stop light"
          },
          {
            "id": 11,
            "name": "position",
            "description": "Any position light"
          },
          {
            "id": 12,
            "name": "day_running",
            "description": "Any day light running light"
          },
          {
            "id": 13,
            "name": "trailer_turn",
            "description": "Any trailer turn light"
          },
          {
            "id": 14,
            "name": "trailer_turn_left",
            "description": "Any left trailer turn signal"
          },
          {
            "id": 15,
            "name": "trailer_turn_right",
            "description": "Any right trailer turn signal"
          },
          {
            "id": 16,
            "name": "trailer_stop",
            "description": "Any trailer stop light"
          },
          {
            "id": 17,
            "name": "trailer_electrical_failure"
          },
          {
            "id": 18,
            "name": "multiple"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "turn_signal_right",
            "description": "Right turn signal`s bulb has failed."
          },
          {
            "data_component": "05",
            "value": "high_beam",
            "description": "A high beam has failed."
          }
        ],
        "capabilityName": "dashboardLights"
      }
    ]
  },
  "diagnostics": {
    "name": "diagnostics",
    "name_cased": "diagnostics",
    "name_pretty": "Diagnostics",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 51
    },
    "api": {
      "intro": 3,
      "update": 13
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      9,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54
    ],
    "properties": [
      {
        "id": 1,
        "name": "mileage",
        "name_cased": "mileage",
        "name_pretty": "Mileage",
        "deprecated": {
          "new_name": "odometer",
          "reason": "'mileage' is an incorrect term for this"
        },
        "type": "unit.length",
        "size": 10,
        "description": "The vehicle mileage (odometer)",
        "examples": [
          {
            "data_component": "120441024f8000000000",
            "value": {
              "kilometers": 150000
            },
            "description": "Odometer is showing 150'000.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 2,
        "name": "engine_oil_temperature",
        "name_cased": "engineOilTemperature",
        "name_pretty": "Engine oil temperature",
        "type": "unit.temperature",
        "size": 10,
        "description": "Engine oil temperature",
        "examples": [
          {
            "data_component": "17014058e00000000000",
            "value": {
              "celsius": 99.5
            },
            "description": "Engine oil temperature is 99.5°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 3,
        "name": "speed",
        "name_cased": "speed",
        "name_pretty": "Speed",
        "type": "unit.speed",
        "size": 10,
        "description": "The vehicle speed",
        "examples": [
          {
            "data_component": "1601404e000000000000",
            "value": {
              "kilometers_per_hour": 60
            },
            "description": "Vehicle speed is 60.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 4,
        "name": "engine_rpm",
        "name_cased": "engineRPM",
        "name_pretty": "Engine RPM",
        "type": "unit.angular_velocity",
        "size": 10,
        "description": "Engine RPM (revolutions per minute)",
        "examples": [
          {
            "data_component": "030040a3880000000000",
            "value": {
              "revolutions_per_minute": 2500
            },
            "description": "Engine RPM is 2500.0"
          }
        ],
        "unit": {
          "name": "angular_velocity",
          "id": 3,
          "unit_types": [
            {
              "name": "revolutions_per_minute",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "degrees_per_second",
              "id": 1,
              "conversion_linear": 6
            },
            {
              "name": "radians_per_second",
              "id": 2,
              "conversion_linear": 9.549296585514
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "fuel_level",
        "name_cased": "fuelLevel",
        "name_pretty": "Fuel level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Fuel level percentage between 0.0-1.0",
        "id": 5,
        "examples": [
          {
            "data_component": "3feccccccccccccd",
            "value": 0.9,
            "description": "Fuel level is at 90%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "id": 6,
        "name": "estimated_range",
        "name_cased": "estimatedRange",
        "name_pretty": "Estimated range",
        "type": "unit.length",
        "size": 10,
        "description": "Estimated range (with combustion engine)",
        "examples": [
          {
            "data_component": "12044070900000000000",
            "value": {
              "kilometers": 265
            },
            "description": "Estimated range is 256.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "washer_fluid_level",
        "name_cased": "washerFluidLevel",
        "name_pretty": "Washer fluid level",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "filled"
          },
          {
            "id": 2,
            "name": "very_low"
          },
          {
            "id": 3,
            "name": "normal"
          },
          {
            "id": 4,
            "name": "high"
          },
          {
            "id": 5,
            "name": "very_high"
          }
        ],
        "id": 9,
        "examples": [
          {
            "data_component": "01",
            "value": "filled",
            "description": "Washer fluid is filled"
          }
        ],
        "customType": "fluid_level",
        "capabilityName": "diagnostics"
      },
      {
        "id": 11,
        "name": "battery_voltage",
        "name_cased": "batteryVoltage",
        "name_pretty": "Battery voltage",
        "type": "unit.electric_potential_difference",
        "size": 10,
        "description": "Battery voltage",
        "examples": [
          {
            "data_component": "0a004028333333333333",
            "value": {
              "volts": 12.1
            },
            "description": "Battery voltage is 12.1V"
          }
        ],
        "unit": {
          "name": "electric_potential_difference",
          "id": 10,
          "unit_types": [
            {
              "name": "volts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millivolts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilovolts",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "adblue_level",
        "name_cased": "adBlueLevel",
        "name_pretty": "AdBlue level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "AdBlue level percentage between 0.0-1.0",
        "id": 12,
        "examples": [
          {
            "data_component": "3feccccccccccccd",
            "value": 0.9,
            "description": "AdBlue level is at 90%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "id": 13,
        "name": "distance_since_reset",
        "name_cased": "distanceSinceReset",
        "name_pretty": "Distance since reset",
        "type": "unit.length",
        "size": 10,
        "description": "The distance driven since reset",
        "examples": [
          {
            "data_component": "12044097706666666666",
            "value": {
              "kilometers": 1500.1
            },
            "description": "1'500.1km driven since reset"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 14,
        "name": "distance_since_start",
        "name_cased": "distanceSinceStart",
        "name_pretty": "Distance since start",
        "type": "unit.length",
        "size": 10,
        "description": "The distance driven since trip start",
        "examples": [
          {
            "data_component": "12044028cccccccccccd",
            "value": {
              "kilometers": 12.4
            },
            "description": "12.4km driven since the engine start"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 15,
        "name": "fuel_volume",
        "name_cased": "fuelVolume",
        "name_pretty": "Fuel volume",
        "type": "unit.volume",
        "size": 10,
        "description": "The fuel volume measured in liters",
        "examples": [
          {
            "data_component": "19024041c00000000000",
            "value": {
              "liters": 35.5
            },
            "description": "35.5 L of fuel remaining"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "anti_lock_braking",
        "name_cased": "antiLockBraking",
        "name_pretty": "Anti-lock braking system (ABS)",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 16,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "ABS is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "diagnostics"
      },
      {
        "id": 17,
        "name": "engine_coolant_temperature",
        "name_cased": "engineCoolantTemperature",
        "name_pretty": "Engine coolant temperature",
        "type": "unit.temperature",
        "size": 10,
        "description": "Engine coolant temperature",
        "examples": [
          {
            "data_component": "17014034000000000000",
            "value": {
              "celsius": 20
            },
            "description": "Engine coolant temperature is 20°C"
          }
        ],
        "unit": {
          "name": "temperature",
          "id": 23,
          "unit_types": [
            {
              "name": "kelvin",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "celsius",
              "id": 1,
              "conversion_linear": 1,
              "conversion_constant": 273.15
            },
            {
              "name": "fahrenheit",
              "id": 2,
              "conversion_linear": 0.555556,
              "conversion_constant": 255.372222
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 18,
        "name": "engine_total_operating_hours",
        "name_cased": "engineTotalOperatingHours",
        "name_pretty": "Engine total operation hours",
        "deprecated": {
          "new_name": "engine_total_operating_time",
          "reason": "removed the unit from the name"
        },
        "type": "unit.duration",
        "size": 10,
        "description": "The accumulated time of engine operation",
        "examples": [
          {
            "data_component": "0702409772999999999a",
            "value": {
              "hours": 1500.65
            },
            "description": "The engine has operated 1'500.65h in total"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 19,
        "name": "engine_total_fuel_consumption",
        "name_cased": "engineTotalFuelConsumption",
        "name_pretty": "Engine total fuel consumption",
        "type": "unit.volume",
        "size": 10,
        "description": "The accumulated lifespan fuel consumption",
        "examples": [
          {
            "data_component": "190240daf0c000000000",
            "value": {
              "liters": 27587
            },
            "description": "The engine has consumend 27'587.0 L of fuel over it's lifespan"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "brake_fluid_level",
        "name_cased": "brakeFluidLevel",
        "name_pretty": "Brake fluid level",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "filled"
          },
          {
            "id": 2,
            "name": "very_low"
          },
          {
            "id": 3,
            "name": "normal"
          },
          {
            "id": 4,
            "name": "high"
          },
          {
            "id": 5,
            "name": "very_high"
          }
        ],
        "id": 20,
        "examples": [
          {
            "data_component": "00",
            "value": "low",
            "description": "Brake fluid is low"
          }
        ],
        "customType": "fluid_level",
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_torque",
        "name_cased": "engineTorque",
        "name_pretty": "Engine torque",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Current engine torque percentage between 0.0-1.0",
        "id": 21,
        "examples": [
          {
            "data_component": "3fc999999999999a",
            "value": 0.2,
            "description": "Engine torque is currently at 20%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_load",
        "name_cased": "engineLoad",
        "name_pretty": "Engine load",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Current engine load percentage between 0.0-1.0",
        "id": 22,
        "examples": [
          {
            "data_component": "3fb999999999999a",
            "value": 0.1,
            "description": "Engine load is currently at 10%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "id": 23,
        "name": "wheel_based_speed",
        "name_cased": "wheelBasedSpeed",
        "name_pretty": "Wheel based speed",
        "type": "unit.speed",
        "size": 10,
        "description": "The vehicle speed measured at the wheel base",
        "examples": [
          {
            "data_component": "16014050400000000000",
            "value": {
              "kilometers_per_hour": 65
            },
            "description": "Wheel based speed is 65.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "battery_level",
        "name_cased": "batteryLevel",
        "name_pretty": "Battery level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Battery level in %, value between 0.0 and 1.0",
        "id": 24,
        "examples": [
          {
            "data_component": "3fe1eb851eb851ec",
            "value": 0.56,
            "description": "Battery level is at 56%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "name": "check_control_messages",
        "name_cased": "checkControlMessages",
        "name_pretty": "Check control messages",
        "type": "custom",
        "items": [
          {
            "name": "id",
            "name_cased": "ID",
            "name_pretty": "ID",
            "type": "uinteger",
            "size": 2,
            "description": "Check Control Message identifier",
            "capabilityName": "diagnostics"
          },
          {
            "name": "remaining_time",
            "name_cased": "remainingTime",
            "type": "unit.duration",
            "size": 10,
            "description": "Remaining time of the message",
            "unit": {
              "name": "duration",
              "id": 7,
              "unit_types": [
                {
                  "name": "seconds",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "minutes",
                  "id": 1,
                  "conversion_linear": 60
                },
                {
                  "name": "hours",
                  "id": 2,
                  "conversion_linear": 3600
                },
                {
                  "name": "days",
                  "id": 3,
                  "conversion_linear": 86400
                },
                {
                  "name": "weeks",
                  "id": 4,
                  "conversion_linear": 604800
                },
                {
                  "name": "months",
                  "id": 5,
                  "conversion_linear": 2629800
                }
              ]
            },
            "capabilityName": "diagnostics"
          },
          {
            "name": "text",
            "name_cased": "text",
            "type": "string",
            "description": "CCM text",
            "capabilityName": "diagnostics"
          },
          {
            "name": "status",
            "name_cased": "status",
            "type": "string",
            "description": "CCM status",
            "capabilityName": "diagnostics"
          }
        ],
        "id": 25,
        "multiple": true,
        "name_singular": "check_control_message",
        "examples": [
          {
            "data_component": "0001070140f9c78000000000000c436865636b20656e67696e650005416c657274",
            "values": {
              "id": 1,
              "remaining_time": {
                "minutes": 105592
              },
              "text": "Check engine",
              "status": "Alert"
            },
            "description": "105'592 minutes remaining for Check Engine Alert control message with ID 1"
          }
        ],
        "customType": "check_control_message",
        "capabilityName": "diagnostics"
      },
      {
        "name": "tire_pressures",
        "name_cased": "tirePressures",
        "name_pretty": "Tire pressures",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "pressure",
            "name_cased": "pressure",
            "type": "unit.pressure",
            "size": 10,
            "description": "Tire pressure",
            "unit": {
              "name": "pressure",
              "id": 21,
              "unit_types": [
                {
                  "name": "pascals",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "kilopascals",
                  "id": 3,
                  "conversion_linear": 1000
                },
                {
                  "name": "inches_of_mercury",
                  "id": 5,
                  "conversion_linear": 3386.39
                },
                {
                  "name": "bars",
                  "id": 6,
                  "conversion_linear": 100000
                },
                {
                  "name": "millibars",
                  "id": 7,
                  "conversion_linear": 100
                },
                {
                  "name": "millimeters_of_mercury",
                  "id": 8,
                  "conversion_linear": 133.322
                },
                {
                  "name": "pounds_force_per_square_inch",
                  "id": 9,
                  "conversion_linear": 6894.76
                }
              ]
            },
            "capabilityName": "diagnostics"
          }
        ],
        "id": 26,
        "multiple": true,
        "name_singular": "tire_pressure",
        "examples": [
          {
            "data_component": "00150640027ae147ae147b",
            "values": {
              "location": "front_left",
              "pressure": {
                "bars": 2.31
              }
            },
            "description": "Front left tire pressure is 2.31BAR"
          },
          {
            "data_component": "01150640027ae147ae147b",
            "values": {
              "location": "front_right",
              "pressure": {
                "bars": 2.31
              }
            },
            "description": "Front right tire pressure is 2.31BAR"
          },
          {
            "data_component": "0215064001eb851eb851ec",
            "values": {
              "location": "rear_right",
              "pressure": {
                "bars": 2.24
              }
            },
            "description": "Rear right tire pressure is 2.24BAR"
          },
          {
            "data_component": "0315064001eb851eb851ec",
            "values": {
              "location": "rear_left",
              "pressure": {
                "bars": 2.24
              }
            },
            "description": "Rear left tire pressure is 2.24BAR"
          },
          {
            "data_component": "0415064002000000000000",
            "values": {
              "location": "rear_right_outer",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Rear right outer tire pressure is 2.25BAR"
          },
          {
            "data_component": "0515064002000000000000",
            "values": {
              "location": "rear_left_outer",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Rear left outer tire pressure is 2.25BAR"
          },
          {
            "data_component": "0615064002000000000000",
            "values": {
              "location": "spare",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Spare tire pressure is 2.25BAR"
          }
        ],
        "customType": "tire_pressure",
        "capabilityName": "diagnostics"
      },
      {
        "name": "tire_temperatures",
        "name_cased": "tireTemperatures",
        "name_pretty": "Tire temperatures",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "temperature",
            "name_cased": "temperature",
            "type": "unit.temperature",
            "size": 10,
            "description": "Tire temperature",
            "unit": {
              "name": "temperature",
              "id": 23,
              "unit_types": [
                {
                  "name": "kelvin",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "celsius",
                  "id": 1,
                  "conversion_linear": 1,
                  "conversion_constant": 273.15
                },
                {
                  "name": "fahrenheit",
                  "id": 2,
                  "conversion_linear": 0.555556,
                  "conversion_constant": 255.372222
                }
              ]
            },
            "capabilityName": "diagnostics"
          }
        ],
        "id": 27,
        "multiple": true,
        "name_singular": "tire_temperature",
        "examples": [
          {
            "data_component": "00170140440ccccccccccd",
            "values": {
              "location": "front_left",
              "temperature": {
                "celsius": 40.1
              }
            },
            "description": "Front left tire temperature is 40.1°C"
          },
          {
            "data_component": "011701404419999999999a",
            "values": {
              "location": "front_right",
              "temperature": {
                "celsius": 40.2
              }
            },
            "description": "Front right tire temperature is 40.2°C"
          },
          {
            "data_component": "0217014044266666666666",
            "values": {
              "location": "rear_right",
              "temperature": {
                "celsius": 40.3
              }
            },
            "description": "Rear right tire temperature is 40.3°C"
          },
          {
            "data_component": "0317014044333333333333",
            "values": {
              "location": "rear_left",
              "temperature": {
                "celsius": 40.4
              }
            },
            "description": "Rear left tire temperature is 40.4°C"
          },
          {
            "data_component": "0417014044400000000000",
            "values": {
              "location": "rear_right_outer",
              "temperature": {
                "celsius": 40.5
              }
            },
            "description": "Rear right outer tire temperature is 40.5°C"
          },
          {
            "data_component": "05170140444ccccccccccd",
            "values": {
              "location": "rear_left_outer",
              "temperature": {
                "celsius": 40.6
              }
            },
            "description": "Rear left outer tire temperature is 40.6°C"
          },
          {
            "data_component": "0617014024666666666666",
            "values": {
              "location": "spare",
              "temperature": {
                "celsius": 10.2
              }
            },
            "description": "Spare tire temperature is 10.2°C"
          }
        ],
        "customType": "tire_temperature",
        "capabilityName": "diagnostics"
      },
      {
        "name": "wheel_rpms",
        "name_cased": "wheelRPMs",
        "name_pretty": "Wheel RPMs",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "description": "Wheel location",
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "rpm",
            "name_cased": "RPM",
            "name_pretty": "RPM",
            "type": "unit.angular_velocity",
            "size": 10,
            "description": "The RPM measured at this wheel",
            "unit": {
              "name": "angular_velocity",
              "id": 3,
              "unit_types": [
                {
                  "name": "revolutions_per_minute",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "degrees_per_second",
                  "id": 1,
                  "conversion_linear": 6
                },
                {
                  "name": "radians_per_second",
                  "id": 2,
                  "conversion_linear": 9.549296585514
                }
              ]
            },
            "capabilityName": "diagnostics"
          }
        ],
        "id": 28,
        "multiple": true,
        "name_singular": "wheel_rpm",
        "examples": [
          {
            "data_component": "0003004087080000000000",
            "values": {
              "location": "front_left",
              "rpm": {
                "revolutions_per_minute": 737
              }
            },
            "description": "Front left wheel is doing 737.0RPM"
          },
          {
            "data_component": "0103004087580000000000",
            "values": {
              "location": "front_right",
              "rpm": {
                "revolutions_per_minute": 747
              }
            },
            "description": "Front right wheel is doing 747.0RPM"
          },
          {
            "data_component": "0203004088480000000000",
            "values": {
              "location": "rear_right",
              "rpm": {
                "revolutions_per_minute": 777
              }
            },
            "description": "Rear right wheel is doing 777.0RPM"
          },
          {
            "data_component": "0303004088980000000000",
            "values": {
              "location": "rear_left",
              "rpm": {
                "revolutions_per_minute": 787
              }
            },
            "description": "Rear left wheel is doing 787.0RPM"
          },
          {
            "data_component": "0403004088e80000000000",
            "values": {
              "location": "rear_right_outer",
              "rpm": {
                "revolutions_per_minute": 797
              }
            },
            "description": "Rear right outer wheel is doing 797.0RPM"
          },
          {
            "data_component": "0503004089380000000000",
            "values": {
              "location": "rear_left_outer",
              "rpm": {
                "revolutions_per_minute": 807
              }
            },
            "description": "Rear left outer wheel is doing 807.0RPM"
          },
          {
            "data_component": "0603000000000000000000",
            "values": {
              "location": "spare",
              "rpm": {
                "revolutions_per_minute": 0
              }
            },
            "description": "Spare wheel is doing 0.0RPM"
          }
        ],
        "customType": "wheel_rpm",
        "capabilityName": "diagnostics"
      },
      {
        "name": "trouble_codes",
        "name_cased": "troubleCodes",
        "name_pretty": "Trouble codes",
        "type": "custom",
        "items": [
          {
            "name": "occurrences",
            "name_cased": "occurrences",
            "type": "uinteger",
            "size": 1,
            "description": "Number of occurrences",
            "capabilityName": "diagnostics"
          },
          {
            "name": "id",
            "name_cased": "ID",
            "name_pretty": "ID",
            "type": "string",
            "description": "Identifier",
            "capabilityName": "diagnostics"
          },
          {
            "name": "ecu_id",
            "name_cased": "ecuID",
            "name_pretty": "ECU ID",
            "type": "string",
            "description": "Electronic Control Unit identifier",
            "capabilityName": "diagnostics"
          },
          {
            "name": "status",
            "name_cased": "status",
            "type": "string",
            "description": "Status",
            "capabilityName": "diagnostics"
          },
          {
            "name": "system",
            "name_cased": "system",
            "name_pretty": "System",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "unknown"
              },
              {
                "id": 1,
                "name": "body"
              },
              {
                "id": 2,
                "name": "chassis"
              },
              {
                "id": 3,
                "name": "powertrain"
              },
              {
                "id": 4,
                "name": "network"
              }
            ],
            "capabilityName": "diagnostics"
          }
        ],
        "id": 29,
        "multiple": true,
        "name_singular": "trouble_code",
        "examples": [
          {
            "data_component": "0200074331313136464100095244555f3231324652000750454e44494e4700",
            "values": {
              "occurrences": 2,
              "id": "C1116FA",
              "ecu_id": "RDU_212FR",
              "status": "PENDING",
              "system": "unknown"
            },
            "description": "Trouble code 'C1116FA' with ECU-ID 'RDU_212FR' occurred 2 times and is 'PENDING'"
          },
          {
            "data_component": "020007433136334146410006445452323132000750454e44494e4701",
            "values": {
              "occurrences": 2,
              "id": "C163AFA",
              "ecu_id": "DTR212",
              "status": "PENDING",
              "system": "body"
            },
            "description": "Trouble code 'C163AFA' with ECU-ID 'DTR212' occurred 2 times in body-system and is 'PENDING'"
          }
        ],
        "customType": "trouble_code",
        "capabilityName": "diagnostics"
      },
      {
        "id": 30,
        "name": "mileage_meters",
        "name_cased": "mileageMeters",
        "name_pretty": "Mileage meters",
        "deprecated": {
          "new_name": "odometer",
          "reason": "'mileage' is an incorrect term for this"
        },
        "type": "unit.length",
        "size": 10,
        "description": "The vehicle mileage (odometer) in meters",
        "examples": [
          {
            "data_component": "120441024f8800000000",
            "value": {
              "kilometers": 150001
            },
            "description": "Odometer is showing 150'001km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 31,
        "name": "odometer",
        "name_cased": "odometer",
        "name_pretty": "Odometer",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "The vehicle odometer value in a given units",
        "examples": [
          {
            "data_component": "120440a0040000000000",
            "value": {
              "kilometers": 2050
            },
            "description": "Odometer is showing 2050.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 32,
        "name": "engine_total_operating_time",
        "name_cased": "engineTotalOperatingTime",
        "name_pretty": "Engine total operation time",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "The accumulated time of engine operation",
        "examples": [
          {
            "data_component": "0702409772999999999a",
            "value": {
              "hours": 1500.65
            },
            "description": "The engine has operated 1'500.65h in total"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "tire_pressure_statuses",
        "name_cased": "tirePressureStatuses",
        "name_pretty": "Tire pressure statuses",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "status",
            "name_cased": "status",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "normal"
              },
              {
                "id": 1,
                "name": "low"
              },
              {
                "id": 2,
                "name": "alert"
              }
            ],
            "capabilityName": "diagnostics"
          }
        ],
        "id": 33,
        "name_singular": "tire_pressure_status",
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "location": "front_left",
              "status": "normal"
            },
            "description": "Front left tire pressure is normal"
          },
          {
            "data_component": "0101",
            "values": {
              "location": "front_right",
              "status": "low"
            },
            "description": "Front right tire pressure is low"
          },
          {
            "data_component": "0202",
            "values": {
              "location": "rear_right",
              "status": "alert"
            },
            "description": "Rear right tire pressure status alert"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "status": "normal"
            },
            "description": "Rear left tire pressure is normal"
          },
          {
            "data_component": "0400",
            "values": {
              "location": "rear_right_outer",
              "status": "normal"
            },
            "description": "Rear right outer tire pressure is normal"
          },
          {
            "data_component": "0500",
            "values": {
              "location": "rear_left_outer",
              "status": "normal"
            },
            "description": "Rear left outer tire pressure is normal"
          },
          {
            "data_component": "0600",
            "values": {
              "location": "spare",
              "status": "normal"
            },
            "description": "Spare tire pressure is normal"
          }
        ],
        "customType": "tire_pressure_status",
        "capabilityName": "diagnostics"
      },
      {
        "name": "brake_lining_wear_pre_warning",
        "name_cased": "brakeLiningWearPreWarning",
        "name_pretty": "Brake lining wear pre-warning",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 34,
        "added": 12,
        "description": "Status of brake lining wear pre-warning",
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Brake lining wear pre-warning is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_oil_life_remaining",
        "name_cased": "engineOilLifeRemaining",
        "name_pretty": "Engine oil life remaining",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Remaining life of engine oil which decreases over time",
        "id": 35,
        "added": 12,
        "examples": [
          {
            "data_component": "3fec28f5c28f5c29",
            "value": 0.88,
            "description": "Engine oil life remaining is 88%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "name": "oem_trouble_code_values",
        "name_cased": "oemTroubleCodeValues",
        "name_pretty": "OEM trouble code values",
        "type": "custom",
        "description": "Additional OEM trouble codes",
        "items": [
          {
            "name": "id",
            "name_cased": "ID",
            "name_pretty": "ID",
            "type": "string",
            "description": "Identifier for the trouble code",
            "capabilityName": "diagnostics"
          },
          {
            "name": "key_value",
            "name_cased": "keyValue",
            "name_pretty": "Key-Value",
            "type": "custom",
            "description": "Key-value pair for the trouble code",
            "items": [
              {
                "name": "key",
                "name_cased": "key",
                "type": "string",
                "description": "Key for the value",
                "capabilityName": "diagnostics"
              },
              {
                "name": "value",
                "name_cased": "value",
                "type": "string",
                "description": "Value for the key",
                "capabilityName": "diagnostics"
              }
            ],
            "customType": "key_value",
            "capabilityName": "diagnostics"
          }
        ],
        "id": 36,
        "name_singular": "engine_trouble_code_value",
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "000531323349440018000a736f6d655f6572726f72000a736f6d655f76616c7565",
            "values": {
              "id": "123ID",
              "key_value": {
                "key": "some_error",
                "value": "some_value"
              }
            },
            "description": "Trouble code '123ID' has a value 'some_value' for a key 'some_error'"
          },
          {
            "data_component": "0004314233430022000f696d706f7274616e745f6572726f72000f73797374656d206661756c74203332",
            "values": {
              "id": "1B3C",
              "key_value": {
                "key": "important_error",
                "value": "system fault 32"
              }
            },
            "description": "Trouble code '1B3C' has a value 'system fault 32' for a key 'important_error'"
          }
        ],
        "customType": "oem_trouble_code_value",
        "capabilityName": "diagnostics"
      },
      {
        "id": 37,
        "name": "diesel_exhaust_fluid_range",
        "name_cased": "dieselExhaustFluidRange",
        "name_pretty": "Diesel exhaust fluid range",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance remaining until diesel exhaust fluid is empty",
        "examples": [
          {
            "data_component": "120440a1720000000000",
            "value": {
              "kilometers": 2233
            },
            "description": "Diesel exhaust fluid is empty in 2233.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "diesel_particulate_filter_soot_level",
        "name_cased": "dieselParticulateFilterSootLevel",
        "name_pretty": "Diesel particulate filter soot level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Level of soot in diesel exhaust particulate filter",
        "id": 38,
        "added": 12,
        "examples": [
          {
            "data_component": "3fc47ae147ae147b",
            "value": 0.16,
            "description": "Diesel exhaust particulate filter soot level is 16%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "name": "confirmed_trouble_codes",
        "name_cased": "confirmedTroubleCodes",
        "name_pretty": "Confirmed trouble codes",
        "type": "custom",
        "items": [
          {
            "name": "id",
            "name_cased": "ID",
            "name_pretty": "ID",
            "type": "string",
            "description": "Identifier",
            "capabilityName": "diagnostics"
          },
          {
            "name": "ecu_address",
            "name_cased": "ecuAddress",
            "name_pretty": "ECU address",
            "type": "string",
            "description": "Electronic Control Unit address",
            "capabilityName": "diagnostics"
          },
          {
            "name": "ecu_variant_name",
            "name_cased": "ecuVariantName",
            "name_pretty": "ECU variant name",
            "type": "string",
            "description": "Electronic Control Unit variant name",
            "capabilityName": "diagnostics"
          },
          {
            "name": "status",
            "name_cased": "status",
            "type": "string",
            "description": "Status",
            "capabilityName": "diagnostics"
          }
        ],
        "id": 39,
        "name_singular": "confirmed_trouble_code",
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "00063830314331300002313600034341530006414354495645",
            "values": {
              "id": "801C10",
              "ecu_address": "16",
              "ecu_variant_name": "CAS",
              "status": "ACTIVE"
            },
            "description": "Confirmed trouble code '801C10' with ECU address '16' and variante name \"CAS\" is 'ACTIVE'"
          },
          {
            "data_component": "00064435324334340002343800034341530006414354495645",
            "values": {
              "id": "D52C44",
              "ecu_address": "48",
              "ecu_variant_name": "CAS",
              "status": "ACTIVE"
            },
            "description": "Confirmed trouble code 'D52C44' with ECU address '48' and variante name \"CAS\" is 'ACTIVE'"
          }
        ],
        "customType": "confirmed_trouble_code",
        "capabilityName": "diagnostics"
      },
      {
        "name": "diesel_exhaust_filter_status",
        "name_cased": "dieselExhaustFilterStatus",
        "name_pretty": "Diesel exhaust filter status",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "status",
            "name_cased": "status",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "unknown"
              },
              {
                "id": 1,
                "name": "normal_operation"
              },
              {
                "id": 2,
                "name": "overloaded"
              },
              {
                "id": 3,
                "name": "at_limit"
              },
              {
                "id": 4,
                "name": "over_limit"
              }
            ],
            "capabilityName": "diagnostics"
          },
          {
            "name": "component",
            "name_cased": "component",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "unknown"
              },
              {
                "id": 1,
                "name": "exhaust_filter"
              },
              {
                "id": 2,
                "name": "diesel_particulate_filter"
              },
              {
                "id": 3,
                "name": "overboost_code_regulator"
              },
              {
                "id": 4,
                "name": "off_board_regeneration"
              }
            ],
            "capabilityName": "diagnostics"
          },
          {
            "name": "cleaning",
            "name_cased": "cleaning",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "unknown"
              },
              {
                "id": 1,
                "name": "in_progress"
              },
              {
                "id": 2,
                "name": "complete"
              },
              {
                "id": 3,
                "name": "interrupted"
              }
            ],
            "capabilityName": "diagnostics"
          }
        ],
        "id": 40,
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "000100",
            "values": {
              "status": "unknown",
              "component": "exhaust_filter",
              "cleaning": "unknown"
            },
            "description": "Diesel 'exhaust filter' is in 'unknown' status and unknown cleaning state"
          },
          {
            "data_component": "010100",
            "values": {
              "status": "normal_operation",
              "component": "exhaust_filter",
              "cleaning": "unknown"
            },
            "description": "Diesel 'exhaust filter' is in 'normal operation' status unknown cleaning state"
          },
          {
            "data_component": "020100",
            "values": {
              "status": "overloaded",
              "component": "exhaust_filter",
              "cleaning": "unknown"
            },
            "description": "Diesel 'exhaust filter' is in 'overloaded' status and unknown cleaning state"
          },
          {
            "data_component": "030100",
            "values": {
              "status": "at_limit",
              "component": "exhaust_filter",
              "cleaning": "unknown"
            },
            "description": "Diesel 'exhaust filter' is in 'at_limit' status and unknown cleaning state"
          },
          {
            "data_component": "040100",
            "values": {
              "status": "over_limit",
              "component": "exhaust_filter",
              "cleaning": "unknown"
            },
            "description": "Diesel 'exhaust filter' is in 'over_limit' status and unknown cleaning state"
          }
        ],
        "customType": "diesel_exhaust_filter_status",
        "capabilityName": "diagnostics"
      },
      {
        "id": 42,
        "name": "engine_total_idle_operating_time",
        "name_cased": "engineTotalIdleOperatingTime",
        "name_pretty": "Engine total idle operation time",
        "added": 13,
        "type": "unit.duration",
        "size": 10,
        "description": "The accumulated time of engine operation",
        "examples": [
          {
            "data_component": "0702406ab1eb851eb852",
            "value": {
              "hours": 213.56
            },
            "description": "The engine has operated 213.56h in idle"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 43,
        "name": "engine_oil_amount",
        "name_cased": "engineOilAmount",
        "name_pretty": "Engine oil amount",
        "added": 13,
        "type": "unit.volume",
        "size": 10,
        "description": "The current estimated oil tank liquid fill.",
        "examples": [
          {
            "data_component": "1902400c000000000000",
            "value": {
              "liters": 3.5
            },
            "description": "Engine oil tank is filled by 3.5 l"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_oil_level",
        "name_cased": "engineOilLevel",
        "name_pretty": "Engine oil level",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The current estimated oil tank liquid fill in percentage.",
        "id": 44,
        "added": 13,
        "examples": [
          {
            "data_component": "3fe999999999999a",
            "value": 0.8,
            "description": "Engile oil level is at 80%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "diagnostics"
      },
      {
        "id": 45,
        "name": "estimated_secondary_powertrain_range",
        "name_cased": "estimatedSecondaryPowertrainRange",
        "name_pretty": "Estimated secondary powertrain range",
        "added": 13,
        "type": "unit.length",
        "size": 10,
        "description": "Estimated secondary powertrain range",
        "examples": [
          {
            "data_component": "12044070900000000000",
            "value": {
              "kilometers": 265
            },
            "description": "Estimated secondary powertrain`s range is 256.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 46,
        "name": "fuel_level_accuracy",
        "name_cased": "fuelLevelAccuracy",
        "name_pretty": "Fuel level accuracy",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "This value includes the information, if the fuel level has been calculated or measured.",
        "enum_values": [
          {
            "id": 0,
            "name": "measured"
          },
          {
            "id": 1,
            "name": "calculated"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "measured",
            "description": "Fuel level has been measured"
          }
        ],
        "capabilityName": "diagnostics"
      },
      {
        "name": "tire_pressures_targets",
        "name_cased": "tirePressuresTargets",
        "name_pretty": "Tire pressures targets",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "pressure",
            "name_cased": "pressure",
            "type": "unit.pressure",
            "size": 10,
            "description": "Tire pressure",
            "unit": {
              "name": "pressure",
              "id": 21,
              "unit_types": [
                {
                  "name": "pascals",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "kilopascals",
                  "id": 3,
                  "conversion_linear": 1000
                },
                {
                  "name": "inches_of_mercury",
                  "id": 5,
                  "conversion_linear": 3386.39
                },
                {
                  "name": "bars",
                  "id": 6,
                  "conversion_linear": 100000
                },
                {
                  "name": "millibars",
                  "id": 7,
                  "conversion_linear": 100
                },
                {
                  "name": "millimeters_of_mercury",
                  "id": 8,
                  "conversion_linear": 133.322
                },
                {
                  "name": "pounds_force_per_square_inch",
                  "id": 9,
                  "conversion_linear": 6894.76
                }
              ]
            },
            "capabilityName": "diagnostics"
          }
        ],
        "id": 47,
        "name_singular": "tire_pressure_target",
        "added": 13,
        "multiple": true,
        "description": "Target tire pressures for the vehicle.",
        "examples": [
          {
            "data_component": "00150640027ae147ae147b",
            "values": {
              "location": "front_left",
              "pressure": {
                "bars": 2.31
              }
            },
            "description": "Front left tire pressure target is 2.31BAR"
          },
          {
            "data_component": "01150640027ae147ae147b",
            "values": {
              "location": "front_right",
              "pressure": {
                "bars": 2.31
              }
            },
            "description": "Front right tire pressure target is 2.31BAR"
          },
          {
            "data_component": "0215064001eb851eb851ec",
            "values": {
              "location": "rear_right",
              "pressure": {
                "bars": 2.24
              }
            },
            "description": "Rear right tire pressure target is 2.24BAR"
          },
          {
            "data_component": "0315064001eb851eb851ec",
            "values": {
              "location": "rear_left",
              "pressure": {
                "bars": 2.24
              }
            },
            "description": "Rear left tire pressure target is 2.24BAR"
          },
          {
            "data_component": "0415064002000000000000",
            "values": {
              "location": "rear_right_outer",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Rear right outer tire target pressure is 2.25BAR"
          },
          {
            "data_component": "0515064002000000000000",
            "values": {
              "location": "rear_left_outer",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Rear left outer tire target pressure is 2.25BAR"
          },
          {
            "data_component": "0615064002000000000000",
            "values": {
              "location": "spare",
              "pressure": {
                "bars": 2.25
              }
            },
            "description": "Spear tire target pressure is 2.25BAR"
          }
        ],
        "customType": "tire_pressure",
        "capabilityName": "diagnostics"
      },
      {
        "name": "tire_pressures_differences",
        "name_cased": "tirePressuresDifferences",
        "name_pretty": "Tire pressures differences",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location wheel",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_right_outer"
              },
              {
                "id": 5,
                "name": "rear_left_outer"
              },
              {
                "id": 6,
                "name": "spare"
              }
            ],
            "customType": "location_wheel",
            "capabilityName": "diagnostics"
          },
          {
            "name": "pressure",
            "name_cased": "pressure",
            "type": "unit.pressure",
            "size": 10,
            "description": "Tire pressure",
            "unit": {
              "name": "pressure",
              "id": 21,
              "unit_types": [
                {
                  "name": "pascals",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "kilopascals",
                  "id": 3,
                  "conversion_linear": 1000
                },
                {
                  "name": "inches_of_mercury",
                  "id": 5,
                  "conversion_linear": 3386.39
                },
                {
                  "name": "bars",
                  "id": 6,
                  "conversion_linear": 100000
                },
                {
                  "name": "millibars",
                  "id": 7,
                  "conversion_linear": 100
                },
                {
                  "name": "millimeters_of_mercury",
                  "id": 8,
                  "conversion_linear": 133.322
                },
                {
                  "name": "pounds_force_per_square_inch",
                  "id": 9,
                  "conversion_linear": 6894.76
                }
              ]
            },
            "capabilityName": "diagnostics"
          }
        ],
        "id": 48,
        "name_singular": "tire_pressure_difference",
        "added": 13,
        "multiple": true,
        "description": "Tire pressures difference from the target pressure.",
        "examples": [
          {
            "data_component": "0015063fb999999999999a",
            "values": {
              "location": "front_left",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Front left tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0115063fb999999999999a",
            "values": {
              "location": "front_right",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Front right tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0215063fb999999999999a",
            "values": {
              "location": "rear_right",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Rear right tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0315063fb999999999999a",
            "values": {
              "location": "rear_left",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Rear left tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0415063fb999999999999a",
            "values": {
              "location": "rear_right_outer",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Rear right outer tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0515063fb999999999999a",
            "values": {
              "location": "rear_left_outer",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Rear left outer tire pressure difference is 0.1BAR"
          },
          {
            "data_component": "0615063fb999999999999a",
            "values": {
              "location": "spare",
              "pressure": {
                "bars": 0.1
              }
            },
            "description": "Spare tire pressure difference is 0.1BAR"
          }
        ],
        "customType": "tire_pressure",
        "capabilityName": "diagnostics"
      },
      {
        "id": 49,
        "name": "backup_battery_remaining_time",
        "name_cased": "backupBatteryRemainingTime",
        "name_pretty": "Backup battery remaining time",
        "added": 13,
        "type": "unit.duration",
        "size": 10,
        "description": "Remaining time the backup battery can work.",
        "examples": [
          {
            "data_component": "0701402e000000000000",
            "value": {
              "minutes": 15
            },
            "description": "The backup battery has 15min remaining."
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_coolant_fluid_level",
        "name_cased": "engineCoolantFluidLevel",
        "name_pretty": "Engine coolant fluid level",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "filled"
          },
          {
            "id": 2,
            "name": "very_low"
          },
          {
            "id": 3,
            "name": "normal"
          },
          {
            "id": 4,
            "name": "high"
          },
          {
            "id": 5,
            "name": "very_high"
          }
        ],
        "id": 50,
        "added": 13,
        "description": "Engine coolant fluid level",
        "examples": [
          {
            "data_component": "04",
            "value": "high",
            "description": "Engine coolant level is high"
          }
        ],
        "customType": "fluid_level",
        "capabilityName": "diagnostics"
      },
      {
        "name": "engine_oil_fluid_level",
        "name_cased": "engineOilFluidLevel",
        "name_pretty": "Engine oil fluid level",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "filled"
          },
          {
            "id": 2,
            "name": "very_low"
          },
          {
            "id": 3,
            "name": "normal"
          },
          {
            "id": 4,
            "name": "high"
          },
          {
            "id": 5,
            "name": "very_high"
          }
        ],
        "id": 51,
        "added": 13,
        "description": "Engine oil fluid level",
        "examples": [
          {
            "data_component": "03",
            "value": "normal",
            "description": "Engile oil level is at normal"
          }
        ],
        "customType": "fluid_level",
        "capabilityName": "diagnostics"
      },
      {
        "id": 52,
        "name": "engine_oil_pressure_level",
        "name_cased": "engineOilPressureLevel",
        "name_pretty": "Engine oil pressure level",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Engine oil pressure level",
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "normal"
          },
          {
            "id": 2,
            "name": "high"
          },
          {
            "id": 3,
            "name": "low_soft"
          },
          {
            "id": 4,
            "name": "low_hard"
          },
          {
            "id": 5,
            "name": "no_sensor"
          },
          {
            "id": 6,
            "name": "system_fault"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "normal",
            "description": "Engine oil pressure is normal"
          }
        ],
        "capabilityName": "diagnostics"
      },
      {
        "id": 53,
        "name": "engine_time_to_next_service",
        "name_cased": "engineTimeToNextService",
        "name_pretty": "Engine time to next service",
        "added": 13,
        "type": "unit.duration",
        "size": 10,
        "description": "Engine time until next service of the vehicle",
        "examples": [
          {
            "data_component": "0702407f500000000000",
            "value": {
              "hours": 501
            },
            "description": "501.0 engine hours until next service"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "diagnostics"
      },
      {
        "id": 54,
        "name": "low_voltage_battery_charge_level",
        "name_cased": "lowVoltageBatteryChargeLevel",
        "name_pretty": "Low voltage battery charge level",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Indicates if the charge level of the low voltage battery is too low to use other systems",
        "enum_values": [
          {
            "id": 0,
            "name": "ok",
            "description": "Charge level is ok and no other systems are deactivated"
          },
          {
            "id": 1,
            "name": "deactivation_level_1",
            "description": "High voltage users are cut off from low voltage management"
          },
          {
            "id": 2,
            "name": "deactivation_level_2",
            "description": "Infotainment cut off, from that point on no data will be sent to vehicle backend"
          },
          {
            "id": 3,
            "name": "deactivation_level_3",
            "description": "Wake up blocked, vehicle cannot be woken up externally"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "ok",
            "description": "Low voltage battery charge level is ok"
          }
        ],
        "capabilityName": "diagnostics"
      }
    ]
  },
  "doors": {
    "name": "doors",
    "name_cased": "doors",
    "name_pretty": "Doors",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 32
    },
    "api": {
      "intro": 1,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "lock_unlock_doors",
        "mandatory": [
          6
        ],
        "description": "Attempt to lock or unlock all doors of the vehicle."
      }
    ],
    "state": [
      2,
      3,
      4,
      5,
      6
    ],
    "properties": [
      {
        "name": "inside_locks",
        "name_cased": "insideLocks",
        "name_pretty": "Inside locks",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              }
            ],
            "description": "Door location",
            "customType": "location",
            "capabilityName": "doors"
          },
          {
            "name": "lock_state",
            "name_cased": "lockState",
            "name_pretty": "Lock state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "unlocked",
                "verb": "unlock"
              },
              {
                "id": 1,
                "name": "locked",
                "verb": "lock"
              }
            ],
            "description": "Lock state for the door",
            "customType": "lock_state",
            "capabilityName": "doors"
          }
        ],
        "id": 2,
        "multiple": true,
        "name_singular": "inside_lock",
        "description": "Inside lock states for the given doors",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "lock_state": "locked"
            },
            "description": "Front left door is locked inside"
          },
          {
            "data_component": "0100",
            "values": {
              "location": "front_right",
              "lock_state": "unlocked"
            },
            "description": "Front right door is unlocked inside"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "lock_state": "unlocked"
            },
            "description": "Rear right door is unlocked inside"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "lock_state": "unlocked"
            },
            "description": "Rear left door is unlocked inside"
          }
        ],
        "customType": "lock",
        "capabilityName": "doors"
      },
      {
        "name": "locks",
        "name_cased": "locks",
        "name_pretty": "Locks",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              }
            ],
            "description": "Door location",
            "customType": "location",
            "capabilityName": "doors"
          },
          {
            "name": "lock_state",
            "name_cased": "lockState",
            "name_pretty": "Lock state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "unlocked",
                "verb": "unlock"
              },
              {
                "id": 1,
                "name": "locked",
                "verb": "lock"
              }
            ],
            "description": "Lock state for the door",
            "customType": "lock_state",
            "capabilityName": "doors"
          }
        ],
        "id": 3,
        "multiple": true,
        "name_singular": "lock",
        "description": "Lock states for the given doors",
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "location": "front_left",
              "lock_state": "unlocked"
            },
            "description": "Front left door is unlocked"
          },
          {
            "data_component": "0100",
            "values": {
              "location": "front_right",
              "lock_state": "unlocked"
            },
            "description": "Front right door is unlocked"
          },
          {
            "data_component": "0201",
            "values": {
              "location": "rear_right",
              "lock_state": "locked"
            },
            "description": "Rear right door is locked"
          },
          {
            "data_component": "0301",
            "values": {
              "location": "rear_left",
              "lock_state": "locked"
            },
            "description": "Rear left door is locked"
          }
        ],
        "customType": "lock",
        "capabilityName": "doors"
      },
      {
        "name": "positions",
        "name_cased": "positions",
        "name_pretty": "Positions",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 5,
                "name": "all"
              }
            ],
            "capabilityName": "doors"
          },
          {
            "name": "position",
            "name_cased": "position",
            "name_pretty": "Position",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "closed",
                "verb": "close"
              },
              {
                "id": 1,
                "name": "open"
              }
            ],
            "customType": "position",
            "capabilityName": "doors"
          }
        ],
        "id": 4,
        "multiple": true,
        "name_singular": "position",
        "description": "Door positions for the given doors",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "position": "open"
            },
            "description": "Front left door is open"
          },
          {
            "data_component": "0100",
            "values": {
              "location": "front_right",
              "position": "closed"
            },
            "description": "Front right door is closed"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "position": "closed"
            },
            "description": "Rear right door is closed"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "position": "closed"
            },
            "description": "Rear left door is closed"
          },
          {
            "data_component": "0500",
            "values": {
              "location": "all",
              "position": "closed"
            },
            "description": "All doors are closed"
          }
        ],
        "customType": "door_position",
        "capabilityName": "doors"
      },
      {
        "name": "inside_locks_state",
        "name_cased": "insideLocksState",
        "name_pretty": "Inside locks state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "unlocked",
            "verb": "unlock"
          },
          {
            "id": 1,
            "name": "locked",
            "verb": "lock"
          }
        ],
        "id": 5,
        "description": "Inside locks state for the whole vehicle (combines all specific lock states if available)",
        "examples": [
          {
            "data_component": "01",
            "value": "locked",
            "description": "Doors are locked inside"
          }
        ],
        "customType": "lock_state",
        "capabilityName": "doors"
      },
      {
        "name": "locks_state",
        "name_cased": "locksState",
        "name_pretty": "Locks state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "unlocked",
            "verb": "unlock"
          },
          {
            "id": 1,
            "name": "locked",
            "verb": "lock"
          }
        ],
        "id": 6,
        "description": "Locks state for the whole vehicle (combines all specific lock states if available)",
        "examples": [
          {
            "data_component": "00",
            "value": "unlocked",
            "description": "Doors are unlocked"
          }
        ],
        "customType": "lock_state",
        "capabilityName": "doors"
      }
    ]
  },
  "driver_fatigue": {
    "name": "driver_fatigue",
    "name_cased": "driverFatigue",
    "name_pretty": "Driver Fatigue",
    "category": "health",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 65
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "disabled_in": [
      "web"
    ],
    "getters": {},
    "state": [
      1
    ],
    "properties": [
      {
        "id": 1,
        "name": "detected_fatigue_level",
        "name_cased": "detectedFatigueLevel",
        "name_pretty": "Detected fatigue level",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "light"
          },
          {
            "id": 1,
            "name": "pause_recommended"
          },
          {
            "id": 2,
            "name": "action_needed"
          },
          {
            "id": 3,
            "name": "car_ready_to_take_over"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "pause_recommended",
            "description": "Driver is recommended to take a pause"
          }
        ],
        "capabilityName": "driverFatigue"
      }
    ]
  },
  "engine": {
    "name": "engine",
    "name_cased": "engine",
    "name_pretty": "Engine",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 105
    },
    "api": {
      "intro": 11,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "turn_engine_on_off",
        "mandatory": [
          1
        ],
        "description": "Attempt to turn the vehicle engine on or off."
      },
      {
        "name": "enable_disable_start_stop",
        "mandatory": [
          3
        ],
        "description": "Activate or deactivate the Start-Stop system of the engine. When activated, this will automatically shut down and restart the internal combustion engine when the vehicle is stopped."
      }
    ],
    "state": [
      1,
      2,
      3
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "off"
          },
          {
            "id": 1,
            "name": "on"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "00",
            "value": "off",
            "description": "Engine is off"
          }
        ],
        "customType": "on_off_state",
        "capabilityName": "engine"
      },
      {
        "name": "start_stop_state",
        "name_cased": "startStopState",
        "name_pretty": "Start-stop state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 2,
        "description": "Indicates wheter the start-stop system is currently active or not",
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Automatic engine start-stop system is currently active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "engine"
      },
      {
        "name": "start_stop_enabled",
        "name_cased": "startStopEnabled",
        "name_pretty": "Start-stop enabled",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "disabled",
            "verb": "disable"
          },
          {
            "id": 1,
            "name": "enabled",
            "verb": "enable"
          }
        ],
        "id": 3,
        "added": 13,
        "description": "Indicates if the automatic start-stop system is enabled or not",
        "examples": [
          {
            "data_component": "01",
            "value": "enabled",
            "description": "Automatic start-stop system is enabled"
          }
        ],
        "customType": "enabled_state",
        "capabilityName": "engine"
      }
    ]
  },
  "failure_message": {
    "name": "failure_message",
    "name_cased": "failureMessage",
    "name_pretty": "Failure Message",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 2
    },
    "api": {
      "intro": 2,
      "update": 11
    },
    "state": [
      1,
      2,
      3,
      4,
      5
    ],
    "properties": [
      {
        "id": 1,
        "name": "failed_message_id",
        "name_cased": "failedMessageID",
        "name_pretty": "Failed message ID",
        "type": "uinteger",
        "size": 2,
        "description": "Capability identifier of the failed message",
        "examples": [
          {
            "data_component": "0021",
            "value": 33,
            "description": "Failed message is the 'Trunk' capability"
          }
        ],
        "capabilityName": "failureMessage"
      },
      {
        "id": 2,
        "name": "failed_message_type",
        "name_cased": "failedMessageType",
        "name_pretty": "Failed message type",
        "type": "uinteger",
        "size": 1,
        "description": "Message type of the failed message",
        "examples": [
          {
            "data_component": "01",
            "value": 1,
            "description": "Failed message type is 'set'"
          }
        ],
        "capabilityName": "failureMessage"
      },
      {
        "id": 3,
        "name": "failure_reason",
        "name_cased": "failureReason",
        "name_pretty": "Failure reason",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unsupported_capability",
            "name_pretty": "Unsupported Capability",
            "description": "Vehicle has not the capability to perform the command"
          },
          {
            "id": 1,
            "name": "unauthorised",
            "name_pretty": "Unauthorised",
            "description": "User has not been authenticated or lacks permissions"
          },
          {
            "id": 2,
            "name": "incorrect_state",
            "name_pretty": "Incorrect State",
            "description": "Command can not be executed in the current vehicle state"
          },
          {
            "id": 3,
            "name": "execution_timeout",
            "name_pretty": "Execution Timeout",
            "description": "Command failed to execute in time for an unknown reason"
          },
          {
            "id": 4,
            "name": "vehicle_asleep",
            "name_pretty": "Vehicle Asleep",
            "description": "Vehicle has to be waken up before the command can be used. If this is for a virtual vehicle, the emulator has to be loaded"
          },
          {
            "id": 5,
            "name": "invalid_command",
            "name_pretty": "Invalid Command",
            "description": "Command not recognised"
          },
          {
            "id": 6,
            "name": "pending",
            "name_pretty": "Pending",
            "description": "Capability is being refreshed"
          },
          {
            "id": 7,
            "name": "rate_limit",
            "name_pretty": "Rate Limit",
            "description": "Capability rate limit has been exceeded"
          },
          {
            "id": 8,
            "name": "oem_error",
            "name_pretty": "OEM error",
            "description": "API call to an OEM returned an error"
          },
          {
            "id": 9,
            "name": "privacy_mode_active",
            "name_pretty": "Privacy mode active",
            "description": "Privacy mode is turned on, meaning vehicle location and other \"private\" data is not transmitted by the vehicle."
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "unauthorised",
            "description": "Failure occured because of unauthorised state"
          }
        ],
        "capabilityName": "failureMessage"
      },
      {
        "id": 4,
        "name": "failure_description",
        "name_cased": "failureDescription",
        "name_pretty": "Failure description",
        "type": "string",
        "description": "Failure description",
        "examples": [
          {
            "data_component": "54727920616761696e",
            "value": "Try again",
            "description": "Failure description informs to 'Try again'"
          }
        ],
        "capabilityName": "failureMessage"
      },
      {
        "id": 5,
        "name": "failed_property_ids",
        "name_cased": "failedPropertyIDs",
        "name_pretty": "Failed property IDs",
        "type": "bytes",
        "description": "Array of failed property identifiers",
        "examples": [
          {
            "data_component": "0102",
            "value": [
              1,
              2
            ],
            "description": "Trunk's lock and position properties failed"
          }
        ],
        "capabilityName": "failureMessage"
      }
    ]
  },
  "firmware_version": {
    "name": "firmware_version",
    "name_cased": "firmwareVersion",
    "name_pretty": "Firmware Version",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 3
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "getters": {
      "name": "get_firmware_version"
    },
    "state": [
      1,
      2,
      3
    ],
    "properties": [
      {
        "name": "hmkit_version",
        "name_cased": "hmKitVersion",
        "name_pretty": "HMKit version",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "major",
            "name_cased": "major",
            "type": "uinteger",
            "size": 1,
            "description": "HMKit version major number",
            "capabilityName": "firmwareVersion"
          },
          {
            "name": "minor",
            "name_cased": "minor",
            "type": "uinteger",
            "size": 1,
            "description": "HMKit version minor number",
            "capabilityName": "firmwareVersion"
          },
          {
            "name": "patch",
            "name_cased": "patch",
            "type": "uinteger",
            "size": 1,
            "description": "HMKit version patch number",
            "capabilityName": "firmwareVersion"
          }
        ],
        "id": 1,
        "description": "HMKit version",
        "examples": [
          {
            "data_component": "010f21",
            "values": {
              "major": 1,
              "minor": 15,
              "patch": 33
            },
            "description": "HMKit version is 1.15.33"
          }
        ],
        "customType": "hmkit_version",
        "capabilityName": "firmwareVersion"
      },
      {
        "id": 2,
        "name": "hmkit_build_name",
        "name_cased": "hmKitBuildName",
        "name_pretty": "HMKit build name",
        "type": "string",
        "description": "HMKit version build name",
        "examples": [
          {
            "data_component": "6274737461636b2d75617274",
            "value": "btstack-uart",
            "description": "Build name is 'btstack-uart'"
          }
        ],
        "capabilityName": "firmwareVersion"
      },
      {
        "id": 3,
        "name": "application_version",
        "name_cased": "applicationVersion",
        "name_pretty": "Application version",
        "type": "string",
        "description": "Application version",
        "examples": [
          {
            "data_component": "76312e352d70726f64",
            "value": "v1.5-prod",
            "description": "Application version is 'v1.5-prod'"
          }
        ],
        "capabilityName": "firmwareVersion"
      }
    ]
  },
  "fueling": {
    "name": "fueling",
    "name_cased": "fueling",
    "name_pretty": "Fueling",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 64
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "getters": {
      "name": "get_gas_flap_state"
    },
    "setters": [
      {
        "name": "control_gas_flap",
        "optional": [
          2,
          3
        ],
        "description": "Control the gas flap of the vehicle."
      }
    ],
    "state": [
      2,
      3
    ],
    "properties": [
      {
        "name": "gas_flap_lock",
        "name_cased": "gasFlapLock",
        "name_pretty": "Gas flap lock",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "unlocked",
            "verb": "unlock"
          },
          {
            "id": 1,
            "name": "locked",
            "verb": "lock"
          }
        ],
        "id": 2,
        "examples": [
          {
            "data_component": "01",
            "value": "locked",
            "description": "Gas flap is locked"
          }
        ],
        "customType": "lock_state",
        "capabilityName": "fueling"
      },
      {
        "name": "gas_flap_position",
        "name_cased": "gasFlapPosition",
        "name_pretty": "Gas flap position",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "open"
          }
        ],
        "id": 3,
        "examples": [
          {
            "data_component": "00",
            "value": "closed",
            "description": "Gas flap is closed"
          }
        ],
        "customType": "position",
        "capabilityName": "fueling"
      }
    ]
  },
  "graphics": {
    "name": "graphics",
    "name_cased": "graphics",
    "name_pretty": "Graphics",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 81
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "setters": [
      {
        "name": "display_image",
        "mandatory": [
          1
        ],
        "description": "Display an image in the headunit by providing the image URL."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "image_url",
        "name_cased": "imageURL",
        "name_pretty": "Image URL",
        "type": "string",
        "description": "The image URL",
        "examples": [
          {
            "data_component": "68747470733a2f2f61626f75742e686967682d6d6f62696c6974792e636f6d2f6173736574732f696d616765732f686d2d6c6f676f2e737667",
            "value": "https://about.high-mobility.com/assets/images/hm-logo.svg",
            "description": "Image URL is 'https://about.high-mobility.com/assets/images/hm-logo.svg'"
          }
        ],
        "capabilityName": "graphics"
      }
    ]
  },
  "heart_rate": {
    "name": "heart_rate",
    "name_cased": "heartRate",
    "name_pretty": "Heart Rate",
    "category": "health",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 41
    },
    "api": {
      "intro": 4,
      "update": 12
    },
    "disabled_in": [
      "web"
    ],
    "setters": [
      {
        "name": "send_heart_rate",
        "mandatory": [
          1
        ],
        "description": "Send the driver heart rate to the vehicle."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "heart_rate",
        "name_cased": "heartRate",
        "name_pretty": "Heart rate",
        "type": "unit.frequency",
        "size": 10,
        "examples": [
          {
            "data_component": "0e084050000000000000",
            "value": {
              "times_per_minute": 64
            },
            "description": "Heart rate is 64.0tpm (bpm)"
          }
        ],
        "unit": {
          "name": "frequency",
          "id": 14,
          "unit_types": [
            {
              "name": "hertz",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millihertz",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilohertz",
              "id": 3,
              "conversion_linear": 1000
            },
            {
              "name": "megahertz",
              "id": 4,
              "conversion_linear": 1000000
            },
            {
              "name": "gigahertz",
              "id": 5,
              "conversion_linear": 1000000000
            },
            {
              "name": "times_per_minute",
              "id": 8,
              "conversion_linear": 60
            },
            {
              "name": "times_per_hour",
              "id": 9,
              "conversion_linear": 3600
            },
            {
              "name": "times_per_day",
              "id": 10,
              "conversion_linear": 86400
            }
          ]
        },
        "capabilityName": "heartRate"
      }
    ]
  },
  "historical": {
    "name": "historical",
    "name_cased": "historical",
    "name_pretty": "Historical",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 18
    },
    "api": {
      "intro": 8,
      "update": 12
    },
    "disabled_in": [
      "ble"
    ],
    "setters": [
      {
        "name": "request_states",
        "mandatory": [
          2
        ],
        "optional": [
          3,
          4
        ],
        "description": "Request historical states."
      },
      {
        "name": "get_trips",
        "optional": [
          3,
          4
        ],
        "constants": [
          {
            "property_id": 2,
            "value": [
              0,
              106
            ]
          }
        ],
        "description": "Request history of trips travelled with the vehicle."
      },
      {
        "name": "get_charging_sessions",
        "optional": [
          3,
          4
        ],
        "constants": [
          {
            "property_id": 2,
            "value": [
              0,
              109
            ]
          }
        ],
        "description": "Request history of charging sessions for the vehicle."
      }
    ],
    "state": [
      1
    ],
    "properties": [
      {
        "name": "states",
        "name_cased": "states",
        "name_pretty": "States",
        "type": "bytes",
        "description": "The bytes of a Capability state",
        "id": 1,
        "multiple": true,
        "name_singular": "state",
        "examples": [
          {
            "data_component": "0c0020010600040100010004000501000200010400050100020201a2000b010008000001598938e788",
            "values": {
              "doors": {
                "locks_state": "unlocked",
                "positions": [
                  {
                    "location": "front_left",
                    "position": "open"
                  },
                  {
                    "location": "rear_right",
                    "position": "open"
                  }
                ],
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Doors capability - front left and rear right door is open while locks are unlocked, recorded at 10. January 2017 at 16:32:05 GMT"
          },
          {
            "data_component": "0c0023010b0004010001010c00040100010018000d01000a140240418000000000001c000d01000a12044081580000000000a2000b010008000001598938e788",
            "values": {
              "charging": {
                "charge_port_state": "open",
                "charge_mode": "immediate",
                "charging_rate": {
                  "kilowatts": 35
                },
                "max_range": {
                  "kilometers": 555
                },
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Charging capability - charging port is open, charge mode is immediate, charging rate is 35.0kW and max range is 555.0km, recorded at 10. January 2017 at 16:32:05 GMT"
          }
        ],
        "customType": "capability_state",
        "capabilityName": "historical"
      },
      {
        "id": 2,
        "name": "capability_id",
        "name_cased": "capabilityID",
        "name_pretty": "Capability ID",
        "type": "uinteger",
        "size": 2,
        "description": "The identifier of the Capability",
        "examples": [
          {
            "data_component": "0060",
            "value": 96,
            "description": "Home Charger capability identifier"
          }
        ],
        "capabilityName": "historical"
      },
      {
        "id": 3,
        "name": "start_date",
        "name_cased": "startDate",
        "name_pretty": "Start date",
        "type": "timestamp",
        "size": 8,
        "description": "Start date for historical data query",
        "examples": [
          {
            "data_component": "0000016da6524300",
            "value": "2019-10-07T13:04:32.000Z",
            "description": "Start date is 7. October 2019 at 13:04:32 GMT"
          }
        ],
        "capabilityName": "historical"
      },
      {
        "id": 4,
        "name": "end_date",
        "name_cased": "endDate",
        "name_pretty": "End date",
        "type": "timestamp",
        "size": 8,
        "description": "End date for historical data query",
        "examples": [
          {
            "data_component": "0000016d71e2c4f0",
            "value": "2019-09-27T08:42:30.000Z",
            "description": "End date is 27. September 2019 at 08:42:30 GMT"
          }
        ],
        "capabilityName": "historical"
      }
    ]
  },
  "home_charger": {
    "name": "home_charger",
    "name_cased": "homeCharger",
    "name_pretty": "Home Charger",
    "category": "infrastructure",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 96
    },
    "api": {
      "intro": 6,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "set_charge_current",
        "mandatory": [
          14
        ],
        "description": "Set the charge current of the home charger."
      },
      {
        "name": "set_price_tariffs",
        "mandatory": [
          18
        ],
        "description": "Set the price tariffs of the home charger."
      },
      {
        "name": "activate_deactivate_solar_charging",
        "mandatory": [
          5
        ],
        "description": "Activate or deactivate charging from solar power."
      },
      {
        "name": "enable_disable_wi_fi_hotspot",
        "mandatory": [
          8
        ],
        "description": "Enable or disable the Wi-Fi Hotspot."
      },
      {
        "name": "authenticate_expire",
        "mandatory": [
          13
        ],
        "description": "Authenticate or expire the charging session. Only if the session is authenticated can the charging be started by the vehicle."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      8,
      9,
      10,
      11,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "properties": [
      {
        "id": 1,
        "name": "charging_status",
        "name_cased": "chargingStatus",
        "name_pretty": "Charging status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "disconnected"
          },
          {
            "id": 1,
            "name": "plugged_in"
          },
          {
            "id": 2,
            "name": "charging"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "charging",
            "description": "Charging is active"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "id": 2,
        "name": "authentication_mechanism",
        "name_cased": "authenticationMechanism",
        "name_pretty": "Authentication mechanism",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "pin",
            "name_pretty": "PIN"
          },
          {
            "id": 1,
            "name": "app"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "app",
            "description": "Authentication mechanism is an app"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "id": 3,
        "name": "plug_type",
        "name_cased": "plugType",
        "name_pretty": "Plug type",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "type_1"
          },
          {
            "id": 1,
            "name": "type_2"
          },
          {
            "id": 2,
            "name": "ccs",
            "name_pretty": "Combined Charging System"
          },
          {
            "id": 3,
            "name": "chademo",
            "name_pretty": "CHAdeMO"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "type_2",
            "description": "Plug type is 'Type 2'"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "id": 4,
        "name": "charging_power_kw",
        "name_cased": "chargingPowerKW",
        "name_pretty": "Charging power (kW)",
        "deprecated": {
          "new_name": "charging_power",
          "reason": "removed the unit from the name"
        },
        "type": "unit.power",
        "size": 10,
        "description": "Charging power",
        "examples": [
          {
            "data_component": "14024027000000000000",
            "value": {
              "kilowatts": 11.5
            },
            "description": "Charging power is 11.5kW"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "homeCharger"
      },
      {
        "name": "solar_charging",
        "name_cased": "solarCharging",
        "name_pretty": "Solar charging",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 5,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Solar charging is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "homeCharger"
      },
      {
        "name": "wi_fi_hotspot_enabled",
        "name_cased": "wifiHotspotEnabled",
        "name_pretty": "Wi-Fi hotspot enabled",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "disabled",
            "verb": "disable"
          },
          {
            "id": 1,
            "name": "enabled",
            "verb": "enable"
          }
        ],
        "id": 8,
        "examples": [
          {
            "data_component": "01",
            "value": "enabled",
            "description": "WiFi hotspot is enabled"
          }
        ],
        "customType": "enabled_state",
        "capabilityName": "homeCharger"
      },
      {
        "id": 9,
        "name": "wi_fi_hotspot_ssid",
        "name_cased": "wifiHotspotSSID",
        "name_pretty": "Wi-Fi hotspot SSID",
        "type": "string",
        "description": "The Wi-Fi Hotspot SSID",
        "examples": [
          {
            "data_component": "436861726765722037363132",
            "value": "Charger 7612",
            "description": "WiFi hotspot SSID is 'Charger 7612'"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "name": "wi_fi_hotspot_security",
        "name_cased": "wiFiHotspotSecurity",
        "name_pretty": "Wi-Fi hotspot security",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "none"
          },
          {
            "id": 1,
            "name": "wep",
            "name_pretty": "WEP"
          },
          {
            "id": 2,
            "name": "wpa",
            "name_pretty": "WPA/WPA2 Personal"
          },
          {
            "id": 3,
            "name": "wpa2_personal",
            "name_pretty": "WPA2 Personal"
          }
        ],
        "id": 10,
        "examples": [
          {
            "data_component": "03",
            "value": "wpa2_personal",
            "description": "WiFi hotspot security uses the WPA2-Personal algorithm"
          }
        ],
        "customType": "network_security",
        "capabilityName": "homeCharger"
      },
      {
        "id": 11,
        "name": "wi_fi_hotspot_password",
        "name_cased": "wiFiHotspotPassword",
        "name_pretty": "Wi-Fi hotspot password",
        "type": "string",
        "description": "The Wi-Fi Hotspot password",
        "examples": [
          {
            "data_component": "5a57337641524e554265",
            "value": "ZW3vARNUBe",
            "description": "WiFi hotspot password is 'ZW3vARNUBe'"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "id": 13,
        "name": "authentication_state",
        "name_cased": "authenticationState",
        "name_pretty": "Authentication state",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unauthenticated",
            "verb": "expire_authentication"
          },
          {
            "id": 1,
            "name": "authenticated",
            "verb": "authenticate"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "authenticated",
            "description": "Is authenticated to the charger"
          }
        ],
        "capabilityName": "homeCharger"
      },
      {
        "id": 14,
        "name": "charge_current",
        "name_cased": "chargeCurrent",
        "name_pretty": "Charge current",
        "type": "unit.electric_current",
        "size": 10,
        "description": "The charge current",
        "examples": [
          {
            "data_component": "09003fe0000000000000",
            "value": {
              "amperes": 0.5
            },
            "description": "Charger current is 0.5A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "homeCharger"
      },
      {
        "id": 15,
        "name": "maximum_charge_current",
        "name_cased": "maximumChargeCurrent",
        "name_pretty": "Maximum charge current",
        "type": "unit.electric_current",
        "size": 10,
        "description": "The maximum possible charge current",
        "examples": [
          {
            "data_component": "09003ff0000000000000",
            "value": {
              "amperes": 1
            },
            "description": "Maximum charger current is 1.0A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "homeCharger"
      },
      {
        "id": 16,
        "name": "minimum_charge_current",
        "name_cased": "minimumChargeCurrent",
        "name_pretty": "Minimum charge current",
        "type": "unit.electric_current",
        "size": 10,
        "description": "The minimal possible charge current",
        "examples": [
          {
            "data_component": "09003fb999999999999a",
            "value": {
              "amperes": 0.1
            },
            "description": "Minimum charger current is 0.1A"
          }
        ],
        "unit": {
          "name": "electric_current",
          "id": 9,
          "unit_types": [
            {
              "name": "amperes",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliamperes",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kiloamperes",
              "id": 2,
              "conversion_linear": 1000
            }
          ]
        },
        "capabilityName": "homeCharger"
      },
      {
        "name": "coordinates",
        "name_cased": "coordinates",
        "name_pretty": "Coordinates",
        "type": "custom",
        "size": 16,
        "items": [
          {
            "name": "latitude",
            "name_cased": "latitude",
            "validation": "min:-90|max:90",
            "type": "double",
            "size": 8,
            "description": "Latitude",
            "capabilityName": "homeCharger"
          },
          {
            "name": "longitude",
            "name_cased": "longitude",
            "validation": "min:-180|max:180",
            "type": "double",
            "size": 8,
            "description": "Longitude",
            "capabilityName": "homeCharger"
          }
        ],
        "id": 17,
        "examples": [
          {
            "data_component": "404a428f9f44d445402acf562174c4ce",
            "values": {
              "latitude": 52.520008,
              "longitude": 13.404954
            },
            "description": "Charger is located at 52.520008:13.404954"
          }
        ],
        "customType": "coordinates",
        "capabilityName": "homeCharger"
      },
      {
        "name": "price_tariffs",
        "name_cased": "priceTariffs",
        "name_pretty": "Price tariffs",
        "type": "custom",
        "items": [
          {
            "name": "pricing_type",
            "name_cased": "pricingType",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "starting_fee"
              },
              {
                "id": 1,
                "name": "per_minute"
              },
              {
                "id": 2,
                "name": "per_kwh",
                "name_pretty": "Per kWh"
              }
            ],
            "capabilityName": "homeCharger"
          },
          {
            "name": "price",
            "name_cased": "price",
            "type": "double",
            "size": 8,
            "description": "The price",
            "capabilityName": "homeCharger"
          },
          {
            "name": "currency",
            "name_cased": "currency",
            "type": "string",
            "description": "The currency alphabetic code per ISO 4217 or crypto currency symbol",
            "capabilityName": "homeCharger"
          }
        ],
        "id": 18,
        "multiple": true,
        "name_singular": "price_tariff",
        "examples": [
          {
            "data_component": "0040120000000000000003455552",
            "values": {
              "pricing_type": "starting_fee",
              "price": 4.5,
              "currency": "EUR"
            },
            "description": "Charger starting fee tariff is 4.5€"
          },
          {
            "data_component": "013fd33333333333330003455552",
            "values": {
              "pricing_type": "per_minute",
              "price": 0.3,
              "currency": "EUR"
            },
            "description": "Charger per minute fee tariff is 0.3€"
          },
          {
            "data_component": "023fd33333333333330006526970706c65",
            "values": {
              "pricing_type": "per_kwh",
              "price": 0.3,
              "currency": "Ripple"
            },
            "description": "Charger per kWh tariff is 0.3RPL"
          }
        ],
        "customType": "price_tariff",
        "capabilityName": "homeCharger"
      },
      {
        "id": 19,
        "name": "charging_power",
        "name_cased": "chargingPower",
        "name_pretty": "Charging power",
        "added": 12,
        "type": "unit.power",
        "size": 10,
        "description": "Charging power output from the charger",
        "examples": [
          {
            "data_component": "14024075e00000000000",
            "value": {
              "kilowatts": 350
            },
            "description": "Charging power is 350.0kW"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "homeCharger"
      }
    ]
  },
  "honk_horn_flash_lights": {
    "name": "honk_horn_flash_lights",
    "name_cased": "honkHornFlashLights",
    "name_pretty": "Honk Horn & Flash Lights",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 38
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "getters": {
      "name": "get_flashers_state"
    },
    "setters": [
      {
        "name": "honk_flash",
        "optional": [
          5,
          3
        ],
        "description": "Honk the horn and/or flash the blinker lights. This can be done simultaneously or just one action at the time. It is also possible to pass in how many times the lights should be flashed and how many seconds the horn should be honked."
      },
      {
        "name": "activate_deactivate_emergency_flasher",
        "mandatory": [
          4
        ],
        "description": "This activates or deactivates the emergency flashers of the vehicle, typically the blinkers to alarm other drivers."
      }
    ],
    "state": [
      1
    ],
    "properties": [
      {
        "id": 1,
        "name": "flashers",
        "name_cased": "flashers",
        "name_pretty": "Flashers",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive"
          },
          {
            "id": 1,
            "name": "emergency_flasher_active"
          },
          {
            "id": 2,
            "name": "left_flasher_active"
          },
          {
            "id": 3,
            "name": "right_flasher_active"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "left_flasher_active",
            "description": "Left flasher is active"
          }
        ],
        "capabilityName": "honkHornFlashLights"
      },
      {
        "id": 2,
        "name": "honk_seconds",
        "name_cased": "honkSeconds",
        "name_pretty": "Honk seconds",
        "deprecated": {
          "new_name": "honk_time",
          "reason": "removed the unit from the name"
        },
        "type": "unit.duration",
        "size": 10,
        "description": "Time to honk the horn",
        "examples": [
          {
            "data_component": "07004008000000000000",
            "value": {
              "seconds": 3
            },
            "description": "Honk the horn for 3.0s"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "honkHornFlashLights"
      },
      {
        "id": 3,
        "name": "flash_times",
        "name_cased": "flashTimes",
        "name_pretty": "Flash times",
        "type": "uinteger",
        "size": 1,
        "description": "Number of times to flash the lights",
        "examples": [
          {
            "data_component": "05",
            "value": 5,
            "description": "Flash the lights 5 times"
          }
        ],
        "capabilityName": "honkHornFlashLights"
      },
      {
        "name": "emergency_flashers_state",
        "name_cased": "emergencyFlashersState",
        "name_pretty": "Emergency flasher state",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Emergency flashers are active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "honkHornFlashLights"
      },
      {
        "id": 5,
        "name": "honk_time",
        "name_cased": "honkTime",
        "name_pretty": "Honk time",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Time to honk the horn",
        "examples": [
          {
            "data_component": "07004000000000000000",
            "value": {
              "seconds": 2
            },
            "description": "Honk the horn for 2.0s"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "honkHornFlashLights"
      }
    ]
  },
  "hood": {
    "name": "hood",
    "name_cased": "hood",
    "name_pretty": "Hood",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 103
    },
    "api": {
      "intro": 11,
      "update": 13
    },
    "getters": {},
    "state": [
      1,
      2,
      3
    ],
    "properties": [
      {
        "id": 1,
        "name": "position",
        "name_cased": "position",
        "name_pretty": "Position",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "closed"
          },
          {
            "id": 1,
            "name": "open"
          },
          {
            "id": 2,
            "name": "intermediate"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "open",
            "description": "Hood is open"
          }
        ],
        "capabilityName": "hood"
      },
      {
        "name": "lock",
        "name_cased": "lock",
        "name_pretty": "Lock",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "unlocked",
            "verb": "unlock"
          },
          {
            "id": 1,
            "name": "locked",
            "verb": "lock"
          }
        ],
        "id": 2,
        "added": 13,
        "description": "Includes the lock state of the hood.",
        "examples": [
          {
            "data_component": "01",
            "value": "locked",
            "description": "The hood is locked."
          }
        ],
        "customType": "lock_state",
        "capabilityName": "hood"
      },
      {
        "name": "lock_safety",
        "name_cased": "lockSafety",
        "name_pretty": "Lock safety",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "safe",
            "description": "The lock is double-locked (also from inside the vehicle)"
          },
          {
            "id": 1,
            "name": "unsafe"
          }
        ],
        "id": 3,
        "added": 13,
        "description": "Indicates the safe-state of the hood.",
        "examples": [
          {
            "data_component": "00",
            "value": "safe",
            "description": "Trunk lock is safely locked."
          }
        ],
        "customType": "lock_safety",
        "capabilityName": "hood"
      }
    ]
  },
  "ignition": {
    "name": "ignition",
    "name_cased": "ignition",
    "name_pretty": "Ignition",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 53
    },
    "api": {
      "intro": 3,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "turn_ignition_on_off",
        "mandatory": [
          3
        ],
        "description": "Attempt to turn the vehicle engine ignition on or off. When the engine ignition is on, it is possible for the driver to turn on the engine and drive the vehicle."
      }
    ],
    "state": [
      1,
      2,
      3
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "lock"
          },
          {
            "id": 1,
            "name": "off"
          },
          {
            "id": 2,
            "name": "accessory"
          },
          {
            "id": 3,
            "name": "on"
          },
          {
            "id": 4,
            "name": "start"
          }
        ],
        "id": 1,
        "deprecated": {
          "new_name": "state",
          "reason": "combined with 'accessories_status'"
        },
        "examples": [
          {
            "data_component": "01",
            "value": "off",
            "description": "Ignition is off"
          }
        ],
        "customType": "ignition_state",
        "capabilityName": "ignition"
      },
      {
        "name": "accessories_status",
        "name_cased": "accessoriesStatus",
        "name_pretty": "Accessories status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "lock"
          },
          {
            "id": 1,
            "name": "off"
          },
          {
            "id": 2,
            "name": "accessory"
          },
          {
            "id": 3,
            "name": "on"
          },
          {
            "id": 4,
            "name": "start"
          }
        ],
        "id": 2,
        "deprecated": {
          "new_name": "state",
          "reason": "combined with 'status'"
        },
        "examples": [
          {
            "data_component": "03",
            "value": "on",
            "description": "Accessories power is on"
          }
        ],
        "customType": "ignition_state",
        "capabilityName": "ignition"
      },
      {
        "name": "state",
        "name_cased": "state",
        "name_pretty": "State",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "lock"
          },
          {
            "id": 1,
            "name": "off"
          },
          {
            "id": 2,
            "name": "accessory"
          },
          {
            "id": 3,
            "name": "on"
          },
          {
            "id": 4,
            "name": "start"
          }
        ],
        "id": 3,
        "added": 12,
        "examples": [
          {
            "data_component": "02",
            "value": "accessory",
            "description": "Ignition state is in accessory"
          }
        ],
        "customType": "ignition_state",
        "capabilityName": "ignition"
      }
    ]
  },
  "keyfob_position": {
    "name": "keyfob_position",
    "name_cased": "keyfobPosition",
    "name_pretty": "Keyfob Position",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 72
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "disabled_in": [
      "web"
    ],
    "getters": {
      "name": "get_keyfob_position"
    },
    "state": [
      1
    ],
    "properties": [
      {
        "id": 1,
        "name": "location",
        "name_cased": "location",
        "name_pretty": "Location",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "out_of_range"
          },
          {
            "id": 1,
            "name": "outside_driver_side"
          },
          {
            "id": 2,
            "name": "outside_in_front_of_car"
          },
          {
            "id": 3,
            "name": "outside_passenger_side"
          },
          {
            "id": 4,
            "name": "outside_behind_car"
          },
          {
            "id": 5,
            "name": "inside_car"
          }
        ],
        "examples": [
          {
            "data_component": "05",
            "value": "inside_car",
            "description": "Keyfob is inside the vehicle"
          }
        ],
        "capabilityName": "keyfobPosition"
      }
    ]
  },
  "light_conditions": {
    "name": "light_conditions",
    "name_cased": "lightConditions",
    "name_pretty": "Light Conditions",
    "category": "environment",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 84
    },
    "api": {
      "intro": 5,
      "update": 12
    },
    "getters": {
      "name": "get_light_conditions"
    },
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "id": 1,
        "name": "outside_light",
        "name_cased": "outsideLight",
        "name_pretty": "Outside light",
        "type": "unit.illuminance",
        "size": 10,
        "description": "Measured outside illuminance",
        "examples": [
          {
            "data_component": "110040fb198000000000",
            "value": {
              "lux": 111000
            },
            "description": "Outside illuminance is 111'000.0lux"
          }
        ],
        "unit": {
          "name": "illuminance",
          "id": 17,
          "unit_types": [
            {
              "name": "lux",
              "id": 0,
              "conversion_linear": 1
            }
          ]
        },
        "capabilityName": "lightConditions"
      },
      {
        "id": 2,
        "name": "inside_light",
        "name_cased": "insideLight",
        "name_pretty": "Inside light",
        "type": "unit.illuminance",
        "size": 10,
        "description": "Measured inside illuminance",
        "examples": [
          {
            "data_component": "11003fd0000000000000",
            "value": {
              "lux": 0.25
            },
            "description": "Inside illuminance is 0.25lux"
          }
        ],
        "unit": {
          "name": "illuminance",
          "id": 17,
          "unit_types": [
            {
              "name": "lux",
              "id": 0,
              "conversion_linear": 1
            }
          ]
        },
        "capabilityName": "lightConditions"
      }
    ]
  },
  "lights": {
    "name": "lights",
    "name_cased": "lights",
    "name_pretty": "Lights",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 54
    },
    "api": {
      "intro": 3,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "control_lights",
        "optional": [
          1,
          2,
          4,
          7,
          8,
          9
        ],
        "description": "Set the lights state."
      }
    ],
    "state": [
      1,
      2,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "properties": [
      {
        "id": 1,
        "name": "front_exterior_light",
        "name_cased": "frontExteriorLight",
        "name_pretty": "Front exterior light",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          },
          {
            "id": 2,
            "name": "active_with_full_beam",
            "verb": "activate_with_full_beam"
          },
          {
            "id": 3,
            "name": "drl",
            "verb": "activate_drl",
            "name_pretty": "Daylight Running Lamps"
          },
          {
            "id": 4,
            "name": "automatic"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "active_with_full_beam",
            "description": "Front exterior lights are active with full beam"
          }
        ],
        "capabilityName": "lights"
      },
      {
        "name": "rear_exterior_light",
        "name_cased": "rearExteriorLight",
        "name_pretty": "Rear exterior light",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 2,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Rear exterior lights are active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "lights"
      },
      {
        "name": "ambient_light_colour",
        "name_cased": "ambientLightColour",
        "name_pretty": "Ambient light colour",
        "type": "custom",
        "size": 3,
        "items": [
          {
            "name": "red",
            "name_cased": "red",
            "type": "uinteger",
            "size": 1,
            "description": "The red component of RGB",
            "capabilityName": "lights"
          },
          {
            "name": "green",
            "name_cased": "green",
            "type": "uinteger",
            "size": 1,
            "description": "The green component of RGB",
            "capabilityName": "lights"
          },
          {
            "name": "blue",
            "name_cased": "blue",
            "type": "uinteger",
            "size": 1,
            "description": "The blue component of RGB",
            "capabilityName": "lights"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "ff0000",
            "values": {
              "red": 255,
              "green": 0,
              "blue": 0
            },
            "description": "Ambient light is red"
          }
        ],
        "customType": "rgb_colour",
        "capabilityName": "lights"
      },
      {
        "name": "reverse_light",
        "name_cased": "reverseLight",
        "name_pretty": "Reverse light",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 5,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Reverse light is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "lights"
      },
      {
        "name": "emergency_brake_light",
        "name_cased": "emergencyBrakeLight",
        "name_pretty": "Emergency brake light",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 6,
        "examples": [
          {
            "data_component": "00",
            "value": "inactive",
            "description": "Emergency brake light is inactive"
          }
        ],
        "customType": "active_state",
        "capabilityName": "lights"
      },
      {
        "name": "fog_lights",
        "name_cased": "fogLights",
        "name_pretty": "Fog lights",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location longitudinal",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "location_longitudinal",
            "capabilityName": "lights"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "lights"
          }
        ],
        "id": 7,
        "multiple": true,
        "name_singular": "fog_light",
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "location": "front",
              "state": "inactive"
            },
            "description": "Front fog lights are inactive"
          },
          {
            "data_component": "0101",
            "values": {
              "location": "rear",
              "state": "active"
            },
            "description": "Rear fog lights are active"
          }
        ],
        "customType": "light",
        "capabilityName": "lights"
      },
      {
        "name": "reading_lamps",
        "name_cased": "readingLamps",
        "name_pretty": "Reading lamps",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              }
            ],
            "customType": "location",
            "capabilityName": "lights"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "lights"
          }
        ],
        "id": 8,
        "multiple": true,
        "name_singular": "reading_lamp",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "state": "active"
            },
            "description": "Front left reading lamp is active"
          },
          {
            "data_component": "0101",
            "values": {
              "location": "front_right",
              "state": "active"
            },
            "description": "Front right reading lamp is active"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "state": "inactive"
            },
            "description": "Rear right reading lamp is inactive"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "state": "inactive"
            },
            "description": "Rear left reading lamp is inactive"
          }
        ],
        "customType": "reading_lamp",
        "capabilityName": "lights"
      },
      {
        "name": "interior_lights",
        "name_cased": "interiorLights",
        "name_pretty": "Interior lights",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Location longitudinal",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "location_longitudinal",
            "capabilityName": "lights"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "lights"
          }
        ],
        "id": 9,
        "multiple": true,
        "name_singular": "interior_light",
        "examples": [
          {
            "data_component": "0000",
            "values": {
              "location": "front",
              "state": "inactive"
            },
            "description": "Front interior lights are inactive"
          },
          {
            "data_component": "0101",
            "values": {
              "location": "rear",
              "state": "active"
            },
            "description": "Rear reading lights are active"
          }
        ],
        "customType": "light",
        "capabilityName": "lights"
      },
      {
        "id": 10,
        "name": "switch_position",
        "name_cased": "switchPosition",
        "name_pretty": "Switch position",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Position of the rotary light switch",
        "enum_values": [
          {
            "id": 0,
            "name": "automatic"
          },
          {
            "id": 1,
            "name": "dipped_headlights"
          },
          {
            "id": 2,
            "name": "parking_light_right"
          },
          {
            "id": 3,
            "name": "parking_light_left"
          },
          {
            "id": 4,
            "name": "sidelights"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "parking_light_right",
            "description": "Rotary light switch position parking light right"
          }
        ],
        "capabilityName": "lights"
      },
      {
        "id": 11,
        "name": "parking_light_status",
        "name_cased": "parkingLightStatus",
        "name_pretty": "Parking light status",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Indicates the status of the parking light.",
        "enum_values": [
          {
            "id": 0,
            "name": "off"
          },
          {
            "id": 1,
            "name": "left"
          },
          {
            "id": 2,
            "name": "right"
          },
          {
            "id": 3,
            "name": "both"
          }
        ],
        "examples": [
          {
            "data_component": "03",
            "value": "both",
            "description": "Both parking lights are on."
          }
        ],
        "capabilityName": "lights"
      }
    ]
  },
  "maintenance": {
    "name": "maintenance",
    "name_cased": "maintenance",
    "name_pretty": "Maintenance",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 52
    },
    "api": {
      "intro": 3,
      "update": 13
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "properties": [
      {
        "id": 1,
        "name": "days_to_next_service",
        "name_cased": "daysToNextService",
        "name_pretty": "Days to next service",
        "deprecated": {
          "new_name": "time_to_next_service",
          "reason": "removed the unit from the name"
        },
        "type": "unit.duration",
        "size": 10,
        "description": "Time until next servicing of the car",
        "examples": [
          {
            "data_component": "0703407f500000000000",
            "value": {
              "days": 501
            },
            "description": "501.0 days until next service"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 2,
        "name": "kilometers_to_next_service",
        "name_cased": "kilometersToNextService",
        "name_pretty": "Kilometers to next service",
        "deprecated": {
          "new_name": "distance_to_next_service",
          "reason": "removed the unit from the name"
        },
        "type": "unit.length",
        "size": 10,
        "description": "The distance until next servicing of the vehicle",
        "examples": [
          {
            "data_component": "120440acc20000000000",
            "value": {
              "kilometers": 3681
            },
            "description": "3'681km until next service"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 3,
        "name": "cbs_reports_count",
        "name_cased": "cbsReportsCount",
        "name_pretty": "CBS reports count",
        "type": "uinteger",
        "size": 1,
        "description": "The number of CBS reports",
        "examples": [
          {
            "data_component": "03",
            "value": 3,
            "description": "Condition Based Service reports count is 3"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 4,
        "name": "months_to_exhaust_inspection",
        "name_cased": "monthsToExhaustInspection",
        "name_pretty": "Months to exhaust inspection",
        "deprecated": {
          "new_name": "time_to_exhaust_inspection",
          "reason": "removed the unit from the name"
        },
        "type": "unit.duration",
        "size": 10,
        "description": "Time until exhaust inspection",
        "examples": [
          {
            "data_component": "07054014000000000000",
            "value": {
              "months": 5
            },
            "description": "5 months until exhaust inspection"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 5,
        "name": "teleservice_availability",
        "name_cased": "teleserviceAvailability",
        "name_pretty": "Teleservice availability",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "pending"
          },
          {
            "id": 1,
            "name": "idle"
          },
          {
            "id": 2,
            "name": "successful"
          },
          {
            "id": 3,
            "name": "error"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "successful",
            "description": "Teleservice is available"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 6,
        "name": "service_distance_threshold",
        "name_cased": "serviceDistanceThreshold",
        "name_pretty": "Service distance threshold",
        "type": "unit.length",
        "size": 10,
        "description": "Distance threshold for service",
        "examples": [
          {
            "data_component": "120440b3880000000000",
            "value": {
              "kilometers": 5000
            },
            "description": "Service distance threshold is 5000.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 7,
        "name": "service_time_threshold",
        "name_cased": "serviceTimeThreshold",
        "name_pretty": "Service time threshold",
        "type": "unit.duration",
        "size": 10,
        "description": "Time threshold for service",
        "examples": [
          {
            "data_component": "07044010000000000000",
            "value": {
              "weeks": 4
            },
            "description": "Service time threshold is 4 weeks"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 8,
        "name": "automatic_teleservice_call_date",
        "name_cased": "automaticTeleserviceCallDate",
        "name_pretty": "Automatic teleservice call date",
        "type": "timestamp",
        "size": 8,
        "description": "Automatic teleservice call date",
        "examples": [
          {
            "data_component": "000001674058f130",
            "value": "2018-11-23T11:33:50.000Z",
            "description": "Automatic teleservice call date is at 23 November 2018 at 11:33:50 UTC"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 9,
        "name": "teleservice_battery_call_date",
        "name_cased": "teleserviceBatteryCallDate",
        "name_pretty": "Teleservice battery call date",
        "type": "timestamp",
        "size": 8,
        "description": "Teleservice batter call date",
        "examples": [
          {
            "data_component": "000001674024c1d0",
            "value": "2018-11-23T10:36:50.000Z",
            "description": "Teleservice battery call date is at 23 November 2018 at 10:36:50 GMT"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 10,
        "name": "next_inspection_date",
        "name_cased": "nextInspectionDate",
        "name_pretty": "Next inspection date",
        "type": "timestamp",
        "size": 8,
        "description": "Next inspection date",
        "examples": [
          {
            "data_component": "00000166a15d20d8",
            "value": "2018-10-23T14:38:47.000Z",
            "description": "Next inspection date is at 23 October 2018 at 14:38:47 GMT"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "name": "condition_based_services",
        "name_cased": "conditionBasedServices",
        "name_pretty": "Condition based services",
        "type": "custom",
        "items": [
          {
            "name": "year",
            "name_cased": "year",
            "type": "uinteger",
            "size": 2,
            "description": "The year",
            "capabilityName": "maintenance"
          },
          {
            "name": "month",
            "name_cased": "month",
            "type": "uinteger",
            "size": 1,
            "description": "Value between 1 and 12",
            "capabilityName": "maintenance"
          },
          {
            "name": "id",
            "name_cased": "id",
            "name_pretty": "ID",
            "type": "uinteger",
            "size": 2,
            "description": "CBS identifier",
            "capabilityName": "maintenance"
          },
          {
            "name": "due_status",
            "name_cased": "dueStatus",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "ok"
              },
              {
                "id": 1,
                "name": "pending"
              },
              {
                "id": 2,
                "name": "overdue"
              }
            ],
            "capabilityName": "maintenance"
          },
          {
            "name": "text",
            "name_cased": "text",
            "type": "string",
            "description": "CBS text",
            "capabilityName": "maintenance"
          },
          {
            "name": "description",
            "name_cased": "description",
            "type": "string",
            "description": "Description",
            "capabilityName": "maintenance"
          }
        ],
        "id": 11,
        "multiple": true,
        "name_singular": "condition_based_service",
        "examples": [
          {
            "data_component": "07e305000300000b4272616b6520666c756964002c4e657874206368616e676520617420737065636966696564206461746520617420746865206c61746573742e",
            "values": {
              "year": 2019,
              "month": 5,
              "id": 3,
              "due_status": "ok",
              "text": "Brake fluid",
              "description": "Next change at specified date at the latest."
            },
            "description": "Next latest brake fluid change date is 2019 May in a CBS with ID 3 and status 'ok'"
          }
        ],
        "customType": "condition_based_service",
        "capabilityName": "maintenance"
      },
      {
        "id": 12,
        "name": "brake_fluid_change_date",
        "name_cased": "brakeFluidChangeDate",
        "name_pretty": "Brake fluid change date",
        "type": "timestamp",
        "size": 8,
        "description": "Brake fluid change date",
        "examples": [
          {
            "data_component": "000001677c63d280",
            "value": "2018-12-05T03:22:56.000Z",
            "description": "Brake fluid change date is at 5 December 2018 at 03:22:56 GMT"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 13,
        "name": "time_to_next_service",
        "name_cased": "timeToNextService",
        "name_pretty": "Time to next service",
        "type": "unit.duration",
        "size": 10,
        "description": "Time until next servicing of the vehicle",
        "examples": [
          {
            "data_component": "0703407f500000000000",
            "value": {
              "days": 501
            },
            "description": "501.0 days until next service"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 14,
        "name": "distance_to_next_service",
        "name_cased": "distanceToNextService",
        "name_pretty": "Distance to next service",
        "type": "unit.length",
        "size": 10,
        "description": "The distance until next servicing of the vehicle",
        "examples": [
          {
            "data_component": "120440acc20000000000",
            "value": {
              "kilometers": 3681
            },
            "description": "3'681km until next service"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 15,
        "name": "time_to_exhaust_inspection",
        "name_cased": "timeToExhaustInspection",
        "name_pretty": "Time to exhaust inspection",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Time until exhaust inspection",
        "examples": [
          {
            "data_component": "07054014000000000000",
            "value": {
              "months": 5
            },
            "description": "5 months until exhaust inspection"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 16,
        "name": "last_ecall",
        "name_cased": "lastECall",
        "name_pretty": "Last eCall",
        "added": 12,
        "type": "timestamp",
        "size": 8,
        "description": "Date-time of the last eCall",
        "examples": [
          {
            "data_component": "000001677c63d280",
            "value": "2018-12-05T03:22:56.000Z",
            "description": "Last eCall happened at 5 December 2018 at 03:22:56 GMT"
          }
        ],
        "capabilityName": "maintenance"
      },
      {
        "id": 17,
        "name": "distance_to_next_oil_service",
        "name_cased": "distanceToNextOilService",
        "name_pretty": "Distance to next oil service",
        "added": 13,
        "type": "unit.length",
        "size": 10,
        "description": "Indicates the remaining distance until the next oil service; if this limit was exceeded, this value indicates the distance that has been driven since then.",
        "examples": [
          {
            "data_component": "120440806ccccccccccd",
            "value": {
              "kilometers": 525.6
            },
            "description": "Distance to the next oil service is 525.6km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "maintenance"
      },
      {
        "id": 18,
        "name": "time_to_next_oil_service",
        "name_cased": "timeToNextOilService",
        "name_pretty": "Time to next oil service",
        "added": 13,
        "type": "unit.duration",
        "size": 10,
        "description": "Indicates the time remaining until the next oil service; if this limit was exceeded, this value indicates the time that has passed since then.",
        "examples": [
          {
            "data_component": "07034050b33333333333",
            "value": {
              "days": 66.8
            },
            "description": "Time to the next oil service is 66.8 days"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "maintenance"
      }
    ]
  },
  "messaging": {
    "name": "messaging",
    "name_cased": "messaging",
    "name_pretty": "Messaging",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 55
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "setters": [
      {
        "name": "message_received",
        "mandatory": [
          1
        ],
        "optional": [
          2
        ],
        "description": "Notify the vehicle that a message has been received. Depending on the vehicle system, it will display or read it loud to the driver."
      }
    ],
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "id": 1,
        "name": "text",
        "name_cased": "text",
        "name_pretty": "Text",
        "type": "string",
        "description": "The text",
        "examples": [
          {
            "data_component": "486579206d6f6d21",
            "value": "Hey mom!",
            "description": "Message text says 'Hey mom!'"
          }
        ],
        "capabilityName": "messaging"
      },
      {
        "id": 2,
        "name": "handle",
        "name_cased": "handle",
        "name_pretty": "Handle",
        "type": "string",
        "description": "The optional handle of message",
        "examples": [
          {
            "data_component": "457070",
            "value": "Epp",
            "description": "Name of the sender/receiver is 'Epp'"
          }
        ],
        "capabilityName": "messaging"
      }
    ]
  },
  "mobile": {
    "name": "mobile",
    "name_cased": "mobile",
    "name_pretty": "Mobile",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 102
    },
    "api": {
      "intro": 8,
      "update": 11
    },
    "getters": {},
    "state": [
      1
    ],
    "properties": [
      {
        "name": "connection",
        "name_cased": "connection",
        "name_pretty": "Connection",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "disconnected"
          },
          {
            "id": 1,
            "name": "connected"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "connected",
            "description": "A mobile phone is connected"
          }
        ],
        "customType": "connection_state",
        "capabilityName": "mobile"
      }
    ]
  },
  "multi_command": {
    "name": "multi_command",
    "name_cased": "multiCommand",
    "name_pretty": "Multi Command",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 19
    },
    "api": {
      "intro": 8,
      "update": 11
    },
    "setters": [
      {
        "name": "multi_command",
        "mandatory": [
          2
        ],
        "description": "Send multiple commands at once."
      }
    ],
    "state": [
      1
    ],
    "properties": [
      {
        "name": "multi_states",
        "name_cased": "multiStates",
        "name_pretty": "Multi-states",
        "type": "bytes",
        "description": "The incoming states",
        "id": 1,
        "multiple": true,
        "name_singular": "multi_state",
        "examples": [
          {
            "data_component": "0c0020010600040100010004000501000200010400050100020201a2000b010008000001598938e788",
            "values": {
              "doors": {
                "locks_state": "unlocked",
                "positions": [
                  {
                    "location": "front_left",
                    "position": "open"
                  },
                  {
                    "location": "rear_right",
                    "position": "open"
                  }
                ],
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Doors capability - front left and rear right door is open while locks are unlocked, recorded at 10. January 2017 at 16:32:05 GMT"
          },
          {
            "data_component": "0c0023010b0004010001010c00040100010018000d01000a140240418000000000001c000d01000a12044081580000000000a2000b010008000001598938e788",
            "values": {
              "charging": {
                "charge_port_state": "open",
                "charge_mode": "immediate",
                "charging_rate": {
                  "kilowatts": 35
                },
                "max_range": {
                  "kilometers": 555
                },
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Charging capability - charging port is open, charge mode is immediate, charging rate is 35.0kW and max range is 555.0km, recorded at 10. January 2017 at 16:32:05 GMT"
          }
        ],
        "customType": "capability_state",
        "capabilityName": "multiCommand"
      },
      {
        "name": "multi_commands",
        "name_cased": "multiCommands",
        "name_pretty": "Multi-commands",
        "type": "bytes",
        "description": "The outgoing commands",
        "id": 2,
        "multiple": true,
        "name_singular": "multi_command",
        "examples": [
          {
            "data_component": "0c00200106000401000101",
            "values": {
              "doors": {
                "locks_state": "locked"
              }
            },
            "description": "Lock inside door locks"
          },
          {
            "data_component": "0c00350101000401000100",
            "values": {
              "ignition": {
                "status": "off"
              }
            },
            "description": "Turn ignition off"
          }
        ],
        "customType": "capability_state",
        "capabilityName": "multiCommand"
      }
    ]
  },
  "navi_destination": {
    "name": "navi_destination",
    "name_cased": "naviDestination",
    "name_pretty": "Navi Destination",
    "category": "poi",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 49
    },
    "api": {
      "intro": 4,
      "update": 12
    },
    "getters": {
      "name": "get_navi_destination"
    },
    "setters": [
      {
        "name": "set_navi_destination",
        "mandatory": [
          1
        ],
        "optional": [
          2
        ],
        "description": "Set the navigation destination. This will be forwarded to the navigation system of the vehicle."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "properties": [
      {
        "name": "coordinates",
        "name_cased": "coordinates",
        "name_pretty": "Coordinates",
        "type": "custom",
        "size": 16,
        "items": [
          {
            "name": "latitude",
            "name_cased": "latitude",
            "validation": "min:-90|max:90",
            "type": "double",
            "size": 8,
            "description": "Latitude",
            "capabilityName": "naviDestination"
          },
          {
            "name": "longitude",
            "name_cased": "longitude",
            "validation": "min:-180|max:180",
            "type": "double",
            "size": 8,
            "description": "Longitude",
            "capabilityName": "naviDestination"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "404a428f9f44d445402acf562174c4ce",
            "values": {
              "latitude": 52.520008,
              "longitude": 13.404954
            },
            "description": "Coordinates are 52.520008:13.404954"
          }
        ],
        "customType": "coordinates",
        "capabilityName": "naviDestination"
      },
      {
        "id": 2,
        "name": "destination_name",
        "name_cased": "destinationName",
        "name_pretty": "Destination name",
        "type": "string",
        "description": "Destination name",
        "examples": [
          {
            "data_component": "4265726c696e",
            "value": "Berlin",
            "description": "Destination name is 'Berlin'"
          }
        ],
        "capabilityName": "naviDestination"
      },
      {
        "id": 3,
        "name": "data_slots_free",
        "name_cased": "dataSlotsFree",
        "name_pretty": "Data slots free",
        "type": "uinteger",
        "size": 1,
        "description": "Remaining number of POI data slots available.",
        "examples": [
          {
            "data_component": "0e",
            "value": 14,
            "description": "14 available POI data slots"
          }
        ],
        "capabilityName": "naviDestination"
      },
      {
        "id": 4,
        "name": "data_slots_max",
        "name_cased": "dataSlotsMax",
        "name_pretty": "Data slots max",
        "type": "uinteger",
        "size": 1,
        "description": "Maximum number of POI data slots.",
        "examples": [
          {
            "data_component": "1e",
            "value": 30,
            "description": "Maximum number of POI data slots is 30"
          }
        ],
        "capabilityName": "naviDestination"
      },
      {
        "id": 5,
        "name": "arrival_duration",
        "name_cased": "arrivalDuration",
        "name_pretty": "Arrival duration",
        "type": "unit.duration",
        "size": 10,
        "description": "Remaining time until reaching the destination.",
        "examples": [
          {
            "data_component": "07024004cccccccccccd",
            "value": {
              "hours": 2.6
            },
            "description": "Remaining time to destination is 2.6h"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "naviDestination"
      },
      {
        "id": 6,
        "name": "distance_to_destination",
        "name_cased": "distanceToDestination",
        "name_pretty": "Distance to destination",
        "type": "unit.length",
        "size": 10,
        "description": "Remaining distance to reach the destination.",
        "examples": [
          {
            "data_component": "12044094e40000000000",
            "value": {
              "kilometers": 1337
            },
            "description": "Remaining distance to destination is 1337.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "naviDestination"
      }
    ]
  },
  "notifications": {
    "name": "notifications",
    "name_cased": "notifications",
    "name_pretty": "Notifications",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 56
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "setters": [
      {
        "name": "notification",
        "mandatory": [
          1
        ],
        "optional": [
          2
        ],
        "description": "Send a notification to the vehicle or smart device. The notification can have action items that the user can respond with."
      },
      {
        "name": "action",
        "mandatory": [
          3
        ],
        "description": "Activate/choose a notification action."
      },
      {
        "name": "clear_notification",
        "constants": [
          {
            "property_id": 4,
            "value": [
              0
            ]
          }
        ],
        "description": "Clear the Notification in either the vehicle or device that has previously been sent, ignoring driver feedback."
      }
    ],
    "state": [
      1,
      2,
      3,
      4
    ],
    "properties": [
      {
        "id": 1,
        "name": "text",
        "name_cased": "text",
        "name_pretty": "Text",
        "type": "string",
        "description": "Text for the notification",
        "examples": [
          {
            "data_component": "4f70656e20476172616765",
            "value": "Open Garage",
            "description": "Notification text says 'Open Garage'"
          }
        ],
        "capabilityName": "notifications"
      },
      {
        "name": "action_items",
        "name_cased": "actionItems",
        "name_pretty": "Action items",
        "type": "custom",
        "items": [
          {
            "name": "id",
            "name_cased": "id",
            "name_pretty": "ID",
            "type": "uinteger",
            "size": 1,
            "description": "Action identifier",
            "capabilityName": "notifications"
          },
          {
            "name": "name",
            "name_cased": "name",
            "type": "string",
            "description": "Name of the action",
            "capabilityName": "notifications"
          }
        ],
        "id": 2,
        "multiple": true,
        "name_singular": "action_item",
        "examples": [
          {
            "data_component": "1b00044f70656e",
            "values": {
              "id": 27,
              "name": "Open"
            },
            "description": "Notification action named 'Open' with an ID 27"
          },
          {
            "data_component": "1c000643616e63656c",
            "values": {
              "id": 28,
              "name": "Cancel"
            },
            "description": "Notification action named 'Cancel' with an ID 28"
          }
        ],
        "customType": "action_item",
        "capabilityName": "notifications"
      },
      {
        "id": 3,
        "name": "activated_action",
        "name_cased": "activatedAction",
        "name_pretty": "Activate action",
        "type": "uinteger",
        "size": 1,
        "description": "Identifier of the activated action",
        "examples": [
          {
            "data_component": "1b",
            "value": 27,
            "description": "Activated action with ID 27"
          }
        ],
        "capabilityName": "notifications"
      },
      {
        "id": 4,
        "name": "clear",
        "name_cased": "clear",
        "name_pretty": "Clear",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "clear"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "clear",
            "description": "Clear notifications"
          }
        ],
        "capabilityName": "notifications"
      }
    ]
  },
  "offroad": {
    "name": "offroad",
    "name_cased": "offroad",
    "name_pretty": "Offroad",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 82
    },
    "api": {
      "intro": 5,
      "update": 12
    },
    "getters": {},
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "id": 1,
        "name": "route_incline",
        "name_cased": "routeIncline",
        "name_pretty": "Route incline",
        "type": "unit.angle",
        "size": 10,
        "description": "The route elevation incline",
        "examples": [
          {
            "data_component": "02004024333333333333",
            "value": {
              "degrees": 10.1
            },
            "description": "Route incline is 10°"
          }
        ],
        "unit": {
          "name": "angle",
          "id": 2,
          "unit_types": [
            {
              "name": "degrees",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "radians",
              "id": 3,
              "conversion_linear": 57.29578
            },
            {
              "name": "revolutions",
              "id": 5,
              "conversion_linear": 360
            }
          ]
        },
        "capabilityName": "offroad"
      },
      {
        "name": "wheel_suspension",
        "name_cased": "wheelSuspension",
        "name_pretty": "Wheel suspension",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The wheel suspension level percentage, whereas 0.0 is no suspension and 1.0 maximum suspension",
        "id": 2,
        "examples": [
          {
            "data_component": "3fe0000000000000",
            "value": 0.5,
            "description": "Wheel suspension level is 50%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "offroad"
      }
    ]
  },
  "parking_brake": {
    "name": "parking_brake",
    "name_cased": "parkingBrake",
    "name_pretty": "Parking Brake",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 88
    },
    "api": {
      "intro": 5,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "set_parking_brake",
        "mandatory": [
          1
        ],
        "description": "Turn on or off the parking brake."
      }
    ],
    "state": [
      1
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Parking brake is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "parkingBrake"
      }
    ]
  },
  "parking_ticket": {
    "name": "parking_ticket",
    "name_cased": "parkingTicket",
    "name_pretty": "Parking Ticket",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 71
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "getters": {
      "name": "get_parking_ticket"
    },
    "setters": [
      {
        "name": "start_parking",
        "mandatory": [
          3,
          4
        ],
        "optional": [
          2,
          5
        ],
        "constants": [
          {
            "property_id": 1,
            "value": [
              1
            ]
          }
        ],
        "description": "Start parking. This clears the last parking ticket information and starts a new one. The end time can be left unset depending on the operator."
      },
      {
        "name": "end_parking",
        "constants": [
          {
            "property_id": 1,
            "value": [
              0
            ]
          }
        ],
        "description": "End parking. This updates the parking ticket information. If no end date was set, the current time is set as the ending time."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5
    ],
    "properties": [
      {
        "id": 1,
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "ended",
            "verb": "end"
          },
          {
            "id": 1,
            "name": "started",
            "verb": "start"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "ended",
            "description": "Parking ticket has ended"
          }
        ],
        "capabilityName": "parkingTicket"
      },
      {
        "id": 2,
        "name": "operator_name",
        "name_cased": "operatorName",
        "name_pretty": "Operator name",
        "type": "string",
        "description": "Operator name",
        "examples": [
          {
            "data_component": "4265726c696e205061726b696e67",
            "value": "Berlin Parking",
            "description": "Operator name is 'Berlin Parking'"
          }
        ],
        "capabilityName": "parkingTicket"
      },
      {
        "id": 3,
        "name": "operator_ticket_id",
        "name_cased": "operatorTicketID",
        "name_pretty": "Operator ticket ID",
        "type": "string",
        "description": "Operator ticket ID",
        "examples": [
          {
            "data_component": "36343839414234323333",
            "value": "6489AB4233",
            "description": "Operator ticket ID is '6489AB4233'"
          }
        ],
        "capabilityName": "parkingTicket"
      },
      {
        "id": 4,
        "name": "ticket_start_time",
        "name_cased": "ticketStartTime",
        "name_pretty": "Ticket start time",
        "type": "timestamp",
        "size": 8,
        "description": "Parking ticket start time",
        "examples": [
          {
            "data_component": "0000015989dfca30",
            "value": "2017-01-10T19:34:22.000Z",
            "description": "Parking ticket started at 10 January 2017 at 19:34:22 GMT"
          }
        ],
        "capabilityName": "parkingTicket"
      },
      {
        "id": 5,
        "name": "ticket_end_time",
        "name_cased": "ticketEndTime",
        "name_pretty": "Ticket end time",
        "type": "timestamp",
        "size": 8,
        "description": "Parking ticket end time",
        "examples": [
          {
            "data_component": "0000016dab1a8528",
            "value": "2019-10-08T11:21:45.000Z",
            "description": "Parking ticket ended at 8. October 2019 at 11:21:45 GMT"
          }
        ],
        "capabilityName": "parkingTicket"
      }
    ]
  },
  "power_takeoff": {
    "name": "power_takeoff",
    "name_cased": "powerTakeoff",
    "name_pretty": "Power Take-Off",
    "category": "heavy_duty",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 101
    },
    "api": {
      "intro": 7,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "activate_deactivate_power_takeoff",
        "mandatory": [
          1
        ],
        "description": "Activate or deactivate power take-off."
      }
    ],
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Power take-off is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "powerTakeoff"
      },
      {
        "id": 2,
        "name": "engaged",
        "name_cased": "engaged",
        "name_pretty": "Engaged",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "not_engaged"
          },
          {
            "id": 1,
            "name": "engaged"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "engaged",
            "description": "Power take-off is engaged"
          }
        ],
        "capabilityName": "powerTakeoff"
      }
    ]
  },
  "race": {
    "name": "race",
    "name_cased": "race",
    "name_pretty": "Race",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 87
    },
    "api": {
      "intro": 5,
      "update": 12
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "properties": [
      {
        "name": "accelerations",
        "name_cased": "accelerations",
        "name_pretty": "Accelerations",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "direction",
            "name_cased": "direction",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "longitudinal"
              },
              {
                "id": 1,
                "name": "lateral"
              },
              {
                "id": 2,
                "name": "front_lateral"
              },
              {
                "id": 3,
                "name": "rear_lateral"
              }
            ],
            "capabilityName": "race"
          },
          {
            "name": "acceleration",
            "name_cased": "acceleration",
            "name_pretty": "Acceleration",
            "type": "unit.acceleration",
            "size": 10,
            "description": "The accelaration",
            "unit": {
              "name": "acceleration",
              "id": 1,
              "unit_types": [
                {
                  "name": "meters_per_second_squared",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "gravity",
                  "id": 1,
                  "conversion_linear": 9.81
                }
              ]
            },
            "capabilityName": "race"
          }
        ],
        "id": 1,
        "name_singular": "acceleration",
        "multiple": true,
        "examples": [
          {
            "data_component": "0001013feba5e353f7ced9",
            "values": {
              "direction": "longitudinal",
              "acceleration": {
                "gravity": 0.864
              }
            },
            "description": "Longitudinal acceleration is 0.864g"
          },
          {
            "data_component": "010101bfe8189374bc6a7f",
            "values": {
              "direction": "lateral",
              "acceleration": {
                "gravity": -0.753
              }
            },
            "description": "Lateral acceleration is -0.753g"
          },
          {
            "data_component": "0201013fe8189374bc6a7f",
            "values": {
              "direction": "front_lateral",
              "acceleration": {
                "gravity": 0.753
              }
            },
            "description": "Front lateral acceleration is 0.753g"
          },
          {
            "data_component": "030101bfeba5e353f7ced9",
            "values": {
              "direction": "rear_lateral",
              "acceleration": {
                "gravity": -0.864
              }
            },
            "description": "Rear lateral acceleration is -0.864g"
          }
        ],
        "customType": "acceleration",
        "capabilityName": "race"
      },
      {
        "name": "understeering",
        "name_cased": "understeering",
        "name_pretty": "Understeering",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The understeering percentage between 0.0-1.0 whereas up to 0.2 (20%) is considered OK, up to 0.3 (30%) marginal, over 30% critical",
        "id": 2,
        "examples": [
          {
            "data_component": "3fc851eb851eb852",
            "value": 0.19,
            "description": "Understeering is at 19%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "race"
      },
      {
        "name": "oversteering",
        "name_cased": "oversteering",
        "name_pretty": "Oversteering",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The oversteering percentage between 0.0-1.0 whereas up to 0.2 (20%) is considered OK, up to 30% marginal, over 30% critical",
        "id": 3,
        "examples": [
          {
            "data_component": "3fa999999999999a",
            "value": 0.05,
            "description": "Oversteering is at 5%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "race"
      },
      {
        "name": "gas_pedal_position",
        "name_cased": "gasPedalPosition",
        "name_pretty": "Gas pedal position",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The gas pedal position between 0.0-1.0, whereas 1.0 (100%) is full throttle",
        "id": 4,
        "examples": [
          {
            "data_component": "3fef5c28f5c28f5c",
            "value": 0.98,
            "description": "Gas pedal position is at 98%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "race"
      },
      {
        "id": 5,
        "name": "steering_angle",
        "name_cased": "steeringAngle",
        "name_pretty": "Steering angle",
        "type": "unit.angle",
        "size": 10,
        "description": "The steering angle, whereas 0.0 is straight ahead, positive number to the right and negative number to the left",
        "examples": [
          {
            "data_component": "02004024000000000000",
            "value": {
              "degrees": 10
            },
            "description": "Steering angle is 10° to right"
          }
        ],
        "unit": {
          "name": "angle",
          "id": 2,
          "unit_types": [
            {
              "name": "degrees",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "radians",
              "id": 3,
              "conversion_linear": 57.29578
            },
            {
              "name": "revolutions",
              "id": 5,
              "conversion_linear": 360
            }
          ]
        },
        "capabilityName": "race"
      },
      {
        "id": 6,
        "name": "brake_pressure",
        "name_cased": "brakePressure",
        "name_pretty": "Brake pressure",
        "type": "unit.pressure",
        "size": 10,
        "description": "Brake pressure",
        "examples": [
          {
            "data_component": "15064034000000000000",
            "value": {
              "bars": 20
            },
            "description": "Brake pressure is 20.0bar"
          }
        ],
        "unit": {
          "name": "pressure",
          "id": 21,
          "unit_types": [
            {
              "name": "pascals",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilopascals",
              "id": 3,
              "conversion_linear": 1000
            },
            {
              "name": "inches_of_mercury",
              "id": 5,
              "conversion_linear": 3386.39
            },
            {
              "name": "bars",
              "id": 6,
              "conversion_linear": 100000
            },
            {
              "name": "millibars",
              "id": 7,
              "conversion_linear": 100
            },
            {
              "name": "millimeters_of_mercury",
              "id": 8,
              "conversion_linear": 133.322
            },
            {
              "name": "pounds_force_per_square_inch",
              "id": 9,
              "conversion_linear": 6894.76
            }
          ]
        },
        "capabilityName": "race"
      },
      {
        "id": 7,
        "name": "yaw_rate",
        "name_cased": "yawRate",
        "name_pretty": "Yaw rate",
        "type": "unit.angular_velocity",
        "size": 10,
        "description": "Yaw turning rate",
        "examples": [
          {
            "data_component": "0301401aa3d70a3d70a4",
            "value": {
              "degrees_per_second": 6.66
            },
            "description": "Yaw rate is 6.66°/s"
          }
        ],
        "unit": {
          "name": "angular_velocity",
          "id": 3,
          "unit_types": [
            {
              "name": "revolutions_per_minute",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "degrees_per_second",
              "id": 1,
              "conversion_linear": 6
            },
            {
              "name": "radians_per_second",
              "id": 2,
              "conversion_linear": 9.549296585514
            }
          ]
        },
        "capabilityName": "race"
      },
      {
        "id": 8,
        "name": "rear_suspension_steering",
        "name_cased": "rearSuspensionSteering",
        "name_pretty": "Rear suspension steering",
        "type": "unit.angle",
        "size": 10,
        "description": "Rear suspension steering",
        "examples": [
          {
            "data_component": "0200400a666666666666",
            "value": {
              "degrees": 3.3
            },
            "description": "Rear suspension steering is +3°"
          }
        ],
        "unit": {
          "name": "angle",
          "id": 2,
          "unit_types": [
            {
              "name": "degrees",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "radians",
              "id": 3,
              "conversion_linear": 57.29578
            },
            {
              "name": "revolutions",
              "id": 5,
              "conversion_linear": 360
            }
          ]
        },
        "capabilityName": "race"
      },
      {
        "name": "electronic_stability_program",
        "name_cased": "electronicStabilityProgram",
        "name_pretty": "Electronic stability program",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 9,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "ESP is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "race"
      },
      {
        "name": "brake_torque_vectorings",
        "name_cased": "brakeTorqueVectorings",
        "name_pretty": "Brake torque vectorings",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "axle",
            "name_cased": "axle",
            "name_pretty": "Axle",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front"
              },
              {
                "id": 1,
                "name": "rear"
              }
            ],
            "customType": "axle",
            "capabilityName": "race"
          },
          {
            "name": "state",
            "name_cased": "state",
            "name_pretty": "Active state",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "inactive",
                "verb": "deactivate"
              },
              {
                "id": 1,
                "name": "active",
                "verb": "activate"
              }
            ],
            "customType": "active_state",
            "capabilityName": "race"
          }
        ],
        "id": 10,
        "multiple": true,
        "name_singular": "brake_torque_vectoring",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "axle": "front",
              "state": "active"
            },
            "description": "Front brake torque vectoring is active"
          },
          {
            "data_component": "0100",
            "values": {
              "axle": "rear",
              "state": "inactive"
            },
            "description": "Rear brake torque vectoring is inactive"
          }
        ],
        "customType": "brake_torque_vectoring",
        "capabilityName": "race"
      },
      {
        "id": 11,
        "name": "gear_mode",
        "name_cased": "gearMode",
        "name_pretty": "Gear mode",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "manual"
          },
          {
            "id": 1,
            "name": "park"
          },
          {
            "id": 2,
            "name": "reverse"
          },
          {
            "id": 3,
            "name": "neutral"
          },
          {
            "id": 4,
            "name": "drive"
          },
          {
            "id": 5,
            "name": "low_gear"
          },
          {
            "id": 6,
            "name": "sport"
          }
        ],
        "examples": [
          {
            "data_component": "04",
            "value": "drive",
            "description": "Gear is in drive"
          }
        ],
        "capabilityName": "race"
      },
      {
        "id": 12,
        "name": "selected_gear",
        "name_cased": "selectedGear",
        "name_pretty": "Selected gear",
        "type": "integer",
        "size": 1,
        "description": "The selected gear value, if any",
        "examples": [
          {
            "data_component": "04",
            "value": 4,
            "description": "4th gear is selected"
          }
        ],
        "capabilityName": "race"
      },
      {
        "name": "brake_pedal_position",
        "name_cased": "brakePedalPosition",
        "name_pretty": "Brake pedal position",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "The brake pedal position between 0.0-1.0, wheras 1.0 (100%) is full brakes",
        "id": 13,
        "examples": [
          {
            "data_component": "3fbeb851eb851eb8",
            "value": 0.12,
            "description": "Brake pedal position is at 12%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "race"
      },
      {
        "name": "brake_pedal_switch",
        "name_cased": "brakePedalSwitch",
        "name_pretty": "Brake pedal switch",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 14,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Brake pedal switch is active, brake lights active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "race"
      },
      {
        "name": "clutch_pedal_switch",
        "name_cased": "clutchPedalSwitch",
        "name_pretty": "Clutch pedal switch",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 15,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Clutch pedal switch is active, clutch is fully depressed"
          }
        ],
        "customType": "active_state",
        "capabilityName": "race"
      },
      {
        "name": "accelerator_pedal_idle_switch",
        "name_cased": "acceleratorPedalIdleSwitch",
        "name_pretty": "Accelerator pedal idle switch",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 16,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Accelerator pedal idle switch is active, pedal released"
          }
        ],
        "customType": "active_state",
        "capabilityName": "race"
      },
      {
        "name": "accelerator_pedal_kickdown_switch",
        "name_cased": "acceleratorPedalKickdownSwitch",
        "name_pretty": "Accelerator pedal kickdown switch",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 17,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Accelerator pedal kickdown switch is active, pedal fully depressed"
          }
        ],
        "customType": "active_state",
        "capabilityName": "race"
      },
      {
        "id": 18,
        "name": "vehicle_moving",
        "name_cased": "vehicleMoving",
        "name_pretty": "Vehicle moving",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "not_moving"
          },
          {
            "id": 1,
            "name": "moving"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "moving",
            "description": "Vehicle is moving"
          }
        ],
        "capabilityName": "race"
      }
    ]
  },
  "remote_control": {
    "name": "remote_control",
    "name_cased": "remoteControl",
    "name_pretty": "Remote Control",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 39
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "disabled_in": [
      "web"
    ],
    "getters": {
      "name": "get_control_state",
      "skip_properties_getter": true
    },
    "setters": [
      {
        "name": "control_command",
        "optional": [
          2,
          3
        ],
        "description": "To be sent every time the controls for the vehicle wants to be changed or once a second if the controls remain the same. If the vehicle does not receive the command every second it will stop the control mode."
      },
      {
        "name": "start_control",
        "constants": [
          {
            "property_id": 1,
            "value": [
              2
            ]
          }
        ],
        "description": "Attempt to start the control mode of the vehicle."
      },
      {
        "name": "stop_control",
        "constants": [
          {
            "property_id": 1,
            "value": [
              5
            ]
          }
        ],
        "description": "Attempt to stop the control mode of the vehicle."
      }
    ],
    "state": [
      1,
      2
    ],
    "properties": [
      {
        "id": 1,
        "name": "control_mode",
        "name_cased": "controlMode",
        "name_pretty": "Control mode",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unavailable"
          },
          {
            "id": 1,
            "name": "available"
          },
          {
            "id": 2,
            "name": "started",
            "verb": "start"
          },
          {
            "id": 3,
            "name": "failed_to_start"
          },
          {
            "id": 4,
            "name": "aborted",
            "verb": "abort"
          },
          {
            "id": 5,
            "name": "ended",
            "verb": "stop"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "started",
            "description": "Remote control is started"
          }
        ],
        "capabilityName": "remoteControl"
      },
      {
        "id": 2,
        "name": "angle",
        "name_cased": "angle",
        "name_pretty": "Angle",
        "type": "unit.angle",
        "size": 10,
        "description": "Wheel base angle",
        "examples": [
          {
            "data_component": "02004049000000000000",
            "value": {
              "degrees": 50
            },
            "description": "Angle is 50.0°"
          }
        ],
        "unit": {
          "name": "angle",
          "id": 2,
          "unit_types": [
            {
              "name": "degrees",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "radians",
              "id": 3,
              "conversion_linear": 57.29578
            },
            {
              "name": "revolutions",
              "id": 5,
              "conversion_linear": 360
            }
          ]
        },
        "capabilityName": "remoteControl"
      },
      {
        "id": 3,
        "name": "speed",
        "name_cased": "speed",
        "name_pretty": "Speed",
        "type": "unit.speed",
        "size": 10,
        "description": "Target speed",
        "examples": [
          {
            "data_component": "16014014000000000000",
            "value": {
              "kilometers_per_hour": 5
            },
            "description": "Speed is 5.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "remoteControl"
      }
    ]
  },
  "rooftop_control": {
    "name": "rooftop_control",
    "name_cased": "rooftopControl",
    "name_pretty": "Rooftop Control",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 37
    },
    "api": {
      "intro": 3,
      "update": 12
    },
    "getters": {
      "name": "get_rooftop_state"
    },
    "setters": [
      {
        "name": "control_rooftop",
        "optional": [
          1,
          2,
          3,
          4,
          5
        ],
        "description": "Set the rooftop state."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "properties": [
      {
        "name": "dimming",
        "name_cased": "dimming",
        "name_pretty": "Dimming",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "1.0 (100%) is opaque, 0.0 (0%) is transparent",
        "id": 1,
        "examples": [
          {
            "data_component": "3ff0000000000000",
            "value": 1,
            "description": "Rooftop is opaque (100%)"
          }
        ],
        "customType": "percentage",
        "capabilityName": "rooftopControl"
      },
      {
        "name": "position",
        "name_cased": "position",
        "name_pretty": "Position",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "1.0 (100%) is fully open, 0.0 (0%) is closed",
        "id": 2,
        "examples": [
          {
            "data_component": "3fe0000000000000",
            "value": 0.5,
            "description": "Rooftop is half-open (50%)"
          }
        ],
        "customType": "percentage",
        "capabilityName": "rooftopControl"
      },
      {
        "id": 3,
        "name": "convertible_roof_state",
        "name_cased": "convertibleRoofState",
        "name_pretty": "Convertible roof state",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "open"
          },
          {
            "id": 2,
            "name": "emergency_locked",
            "disabled_in_setter": true
          },
          {
            "id": 3,
            "name": "closed_secured",
            "disabled_in_setter": true
          },
          {
            "id": 4,
            "name": "open_secured",
            "disabled_in_setter": true
          },
          {
            "id": 5,
            "name": "hard_top_mounted",
            "disabled_in_setter": true
          },
          {
            "id": 6,
            "name": "intermediate_position",
            "disabled_in_setter": true
          },
          {
            "id": 7,
            "name": "loading_position",
            "disabled_in_setter": true
          },
          {
            "id": 8,
            "name": "loading_position_immediate",
            "disabled_in_setter": true
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "open",
            "description": "Convertible roof is open"
          }
        ],
        "capabilityName": "rooftopControl"
      },
      {
        "id": 4,
        "name": "sunroof_tilt_state",
        "name_cased": "sunroofTiltState",
        "name_pretty": "Sunroof tilt state",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "tilted"
          },
          {
            "id": 2,
            "name": "half_tilted"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "half_tilted",
            "description": "Sunroof is half-tilted"
          }
        ],
        "capabilityName": "rooftopControl"
      },
      {
        "id": 5,
        "name": "sunroof_state",
        "name_cased": "sunroofState",
        "name_pretty": "Sunroof state",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "open"
          },
          {
            "id": 2,
            "name": "intermediate"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "open",
            "description": "Sunroof is open"
          }
        ],
        "capabilityName": "rooftopControl"
      },
      {
        "id": 6,
        "name": "sunroof_rain_event",
        "name_cased": "sunroofRainEvent",
        "name_pretty": "Sunroof rain event",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Sunroof event happened in case of rain",
        "enum_values": [
          {
            "id": 0,
            "name": "no_event"
          },
          {
            "id": 1,
            "name": "in_stroke_position_because_of_rain"
          },
          {
            "id": 2,
            "name": "automatically_in_stroke_position"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "no_event",
            "description": "Sunroof had no rain event"
          }
        ],
        "capabilityName": "rooftopControl"
      }
    ]
  },
  "seats": {
    "name": "seats",
    "name_cased": "seats",
    "name_pretty": "Seats",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 86
    },
    "api": {
      "intro": 5,
      "update": 11
    },
    "getters": {},
    "state": [
      2,
      3
    ],
    "properties": [
      {
        "name": "persons_detected",
        "name_cased": "personsDetected",
        "name_pretty": "Persons detected",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Seat location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_center"
              }
            ],
            "customType": "seat_location",
            "capabilityName": "seats"
          },
          {
            "name": "detected",
            "name_cased": "detected",
            "name_pretty": "Detected",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "not_detected"
              },
              {
                "id": 1,
                "name": "detected"
              }
            ],
            "customType": "detected",
            "capabilityName": "seats"
          }
        ],
        "id": 2,
        "multiple": true,
        "name_singular": "person_detected",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "detected": "detected"
            },
            "description": "Person detected on the front-left seat"
          },
          {
            "data_component": "0100",
            "values": {
              "location": "front_right",
              "detected": "not_detected"
            },
            "description": "No person detected on the front-right seat"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "detected": "not_detected"
            },
            "description": "No person detected on the rear-right seat"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "detected": "not_detected"
            },
            "description": "No person detected on the rear-left seat"
          },
          {
            "data_component": "0400",
            "values": {
              "location": "rear_center",
              "detected": "not_detected"
            },
            "description": "No person detected on the rear-center seat"
          }
        ],
        "customType": "person_detected",
        "capabilityName": "seats"
      },
      {
        "name": "seatbelts_state",
        "name_cased": "seatbeltsState",
        "name_pretty": "Seatbelts state",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Seat location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "rear_center"
              }
            ],
            "customType": "seat_location",
            "capabilityName": "seats"
          },
          {
            "name": "fastened_state",
            "name_cased": "fastenedState",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "not_fastened"
              },
              {
                "id": 1,
                "name": "fastened"
              }
            ],
            "capabilityName": "seats"
          }
        ],
        "id": 3,
        "multiple": true,
        "name_singular": "seatbelt_state",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "fastened_state": "fastened"
            },
            "description": "Seatbelt fastened for the front-left seat"
          },
          {
            "data_component": "0100",
            "values": {
              "location": "front_right",
              "fastened_state": "not_fastened"
            },
            "description": "Seatbelt not fastened for the front-right seat"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "fastened_state": "not_fastened"
            },
            "description": "Seatbelt not fastened for the rear-right seat"
          },
          {
            "data_component": "0300",
            "values": {
              "location": "rear_left",
              "fastened_state": "not_fastened"
            },
            "description": "Seatbelt not fastened for the rear-left seat"
          },
          {
            "data_component": "0400",
            "values": {
              "location": "rear_center",
              "fastened_state": "not_fastened"
            },
            "description": "Seatbelt not fastened for the rear-center seat"
          }
        ],
        "customType": "seatbelt_state",
        "capabilityName": "seats"
      }
    ]
  },
  "tachograph": {
    "name": "tachograph",
    "name_cased": "tachograph",
    "name_pretty": "Tachograph",
    "category": "heavy_duty",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 100
    },
    "api": {
      "intro": 7,
      "update": 12
    },
    "getters": {},
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "properties": [
      {
        "name": "drivers_working_states",
        "name_cased": "driversWorkingStates",
        "name_pretty": "Drivers working states",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "driver_number",
            "name_cased": "driverNumber",
            "type": "uinteger",
            "size": 1,
            "description": "The driver number",
            "capabilityName": "tachograph"
          },
          {
            "name": "working_state",
            "name_cased": "workingState",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "resting"
              },
              {
                "id": 1,
                "name": "driver_available"
              },
              {
                "id": 2,
                "name": "working"
              },
              {
                "id": 3,
                "name": "driving"
              }
            ],
            "capabilityName": "tachograph"
          }
        ],
        "id": 1,
        "multiple": true,
        "name_singular": "driver_working_state",
        "examples": [
          {
            "data_component": "0102",
            "values": {
              "driver_number": 1,
              "working_state": "working"
            },
            "description": "Driver nr 1 is working"
          },
          {
            "data_component": "0200",
            "values": {
              "driver_number": 2,
              "working_state": "resting"
            },
            "description": "Driver nr 2 is resting"
          }
        ],
        "customType": "driver_working_state",
        "capabilityName": "tachograph"
      },
      {
        "name": "drivers_time_states",
        "name_cased": "driversTimeStates",
        "name_pretty": "Drivers time states",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "driver_number",
            "name_cased": "driverNumber",
            "type": "uinteger",
            "size": 1,
            "description": "The driver number",
            "capabilityName": "tachograph"
          },
          {
            "name": "time_state",
            "name_cased": "timeState",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "normal"
              },
              {
                "id": 1,
                "name": "fifteen_min_before_four",
                "name_cased": "15minBefore4",
                "name_pretty": "15 minutes before 4½ hours"
              },
              {
                "id": 2,
                "name": "four_reached",
                "name_cased": "4Reached",
                "name_pretty": "4½ hours reached"
              },
              {
                "id": 3,
                "name": "fifteen_min_before_nine",
                "name_cased": "15minBefore9",
                "name_pretty": "15 minutes before 9 hours"
              },
              {
                "id": 4,
                "name": "nine_reached",
                "name_cased": "9Reached",
                "name_pretty": "9 hours reached"
              },
              {
                "id": 5,
                "name": "fifteen_min_before_sixteen",
                "name_cased": "15minBefore16",
                "name_pretty": "15 minutes before 16 hours"
              },
              {
                "id": 6,
                "name": "sixteen_reached",
                "name_cased": "16Reached",
                "name_pretty": "16 hours reached"
              }
            ],
            "capabilityName": "tachograph"
          }
        ],
        "id": 2,
        "multiple": true,
        "name_singular": "drivers_time_state",
        "examples": [
          {
            "data_component": "0302",
            "values": {
              "driver_number": 3,
              "time_state": "four_reached"
            },
            "description": "Driver nr 3 has reached 4 hours"
          },
          {
            "data_component": "0405",
            "values": {
              "driver_number": 4,
              "time_state": "fifteen_min_before_sixteen"
            },
            "description": "Driver nr 4 has reached 15 hours and 45 minutes"
          }
        ],
        "customType": "driver_time_state",
        "capabilityName": "tachograph"
      },
      {
        "name": "drivers_cards_present",
        "name_cased": "driversCardsPresent",
        "name_pretty": "Drivers cards present",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "driver_number",
            "name_cased": "driverNumber",
            "type": "uinteger",
            "size": 1,
            "description": "The driver number",
            "capabilityName": "tachograph"
          },
          {
            "name": "card_present",
            "name_cased": "cardPresent",
            "type": "enum",
            "size": 1,
            "controls": "switch",
            "enum_values": [
              {
                "id": 0,
                "name": "not_present"
              },
              {
                "id": 1,
                "name": "present"
              }
            ],
            "capabilityName": "tachograph"
          }
        ],
        "id": 3,
        "multiple": true,
        "name_singular": "drivers_card_present",
        "examples": [
          {
            "data_component": "0601",
            "values": {
              "driver_number": 6,
              "card_present": "present"
            },
            "description": "Driver nr 6 has a card present"
          },
          {
            "data_component": "0700",
            "values": {
              "driver_number": 7,
              "card_present": "not_present"
            },
            "description": "Driver nr 7 does not have a card present"
          }
        ],
        "customType": "driver_card_present",
        "capabilityName": "tachograph"
      },
      {
        "name": "vehicle_motion",
        "name_cased": "vehicleMotion",
        "name_pretty": "Vehicle motion",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "not_detected"
          },
          {
            "id": 1,
            "name": "detected"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "01",
            "value": "detected",
            "description": "Detected vehicle in motion"
          }
        ],
        "customType": "detected",
        "capabilityName": "tachograph"
      },
      {
        "id": 5,
        "name": "vehicle_overspeed",
        "name_cased": "vehicleOverspeed",
        "name_pretty": "Vehicle overspeed",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "no_overspeed"
          },
          {
            "id": 1,
            "name": "overspeed"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "no_overspeed",
            "description": "Vehicle is not overspeeding"
          }
        ],
        "capabilityName": "tachograph"
      },
      {
        "id": 6,
        "name": "vehicle_direction",
        "name_cased": "vehicleDirection",
        "name_pretty": "Vehicle direction",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "forward"
          },
          {
            "id": 1,
            "name": "reverse"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "forward",
            "description": "Vehicle is moving forward"
          }
        ],
        "capabilityName": "tachograph"
      },
      {
        "id": 7,
        "name": "vehicle_speed",
        "name_cased": "vehicleSpeed",
        "name_pretty": "Vehicle speed",
        "type": "unit.speed",
        "size": 10,
        "description": "The tachograph vehicle speed",
        "examples": [
          {
            "data_component": "16014054000000000000",
            "value": {
              "kilometers_per_hour": 80
            },
            "description": "Vehicle speed is 80.0km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "tachograph"
      }
    ]
  },
  "text_input": {
    "name": "text_input",
    "name_cased": "textInput",
    "name_pretty": "Text Input",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 68
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "setters": [
      {
        "name": "text_input",
        "mandatory": [
          1
        ],
        "description": "Send a keystroke or entire sentences as input to the vehicle headunit. This can act as an alternative to the input devices that the vehicle is equipped with."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "text",
        "name_cased": "text",
        "name_pretty": "Text",
        "type": "string",
        "description": "The text",
        "examples": [
          {
            "data_component": "52656e64657a766f757320776974682052616d61",
            "value": "Rendezvous with Rama",
            "description": "Text is 'Rendezvous with Rama'"
          }
        ],
        "capabilityName": "textInput"
      }
    ]
  },
  "theft_alarm": {
    "name": "theft_alarm",
    "name_cased": "theftAlarm",
    "name_pretty": "Theft Alarm",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 70
    },
    "api": {
      "intro": 4,
      "update": 12
    },
    "getters": {},
    "setters": [
      {
        "name": "set_theft_alarm",
        "mandatory": [
          1
        ],
        "description": "Unarm or arm the theft alarm of the vehicle."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "properties": [
      {
        "id": 1,
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unarmed",
            "verb": "unarm"
          },
          {
            "id": 1,
            "name": "armed",
            "verb": "arm"
          },
          {
            "id": 2,
            "name": "triggered",
            "verb": "trigger"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "armed",
            "description": "Theft alarm is armed"
          }
        ],
        "capabilityName": "theftAlarm"
      },
      {
        "name": "interior_protection_status",
        "name_cased": "interiorProtectionStatus",
        "name_pretty": "Interior protection status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive_selected"
          },
          {
            "id": 1,
            "name": "inactive_not_selected"
          },
          {
            "id": 2,
            "name": "active"
          }
        ],
        "id": 2,
        "added": 12,
        "description": "Interior protection sensor status",
        "examples": [
          {
            "data_component": "02",
            "value": "active",
            "description": "Interior protection sensor is active"
          }
        ],
        "customType": "active_selected_state",
        "capabilityName": "theftAlarm"
      },
      {
        "name": "tow_protection_status",
        "name_cased": "towProtectionStatus",
        "name_pretty": "Tow protection status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive_selected"
          },
          {
            "id": 1,
            "name": "inactive_not_selected"
          },
          {
            "id": 2,
            "name": "active"
          }
        ],
        "id": 3,
        "added": 12,
        "description": "Tow protection sensor status",
        "examples": [
          {
            "data_component": "02",
            "value": "active",
            "description": "Tow protection sensor is active"
          }
        ],
        "customType": "active_selected_state",
        "capabilityName": "theftAlarm"
      },
      {
        "id": 4,
        "name": "last_warning_reason",
        "name_cased": "lastWarningReason",
        "name_pretty": "Last warning reason",
        "added": 12,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "no_alarm"
          },
          {
            "id": 1,
            "name": "basis_alarm"
          },
          {
            "id": 2,
            "name": "door_front_left"
          },
          {
            "id": 3,
            "name": "door_front_right"
          },
          {
            "id": 4,
            "name": "door_rear_left"
          },
          {
            "id": 5,
            "name": "door_rear_right"
          },
          {
            "id": 6,
            "name": "hood"
          },
          {
            "id": 7,
            "name": "trunk"
          },
          {
            "id": 8,
            "name": "common_alm_in"
          },
          {
            "id": 9,
            "name": "panic"
          },
          {
            "id": 10,
            "name": "glovebox"
          },
          {
            "id": 11,
            "name": "center_box"
          },
          {
            "id": 12,
            "name": "rear_box"
          },
          {
            "id": 13,
            "name": "sensor_vta"
          },
          {
            "id": 14,
            "name": "its"
          },
          {
            "id": 15,
            "name": "its_slv"
          },
          {
            "id": 16,
            "name": "tps"
          },
          {
            "id": 17,
            "name": "horn"
          },
          {
            "id": 18,
            "name": "hold_com"
          },
          {
            "id": 19,
            "name": "remote"
          },
          {
            "id": 20,
            "name": "unknown"
          }
        ],
        "examples": [
          {
            "data_component": "06",
            "value": "hood",
            "description": "Last warning is for the hood"
          }
        ],
        "capabilityName": "theftAlarm"
      },
      {
        "id": 5,
        "name": "last_event",
        "name_cased": "lastEvent",
        "name_pretty": "Last event",
        "added": 12,
        "type": "timestamp",
        "description": "Last event happening date",
        "examples": [
          {
            "data_component": "00000172bcd25b10",
            "value": "2020-06-16T11:10:02.000Z",
            "description": "Last event happened at 16. June 2020 at 11:10:02 GMT"
          }
        ],
        "capabilityName": "theftAlarm"
      },
      {
        "id": 6,
        "name": "last_event_level",
        "name_cased": "lastEventLevel",
        "name_pretty": "Last event level",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Level of impact for the last event",
        "enum_values": [
          {
            "id": 0,
            "name": "low"
          },
          {
            "id": 1,
            "name": "medium"
          },
          {
            "id": 2,
            "name": "high"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "low",
            "description": "Last event had a low impact"
          }
        ],
        "capabilityName": "theftAlarm"
      },
      {
        "id": 7,
        "name": "event_type",
        "name_cased": "eventType",
        "name_pretty": "Event type",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Position of the last even relative to the vehicle",
        "enum_values": [
          {
            "id": 0,
            "name": "idle"
          },
          {
            "id": 1,
            "name": "front_left"
          },
          {
            "id": 2,
            "name": "front_middle"
          },
          {
            "id": 3,
            "name": "front_right"
          },
          {
            "id": 4,
            "name": "right"
          },
          {
            "id": 5,
            "name": "rear_right"
          },
          {
            "id": 6,
            "name": "rear_middle"
          },
          {
            "id": 7,
            "name": "rear_left"
          },
          {
            "id": 8,
            "name": "left"
          },
          {
            "id": 9,
            "name": "unknown"
          }
        ],
        "examples": [
          {
            "data_component": "05",
            "value": "rear_right",
            "description": "Last event happened to rear right position"
          }
        ],
        "capabilityName": "theftAlarm"
      }
    ]
  },
  "trips": {
    "name": "trips",
    "name_cased": "trips",
    "name_pretty": "Trips",
    "category": "poi",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 106
    },
    "api": {
      "intro": 12,
      "update": 13
    },
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "properties": [
      {
        "id": 1,
        "name": "type",
        "name_cased": "type",
        "name_pretty": "Type",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Type of the trip",
        "enum_values": [
          {
            "id": 0,
            "name": "single"
          },
          {
            "id": 1,
            "name": "multi"
          },
          {
            "id": 2,
            "name": "eco"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "single",
            "description": "Trip had a single stop"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 2,
        "name": "driver_name",
        "name_cased": "driverName",
        "name_pretty": "Driver name",
        "added": 12,
        "type": "string",
        "description": "Name of the driver of the trip",
        "examples": [
          {
            "data_component": "486172692053656c646f6e",
            "value": "Hari Seldon",
            "description": "Driver name is 'Hari Seldon'"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 3,
        "name": "description",
        "name_cased": "description",
        "name_pretty": "Description",
        "added": 12,
        "type": "string",
        "description": "Description of the trip",
        "examples": [
          {
            "data_component": "546f20736176652068756d616e6b696e64",
            "value": "To save humankind",
            "description": "Description of the trip is 'To save humankind'"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 4,
        "name": "start_time",
        "name_cased": "startTime",
        "name_pretty": "Start time",
        "added": 12,
        "type": "timestamp",
        "size": 8,
        "description": "Start time of the trip",
        "examples": [
          {
            "data_component": "00000172cc7e5190",
            "value": "2020-06-19T12:12:10.000Z",
            "description": "Trip started at 19 June 2020 at 12:12:10 GMT"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 5,
        "name": "end_time",
        "name_cased": "endTime",
        "name_pretty": "End time",
        "added": 12,
        "type": "timestamp",
        "size": 8,
        "description": "End time of the trip",
        "examples": [
          {
            "data_component": "00000172ccb54010",
            "value": "2020-06-19T13:12:10.000Z",
            "description": "Trip ended at 19 June 2020 at 13:12:10 GMT"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 6,
        "name": "start_address",
        "name_cased": "startAddress",
        "name_pretty": "Start address",
        "added": 12,
        "type": "string",
        "description": "Start address of the trip",
        "examples": [
          {
            "data_component": "536b616c69747a65722053747261c39f652036382c203130393937204265726c696e2c204765726d616e79",
            "value": "Skalitzer Straße 68, 10997 Berlin, Germany",
            "description": "Trip started from Skalitzer Straße 68, 10997 Berlin, Germany"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 7,
        "name": "end_address",
        "name_cased": "endAddress",
        "name_pretty": "End address",
        "added": 12,
        "type": "string",
        "description": "End address of the trip",
        "examples": [
          {
            "data_component": "536b616c69747a65722053747261c39f652036382c203130393937204265726c696e2c204765726d616e79",
            "value": "Skalitzer Straße 68, 10997 Berlin, Germany",
            "description": "Trip ended at Skalitzer Straße 68, 10997 Berlin, Germany"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "name": "start_coordinates",
        "name_cased": "startCoordinates",
        "name_pretty": "Start coordinates",
        "type": "custom",
        "size": 16,
        "items": [
          {
            "name": "latitude",
            "name_cased": "latitude",
            "validation": "min:-90|max:90",
            "type": "double",
            "size": 8,
            "description": "Latitude",
            "capabilityName": "trips"
          },
          {
            "name": "longitude",
            "name_cased": "longitude",
            "validation": "min:-180|max:180",
            "type": "double",
            "size": 8,
            "description": "Longitude",
            "capabilityName": "trips"
          }
        ],
        "id": 8,
        "added": 12,
        "description": "Start coordinates of the trip",
        "examples": [
          {
            "data_component": "404a40090b417ca2402ae122d948dc12",
            "values": {
              "latitude": 52.500276,
              "longitude": 13.439719
            },
            "description": "Trip started from 52.500276:13.439719"
          }
        ],
        "customType": "coordinates",
        "capabilityName": "trips"
      },
      {
        "name": "end_coordinates",
        "name_cased": "endCoordinates",
        "name_pretty": "End coordinates",
        "type": "custom",
        "size": 16,
        "items": [
          {
            "name": "latitude",
            "name_cased": "latitude",
            "validation": "min:-90|max:90",
            "type": "double",
            "size": 8,
            "description": "Latitude",
            "capabilityName": "trips"
          },
          {
            "name": "longitude",
            "name_cased": "longitude",
            "validation": "min:-180|max:180",
            "type": "double",
            "size": 8,
            "description": "Longitude",
            "capabilityName": "trips"
          }
        ],
        "id": 9,
        "added": 12,
        "description": "End coordinates of the trip",
        "examples": [
          {
            "data_component": "404a40090b417ca2402ae122d948dc12",
            "values": {
              "latitude": 52.500276,
              "longitude": 13.439719
            },
            "description": "Trip ended at 52.500276:13.439719"
          }
        ],
        "customType": "coordinates",
        "capabilityName": "trips"
      },
      {
        "id": 10,
        "name": "start_odometer",
        "name_cased": "startOdometer",
        "name_pretty": "Start odometer",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Odometer reading at the start of the trip",
        "examples": [
          {
            "data_component": "120440c4820000000000",
            "value": {
              "kilometers": 10500
            },
            "description": "At the start of the trip the odometer was showing 10500.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "id": 11,
        "name": "end_odometer",
        "name_cased": "endOdometer",
        "name_pretty": "End odometer",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Odometer reading at the end of the trip",
        "examples": [
          {
            "data_component": "120440c4978000000000",
            "value": {
              "kilometers": 10543
            },
            "description": "At the start of the trip the odometer was showing 10543.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "id": 12,
        "name": "average_fuel_consumption",
        "name_cased": "averageFuelConsumption",
        "name_pretty": "Average fuel consumption",
        "added": 12,
        "type": "unit.fuel_efficiency",
        "size": 10,
        "description": "Average fuel consumption during the trip",
        "examples": [
          {
            "data_component": "0f00401d5c28f5c28f5c",
            "value": {
              "liters_per_100_kilometers": 7.34
            },
            "description": "Average fuel consumption during the trip was 7.34 l/100km"
          }
        ],
        "unit": {
          "name": "fuel_efficiency",
          "id": 15,
          "unit_types": [
            {
              "name": "liters_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_imperial_gallon",
              "id": 1,
              "conversion_inverse": 282.4809363
            },
            {
              "name": "miles_per_gallon",
              "id": 2,
              "conversion_inverse": 235.2145833
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "id": 13,
        "name": "distance",
        "name_cased": "distance",
        "name_pretty": "Distance",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance of the trip",
        "examples": [
          {
            "data_component": "12044045800000000000",
            "value": {
              "kilometers": 43
            },
            "description": "Distance of trip was 43.0km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "name": "start_address_components",
        "name_cased": "startAddressComponents",
        "name_pretty": "Start address components",
        "type": "custom",
        "description": "Start address components",
        "items": [
          {
            "name": "type",
            "name_cased": "type",
            "name_pretty": "Type",
            "type": "enum",
            "size": 1,
            "description": "Component type",
            "enum_values": [
              {
                "id": 0,
                "name": "city"
              },
              {
                "id": 1,
                "name": "country"
              },
              {
                "id": 2,
                "name": "country_short"
              },
              {
                "id": 3,
                "name": "district"
              },
              {
                "id": 4,
                "name": "postal_code"
              },
              {
                "id": 5,
                "name": "street"
              },
              {
                "id": 6,
                "name": "state_province"
              },
              {
                "id": 7,
                "name": "other"
              }
            ],
            "capabilityName": "trips"
          },
          {
            "name": "value",
            "name_cased": "value",
            "name_pretty": "Value",
            "type": "string",
            "description": "Value for the component",
            "capabilityName": "trips"
          }
        ],
        "id": 14,
        "name_singluar": "start_address_component",
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "0000064265726c696e",
            "values": {
              "type": "city",
              "value": "Berlin"
            },
            "description": "City component value is 'Berlin'"
          },
          {
            "data_component": "0100074765726d616e79",
            "values": {
              "type": "country",
              "value": "Germany"
            },
            "description": "Country component value is 'Germany'"
          },
          {
            "data_component": "0200024445",
            "values": {
              "type": "country_short",
              "value": "DE"
            },
            "description": "Country short component value is 'DE'"
          },
          {
            "data_component": "0300064265726c696e",
            "values": {
              "type": "district",
              "value": "Berlin"
            },
            "description": "District component value is 'Berlin'"
          },
          {
            "data_component": "0400053130313137",
            "values": {
              "type": "postal_code",
              "value": "10117"
            },
            "description": "Postal code component value is '10117'"
          },
          {
            "data_component": "050014536b616c69747a65722053747261c39f65203638",
            "values": {
              "type": "street",
              "value": "Skalitzer Straße 68"
            },
            "description": "Street component value is 'Skalitzer Straße 68'"
          },
          {
            "data_component": "06000b4272616e64656e62757267",
            "values": {
              "type": "state_province",
              "value": "Brandenburg"
            },
            "description": "Country component value is 'Brandenburg'"
          },
          {
            "data_component": "0700074765726d616e79",
            "values": {
              "type": "other",
              "value": "Germany"
            },
            "description": "Other component value is 'Germany'"
          }
        ],
        "customType": "address_component",
        "capabilityName": "trips"
      },
      {
        "name": "end_address_components",
        "name_cased": "endAddressComponents",
        "name_pretty": "End address components",
        "type": "custom",
        "description": "End address components",
        "items": [
          {
            "name": "type",
            "name_cased": "type",
            "name_pretty": "Type",
            "type": "enum",
            "size": 1,
            "description": "Component type",
            "enum_values": [
              {
                "id": 0,
                "name": "city"
              },
              {
                "id": 1,
                "name": "country"
              },
              {
                "id": 2,
                "name": "country_short"
              },
              {
                "id": 3,
                "name": "district"
              },
              {
                "id": 4,
                "name": "postal_code"
              },
              {
                "id": 5,
                "name": "street"
              },
              {
                "id": 6,
                "name": "state_province"
              },
              {
                "id": 7,
                "name": "other"
              }
            ],
            "capabilityName": "trips"
          },
          {
            "name": "value",
            "name_cased": "value",
            "name_pretty": "Value",
            "type": "string",
            "description": "Value for the component",
            "capabilityName": "trips"
          }
        ],
        "id": 15,
        "name_singluar": "end_address_component",
        "added": 12,
        "multiple": true,
        "examples": [
          {
            "data_component": "0000064265726c696e",
            "values": {
              "type": "city",
              "value": "Berlin"
            },
            "description": "City component value is 'Berlin'"
          },
          {
            "data_component": "0100074765726d616e79",
            "values": {
              "type": "country",
              "value": "Germany"
            },
            "description": "Country component value is 'Germany'"
          },
          {
            "data_component": "0200024445",
            "values": {
              "type": "country_short",
              "value": "DE"
            },
            "description": "Country short component value is 'DE'"
          },
          {
            "data_component": "0300064265726c696e",
            "values": {
              "type": "district",
              "value": "Berlin"
            },
            "description": "District component value is 'Berlin'"
          },
          {
            "data_component": "0400053130313137",
            "values": {
              "type": "postal_code",
              "value": "10117"
            },
            "description": "Postal code component value is '10117'"
          },
          {
            "data_component": "050014536b616c69747a65722053747261c39f65203638",
            "values": {
              "type": "street",
              "value": "Skalitzer Straße 68"
            },
            "description": "Street component value is 'Skalitzer Straße 68'"
          },
          {
            "data_component": "06000b4272616e64656e62757267",
            "values": {
              "type": "state_province",
              "value": "Brandenburg"
            },
            "description": "Country component value is 'Brandenburg'"
          },
          {
            "data_component": "0700074765726d616e79",
            "values": {
              "type": "other",
              "value": "Germany"
            },
            "description": "Other component value is 'Germany'"
          }
        ],
        "customType": "address_component",
        "capabilityName": "trips"
      },
      {
        "id": 16,
        "name": "event",
        "name_cased": "event",
        "name_pretty": "Event",
        "added": 13,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "harsh_braking"
          },
          {
            "id": 1,
            "name": "harsh_acceleration"
          },
          {
            "id": 2,
            "name": "sharp_turn"
          },
          {
            "id": 3,
            "name": "over_rpm",
            "name_pretty": "Over RPM"
          },
          {
            "id": 4,
            "name": "overspeed"
          },
          {
            "id": 5,
            "name": "idling_engine_on"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "harsh_acceleration",
            "description": "Driving event of harsh acceleration encountered"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "id": 17,
        "name": "eco_level",
        "name_cased": "ecoLevel",
        "name_pretty": "Eco level",
        "added": 13,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "high"
          },
          {
            "id": 1,
            "name": "medium"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "high",
            "description": "Eco driving level is high"
          }
        ],
        "capabilityName": "trips"
      },
      {
        "name": "thresholds",
        "name_cased": "thresholds",
        "name_pretty": "Thresholds",
        "type": "custom",
        "size": 9,
        "items": [
          {
            "name": "type",
            "name_cased": "type",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "zero"
              },
              {
                "id": 1,
                "name": "one"
              }
            ],
            "capabilityName": "trips"
          },
          {
            "name": "value",
            "name_cased": "value",
            "type": "double",
            "size": 8,
            "capabilityName": "trips"
          }
        ],
        "id": 18,
        "name_singluar": "Threshold",
        "added": 13,
        "multiple": true,
        "description": "Eco driving thresholds",
        "examples": [
          {
            "data_component": "000000000000000000",
            "values": {
              "type": "zero",
              "value": 0
            },
            "description": "Eco driving zero-threshold is set at 0.0"
          },
          {
            "data_component": "010000000000000000",
            "values": {
              "type": "one",
              "value": 0
            },
            "description": "Eco driving one-threshold is set at 0.0"
          }
        ],
        "customType": "eco_driving_threshold",
        "capabilityName": "trips"
      },
      {
        "id": 19,
        "name": "total_fuel_consumption",
        "name_cased": "totalFuelConsumption",
        "name_pretty": "Total fuel consumption",
        "added": 13,
        "type": "unit.volume",
        "size": 10,
        "description": "Total fuel consumption during the trip",
        "examples": [
          {
            "data_component": "19024037666666666666",
            "value": {
              "liters": 23.4
            },
            "description": "Total fuel consumption during the trip was 23.4 l"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "id": 20,
        "name": "total_idle_fuel_consumption",
        "name_cased": "totalIdleFuelConsumption",
        "name_pretty": "Total idle fuel consumption",
        "added": 13,
        "type": "unit.volume",
        "size": 10,
        "description": "Fuel consumed while idle since the last ignition on.",
        "examples": [
          {
            "data_component": "19024004000000000000",
            "value": {
              "liters": 2.5
            },
            "description": "Since the last ignition the vehicle has consumed 2.5 l while ideling."
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "trips"
      },
      {
        "id": 21,
        "name": "maximum_speed",
        "name_cased": "maximumSpeed",
        "name_pretty": "Maximum speed",
        "added": 13,
        "type": "unit.speed",
        "size": 10,
        "description": "Maximum speed recorded since the last igntion on.",
        "examples": [
          {
            "data_component": "16014050d33333333333",
            "value": {
              "kilometers_per_hour": 67.3
            },
            "description": "Maximum speed since last ignition on is 67.3km/h"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "trips"
      }
    ]
  },
  "trunk": {
    "name": "trunk",
    "name_cased": "trunk",
    "name_pretty": "Trunk",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 33
    },
    "api": {
      "intro": 1,
      "update": 13
    },
    "getters": {},
    "setters": [
      {
        "name": "control_trunk",
        "optional": [
          1,
          2
        ],
        "description": "Unlock/Lock and Open/Close the trunk."
      }
    ],
    "state": [
      1,
      2,
      3
    ],
    "properties": [
      {
        "name": "lock",
        "name_cased": "lock",
        "name_pretty": "Lock",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "unlocked",
            "verb": "unlock"
          },
          {
            "id": 1,
            "name": "locked",
            "verb": "lock"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "00",
            "value": "unlocked",
            "description": "Trunk is unlocked"
          }
        ],
        "customType": "lock_state",
        "capabilityName": "trunk"
      },
      {
        "name": "position",
        "name_cased": "position",
        "name_pretty": "Position",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "closed",
            "verb": "close"
          },
          {
            "id": 1,
            "name": "open"
          }
        ],
        "id": 2,
        "examples": [
          {
            "data_component": "01",
            "value": "open",
            "description": "Trunk is open"
          }
        ],
        "customType": "position",
        "capabilityName": "trunk"
      },
      {
        "name": "lock_safety",
        "name_cased": "lockSafety",
        "name_pretty": "Lock safety",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "safe",
            "description": "The lock is double-locked (also from inside the vehicle)"
          },
          {
            "id": 1,
            "name": "unsafe"
          }
        ],
        "id": 3,
        "added": 13,
        "description": "Indicates the safe-state of the trunk.",
        "examples": [
          {
            "data_component": "00",
            "value": "safe",
            "description": "Trunk lock is safely locked."
          }
        ],
        "customType": "lock_safety",
        "capabilityName": "trunk"
      }
    ]
  },
  "usage": {
    "name": "usage",
    "name_cased": "usage",
    "name_pretty": "Usage",
    "category": "diagnostics",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 104
    },
    "api": {
      "intro": 8,
      "update": 13
    },
    "getters": {
      "name": "get_usage"
    },
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40
    ],
    "properties": [
      {
        "id": 1,
        "name": "average_weekly_distance",
        "name_cased": "averageWeeklyDistance",
        "name_pretty": "Average weekly distance",
        "type": "unit.length",
        "size": 10,
        "description": "Average weekly distance",
        "examples": [
          {
            "data_component": "12044084d4cccccccccd",
            "value": {
              "kilometers": 666.6
            },
            "description": "Average weekly distance is 666.6km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 2,
        "name": "average_weekly_distance_long_run",
        "name_cased": "averageWeeklyDistanceLongRun",
        "name_pretty": "Average weekly distance long run",
        "type": "unit.length",
        "size": 10,
        "description": "Average weekyl distance over long term",
        "examples": [
          {
            "data_component": "120440884d999999999a",
            "value": {
              "kilometers": 777.7
            },
            "description": "Average weekly distance, over long term, is 777.7km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "acceleration_evaluation",
        "name_cased": "accelerationEvaluation",
        "name_pretty": "Acceleration evaluation",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Acceleration evaluation percentage",
        "id": 3,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Acceleration is evaluated at 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "name": "driving_style_evaluation",
        "name_cased": "drivingStyleEvaluation",
        "name_pretty": "Driving style evaluation",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Driving style evaluation percentage",
        "id": 4,
        "examples": [
          {
            "data_component": "3fec28f5c28f5c29",
            "value": 0.88,
            "description": "Driving style is evaluated at 88%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "name": "driving_modes_activation_periods",
        "name_cased": "drivingModesActivationPeriods",
        "name_pretty": "Driving modes activation periods",
        "type": "custom",
        "size": 9,
        "items": [
          {
            "name": "driving_mode",
            "name_cased": "drivingMode",
            "name_pretty": "Driving mode",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "regular"
              },
              {
                "id": 1,
                "name": "eco"
              },
              {
                "id": 2,
                "name": "sport"
              },
              {
                "id": 3,
                "name": "sport_plus"
              },
              {
                "id": 4,
                "name": "ecoPlus"
              },
              {
                "id": 5,
                "name": "comfort"
              }
            ],
            "customType": "driving_mode",
            "capabilityName": "usage"
          },
          {
            "name": "period",
            "name_cased": "period",
            "name_pretty": "Percentage",
            "unit_sign": "%",
            "validation": "min:0|max:1",
            "type": "double",
            "size": 8,
            "description": "Percentage of the period used for a driving mode",
            "customType": "percentage",
            "capabilityName": "usage"
          }
        ],
        "id": 5,
        "multiple": true,
        "name_singular": "driving_modes_activation_period",
        "examples": [
          {
            "data_component": "003fc999999999999a",
            "values": {
              "driving_mode": "regular",
              "period": 0.2
            },
            "description": "Driving mode 'regular' is engaged 20% of the time"
          },
          {
            "data_component": "013fd3333333333333",
            "values": {
              "driving_mode": "eco",
              "period": 0.3
            },
            "description": "Driving mode 'eco' is engaged 30% of the time"
          },
          {
            "data_component": "023fb999999999999a",
            "values": {
              "driving_mode": "sport",
              "period": 0.1
            },
            "description": "Driving mode 'eco' is engaged 10% of the time"
          },
          {
            "data_component": "033fb999999999999a",
            "values": {
              "driving_mode": "sport_plus",
              "period": 0.1
            },
            "description": "Driving mode 'eco' is engaged 1% of the time"
          },
          {
            "data_component": "043fd3333333333333",
            "values": {
              "driving_mode": "ecoPlus",
              "period": 0.3
            },
            "description": "Driving mode 'eco' is engaged 30% of the time"
          },
          {
            "data_component": "050000000000000000",
            "values": {
              "driving_mode": "comfort",
              "period": 0
            },
            "description": "Driving mode 'eco' is engaged 0% of the time"
          }
        ],
        "customType": "driving_mode_activation_period",
        "capabilityName": "usage"
      },
      {
        "name": "driving_modes_energy_consumptions",
        "name_cased": "drivingModesEnergyConsumptions",
        "name_pretty": "Driving modes energy consumptions",
        "type": "custom",
        "size": 11,
        "items": [
          {
            "name": "driving_mode",
            "name_cased": "drivingMode",
            "name_pretty": "Driving mode",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "regular"
              },
              {
                "id": 1,
                "name": "eco"
              },
              {
                "id": 2,
                "name": "sport"
              },
              {
                "id": 3,
                "name": "sport_plus"
              },
              {
                "id": 4,
                "name": "ecoPlus"
              },
              {
                "id": 5,
                "name": "comfort"
              }
            ],
            "customType": "driving_mode",
            "capabilityName": "usage"
          },
          {
            "name": "consumption",
            "name_cased": "consumption",
            "type": "unit.energy",
            "size": 10,
            "description": "Energy consumption in the driving mode",
            "unit": {
              "name": "energy",
              "id": 12,
              "unit_types": [
                {
                  "name": "joules",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "kilojoules",
                  "id": 1,
                  "conversion_linear": 1000
                },
                {
                  "name": "watt_hours",
                  "id": 3,
                  "conversion_linear": 3600
                },
                {
                  "name": "kilowatt_hours",
                  "id": 4,
                  "conversion_linear": 3600000
                }
              ]
            },
            "capabilityName": "usage"
          }
        ],
        "id": 6,
        "name_singular": "driving_mode_energy_consumption",
        "multiple": true,
        "examples": [
          {
            "data_component": "000c044034333333333333",
            "values": {
              "driving_mode": "regular",
              "consumption": {
                "kilowatt_hours": 20.2
              }
            },
            "description": "Driving mode 'regular' consumed 20.2kWh of electric energy"
          },
          {
            "data_component": "010c04404099999999999a",
            "values": {
              "driving_mode": "eco",
              "consumption": {
                "kilowatt_hours": 33.2
              }
            },
            "description": "Driving mode 'eco' consumed 33.2kWh of electric energy"
          },
          {
            "data_component": "020c04404b266666666666",
            "values": {
              "driving_mode": "sport",
              "consumption": {
                "kilowatt_hours": 54.3
              }
            },
            "description": "Driving mode 'sport' consumed 54.3kWh of electric energy"
          },
          {
            "data_component": "030c044050333333333333",
            "values": {
              "driving_mode": "sport_plus",
              "consumption": {
                "kilowatt_hours": 64.8
              }
            },
            "description": "Driving mode 'sport_plus' consumed 64.8kWh of electric energy"
          },
          {
            "data_component": "040c044032000000000000",
            "values": {
              "driving_mode": "ecoPlus",
              "consumption": {
                "kilowatt_hours": 18
              }
            },
            "description": "Driving mode 'ecoPlus' consumed 18.0kWh of electric energy"
          },
          {
            "data_component": "050c044040d9999999999a",
            "values": {
              "driving_mode": "comfort",
              "consumption": {
                "kilowatt_hours": 33.7
              }
            },
            "description": "Driving mode 'comfort' consumed 33.7kWh of electric energy"
          }
        ],
        "customType": "driving_mode_energy_consumption",
        "capabilityName": "usage"
      },
      {
        "id": 7,
        "name": "last_trip_energy_consumption",
        "name_cased": "lastTripEnergyConsumption",
        "name_pretty": "Last trip energy consumption",
        "type": "unit.energy",
        "size": 10,
        "description": "Energy consumption in the last trip",
        "examples": [
          {
            "data_component": "0c044059533333333333",
            "value": {
              "kilowatt_hours": 101.3
            },
            "description": "Last trip consumed 101.3kWh of electric energy"
          }
        ],
        "unit": {
          "name": "energy",
          "id": 12,
          "unit_types": [
            {
              "name": "joules",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilojoules",
              "id": 1,
              "conversion_linear": 1000
            },
            {
              "name": "watt_hours",
              "id": 3,
              "conversion_linear": 3600
            },
            {
              "name": "kilowatt_hours",
              "id": 4,
              "conversion_linear": 3600000
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 8,
        "name": "last_trip_fuel_consumption",
        "name_cased": "lastTripFuelConsumption",
        "name_pretty": "Last trip fuel consumption",
        "type": "unit.volume",
        "size": 10,
        "description": "Fuel consumption in the last trip",
        "examples": [
          {
            "data_component": "19024036800000000000",
            "value": {
              "liters": 22.5
            },
            "description": "Last trip consumed 22.5 L of fuel"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 9,
        "name": "mileage_after_last_trip",
        "name_cased": "mileageAfterLastTrip",
        "name_pretty": "Mileage after last trip",
        "deprecated": {
          "new_name": "odometer_after_last_trip",
          "reason": "'mileage' is an incorrect term for this"
        },
        "type": "unit.length",
        "size": 10,
        "description": "Mileage after the last trip",
        "examples": [
          {
            "data_component": "120440f7590000000000",
            "value": {
              "kilometers": 95632
            },
            "description": "Mileage is 95'632km after last trip"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "last_trip_electric_portion",
        "name_cased": "lastTripElectricPortion",
        "name_pretty": "Last trip electric portion",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Portion of the last trip used in electric mode",
        "id": 10,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Electric postion of the last trip is 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "id": 11,
        "name": "last_trip_average_energy_recuperation",
        "name_cased": "lastTripAverageEnergyRecuperation",
        "name_pretty": "Last trip average energy recuperation",
        "type": "unit.energy_efficiency",
        "size": 10,
        "description": "Energy recuperation rate for last trip",
        "examples": [
          {
            "data_component": "0d004016b851eb851eb8",
            "value": {
              "kwh_per_100_kilometers": 5.68
            },
            "description": "5.68kWh/100km of electric energy was recuperated during last trip"
          }
        ],
        "unit": {
          "name": "energy_efficiency",
          "id": 13,
          "unit_types": [
            {
              "name": "kwh_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_kwh",
              "id": 1,
              "conversion_inverse": 62.1371192237334
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "last_trip_battery_remaining",
        "name_cased": "lastTripBatteryRemaining",
        "name_pretty": "Last trip battery remaining",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Battery % remaining after last trip",
        "id": 12,
        "examples": [
          {
            "data_component": "3fe0000000000000",
            "value": 0.5,
            "description": "Battery is at 50% after last trip"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "id": 13,
        "name": "last_trip_date",
        "name_cased": "lastTripDate",
        "name_pretty": "Last trip date",
        "type": "timestamp",
        "size": 8,
        "description": "The last trip date",
        "examples": [
          {
            "data_component": "0000016682059d50",
            "value": "2018-10-17T12:34:58.000Z",
            "description": "Last trip happened at 17 October 2018 at 12:34:58 UTC"
          }
        ],
        "capabilityName": "usage"
      },
      {
        "id": 14,
        "name": "average_fuel_consumption",
        "name_cased": "averageFuelConsumption",
        "name_pretty": "Average fuel consumption",
        "type": "unit.fuel_efficiency",
        "size": 10,
        "description": "Average fuel consumption for current trip",
        "examples": [
          {
            "data_component": "0f00401a000000000000",
            "value": {
              "liters_per_100_kilometers": 6.5
            },
            "description": "Average fuel consumption is 6.5 L per 100km"
          }
        ],
        "unit": {
          "name": "fuel_efficiency",
          "id": 15,
          "unit_types": [
            {
              "name": "liters_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_imperial_gallon",
              "id": 1,
              "conversion_inverse": 282.4809363
            },
            {
              "name": "miles_per_gallon",
              "id": 2,
              "conversion_inverse": 235.2145833
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 15,
        "name": "current_fuel_consumption",
        "name_cased": "currentFuelConsumption",
        "name_pretty": "Current fuel consumption",
        "type": "unit.fuel_efficiency",
        "size": 10,
        "description": "Current fuel consumption",
        "examples": [
          {
            "data_component": "0f00401e000000000000",
            "value": {
              "liters_per_100_kilometers": 7.5
            },
            "description": "Current fuel consumption is 7.5 L per 100km"
          }
        ],
        "unit": {
          "name": "fuel_efficiency",
          "id": 15,
          "unit_types": [
            {
              "name": "liters_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_imperial_gallon",
              "id": 1,
              "conversion_inverse": 282.4809363
            },
            {
              "name": "miles_per_gallon",
              "id": 2,
              "conversion_inverse": 235.2145833
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 16,
        "name": "odometer_after_last_trip",
        "name_cased": "odometerAfterLastTrip",
        "name_pretty": "Odometer after last trip",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Odometer after the last trip",
        "examples": [
          {
            "data_component": "120440f7590000000000",
            "value": {
              "kilometers": 95632
            },
            "description": "Odometer is 95'632km after last trip"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "safety_driving_score",
        "name_cased": "safetyDrivingScore",
        "name_pretty": "Safety driving score",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Safety driving score as percentage",
        "id": 17,
        "added": 12,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Safety driving score is evaluated at 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "name": "rapid_acceleration_grade",
        "name_cased": "rapidAccelerationGrade",
        "name_pretty": "Rapid acceleration grade",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "excellent"
          },
          {
            "id": 1,
            "name": "normal"
          },
          {
            "id": 2,
            "name": "warning"
          }
        ],
        "id": 18,
        "added": 12,
        "description": "Grade given for rapid acceleration over time",
        "examples": [
          {
            "data_component": "00",
            "value": "excellent",
            "description": "Rapid acceleration is graded as excellent"
          }
        ],
        "customType": "grade",
        "capabilityName": "usage"
      },
      {
        "name": "rapid_deceleration_grade",
        "name_cased": "rapidDecelerationGrade",
        "name_pretty": "Rapid deceleration grade",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "excellent"
          },
          {
            "id": 1,
            "name": "normal"
          },
          {
            "id": 2,
            "name": "warning"
          }
        ],
        "id": 19,
        "added": 12,
        "description": "Grade given for rapid deceleration over time",
        "examples": [
          {
            "data_component": "01",
            "value": "normal",
            "description": "Rapid deceleration is graded as normal"
          }
        ],
        "customType": "grade",
        "capabilityName": "usage"
      },
      {
        "name": "late_night_grade",
        "name_cased": "lateNightGrade",
        "name_pretty": "Late night grade",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "excellent"
          },
          {
            "id": 1,
            "name": "normal"
          },
          {
            "id": 2,
            "name": "warning"
          }
        ],
        "id": 20,
        "added": 12,
        "description": "Grade given for late night driving over time",
        "examples": [
          {
            "data_component": "00",
            "value": "excellent",
            "description": "Late night driving is graded as excellent"
          }
        ],
        "customType": "grade",
        "capabilityName": "usage"
      },
      {
        "name": "distance_over_time",
        "name_cased": "distanceOverTime",
        "name_pretty": "Distance over time",
        "type": "custom",
        "size": 20,
        "items": [
          {
            "name": "distance",
            "name_cased": "distance",
            "type": "unit.length",
            "size": 10,
            "description": "Distance driven",
            "unit": {
              "name": "length",
              "id": 18,
              "unit_types": [
                {
                  "name": "meters",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "millimeters",
                  "id": 1,
                  "conversion_linear": 0.001
                },
                {
                  "name": "centimeters",
                  "id": 2,
                  "conversion_linear": 0.01
                },
                {
                  "name": "decimeters",
                  "id": 3,
                  "conversion_linear": 0.1
                },
                {
                  "name": "kilometers",
                  "id": 4,
                  "conversion_linear": 1000
                },
                {
                  "name": "megameters",
                  "id": 5,
                  "conversion_linear": 1000000
                },
                {
                  "name": "inches",
                  "id": 11,
                  "conversion_linear": 0.0254
                },
                {
                  "name": "feet",
                  "id": 12,
                  "conversion_linear": 0.3048
                },
                {
                  "name": "yards",
                  "id": 13,
                  "conversion_linear": 0.9144
                },
                {
                  "name": "miles",
                  "id": 14,
                  "conversion_linear": 1609.344
                },
                {
                  "name": "scandinavian_miles",
                  "id": 15,
                  "conversion_linear": 10000
                },
                {
                  "name": "nautical_miles",
                  "id": 17,
                  "conversion_linear": 1852
                }
              ]
            },
            "capabilityName": "usage"
          },
          {
            "name": "time",
            "name_cased": "time",
            "type": "unit.duration",
            "size": 10,
            "description": "Duration of time for the given distance",
            "unit": {
              "name": "duration",
              "id": 7,
              "unit_types": [
                {
                  "name": "seconds",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "minutes",
                  "id": 1,
                  "conversion_linear": 60
                },
                {
                  "name": "hours",
                  "id": 2,
                  "conversion_linear": 3600
                },
                {
                  "name": "days",
                  "id": 3,
                  "conversion_linear": 86400
                },
                {
                  "name": "weeks",
                  "id": 4,
                  "conversion_linear": 604800
                },
                {
                  "name": "months",
                  "id": 5,
                  "conversion_linear": 2629800
                }
              ]
            },
            "capabilityName": "usage"
          }
        ],
        "id": 21,
        "added": 12,
        "description": "Distance driven over a given time period",
        "examples": [
          {
            "data_component": "1204409773851eb851ec07044024000000000000",
            "values": {
              "distance": {
                "kilometers": 1500.88
              },
              "time": {
                "weeks": 10
              }
            },
            "description": "During the last 10.0 weeks the vehicle travelled 1500.88km"
          }
        ],
        "customType": "distance_over_time",
        "capabilityName": "usage"
      },
      {
        "id": 22,
        "name": "electric_consumption_rate_since_start",
        "name_cased": "electricConsumptionRateSinceStart",
        "name_pretty": "Electric consumption rate since start",
        "added": 12,
        "type": "unit.energy_efficiency",
        "size": 10,
        "description": "Electric energy consumption rate since the start of a trip",
        "examples": [
          {
            "data_component": "0d00402670a3d70a3d71",
            "value": {
              "kwh_per_100_kilometers": 11.22
            },
            "description": "Consumed 11.22kWh/100km since the start of a trip"
          }
        ],
        "unit": {
          "name": "energy_efficiency",
          "id": 13,
          "unit_types": [
            {
              "name": "kwh_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_kwh",
              "id": 1,
              "conversion_inverse": 62.1371192237334
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 23,
        "name": "electric_consumption_rate_since_reset",
        "name_cased": "electricConsumptionRateSinceReset",
        "name_pretty": "Electric consumption rate since reset",
        "added": 12,
        "type": "unit.energy_efficiency",
        "size": 10,
        "description": "Electric energy consumption rate since a reset",
        "examples": [
          {
            "data_component": "0d004036547ae147ae14",
            "value": {
              "kwh_per_100_kilometers": 22.33
            },
            "description": "Consumed 22.33kWh/100km since a reset"
          }
        ],
        "unit": {
          "name": "energy_efficiency",
          "id": 13,
          "unit_types": [
            {
              "name": "kwh_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_kwh",
              "id": 1,
              "conversion_inverse": 62.1371192237334
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 24,
        "name": "electric_distance_last_trip",
        "name_cased": "electricDistanceLastTrip",
        "name_pretty": "Electric distance last trip",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance travelled with electricity in last trip",
        "examples": [
          {
            "data_component": "120040fb198000000000",
            "value": {
              "meters": 111000
            },
            "description": "Vehicle travelled 111000.0m using electricity during the last trip"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 25,
        "name": "electric_distance_since_reset",
        "name_cased": "electricDistanceSinceReset",
        "name_pretty": "Electric distance since reset",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance travelled with electricity since reset",
        "examples": [
          {
            "data_component": "1200410b198000000000",
            "value": {
              "meters": 222000
            },
            "description": "Vehicle travelled 222000.0m using electricity since last reset"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 26,
        "name": "electric_duration_last_trip",
        "name_cased": "electricDurationLastTrip",
        "name_pretty": "Electric duration last trip",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Duration of travelling using electricity during last trip",
        "examples": [
          {
            "data_component": "07014053400000000000",
            "value": {
              "minutes": 77
            },
            "description": "Vehicle travelled 77.0min using electricity during last trip"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 27,
        "name": "electric_duration_since_reset",
        "name_cased": "electricDurationSinceReset",
        "name_pretty": "Electric duration since reset",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Duration of travelling using electricity since reset",
        "examples": [
          {
            "data_component": "07014056000000000000",
            "value": {
              "minutes": 88
            },
            "description": "Vehicle travelled 88.0min using electricity since last reset"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 28,
        "name": "fuel_consumption_rate_last_trip",
        "name_cased": "fuelConsumptionRateLastTrip",
        "name_pretty": "Fuel consumption rate last trip",
        "added": 12,
        "type": "unit.fuel_efficiency",
        "size": 10,
        "description": "Liquid fuel consumption rate during last trip",
        "examples": [
          {
            "data_component": "0f00401599999999999a",
            "value": {
              "liters_per_100_kilometers": 5.4
            },
            "description": "Consumed 5.4 L/100km during last trip"
          }
        ],
        "unit": {
          "name": "fuel_efficiency",
          "id": 15,
          "unit_types": [
            {
              "name": "liters_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_imperial_gallon",
              "id": 1,
              "conversion_inverse": 282.4809363
            },
            {
              "name": "miles_per_gallon",
              "id": 2,
              "conversion_inverse": 235.2145833
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 29,
        "name": "fuel_consumption_rate_since_reset",
        "name_cased": "fuelConsumptionRateSinceReset",
        "name_pretty": "Fuel consumption rate since reset",
        "added": 12,
        "type": "unit.fuel_efficiency",
        "size": 10,
        "description": "Liquid fuel consumption rate since reset",
        "examples": [
          {
            "data_component": "0f004015333333333333",
            "value": {
              "liters_per_100_kilometers": 5.3
            },
            "description": "Consumed 5.3 L/100km since reset"
          }
        ],
        "unit": {
          "name": "fuel_efficiency",
          "id": 15,
          "unit_types": [
            {
              "name": "liters_per_100_kilometers",
              "id": 0,
              "conversion_inverse": 1
            },
            {
              "name": "miles_per_imperial_gallon",
              "id": 1,
              "conversion_inverse": 282.4809363
            },
            {
              "name": "miles_per_gallon",
              "id": 2,
              "conversion_inverse": 235.2145833
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 30,
        "name": "average_speed_last_trip",
        "name_cased": "averageSpeedLastTrip",
        "name_pretty": "Average speed last trip",
        "added": 12,
        "type": "unit.speed",
        "size": 10,
        "description": "Average speed during last trip",
        "examples": [
          {
            "data_component": "1601404619999999999a",
            "value": {
              "kilometers_per_hour": 44.2
            },
            "description": "Average speed was 44.2km/h during last trip"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 31,
        "name": "average_speed_since_reset",
        "name_cased": "averageSpeedSinceReset",
        "name_pretty": "Average speed since reset",
        "added": 12,
        "type": "unit.speed",
        "size": 10,
        "description": "Average speed since reset",
        "examples": [
          {
            "data_component": "1601404619999999999a",
            "value": {
              "kilometers_per_hour": 44.2
            },
            "description": "Average speed was 44.2km/h since reset"
          }
        ],
        "unit": {
          "name": "speed",
          "id": 22,
          "unit_types": [
            {
              "name": "meters_per_second",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "kilometers_per_hour",
              "id": 1,
              "conversion_linear": 0.27777777777778
            },
            {
              "name": "miles_per_hour",
              "id": 2,
              "conversion_linear": 0.44704
            },
            {
              "name": "knots",
              "id": 3,
              "conversion_linear": 0.51444444444
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 32,
        "name": "fuel_distance_last_trip",
        "name_cased": "fuelDistanceLastTrip",
        "name_pretty": "Fuel distance last trip",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance travelled with (liquid) fuel during last trip",
        "examples": [
          {
            "data_component": "120040fb198000000000",
            "value": {
              "meters": 111000
            },
            "description": "Vehicle travelled 111000.0m using fuel during the last trip"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 33,
        "name": "fuel_distance_since_reset",
        "name_cased": "fuelDistanceSinceReset",
        "name_pretty": "Fuel distance since reset",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Distance travelled with (liquid) fuel since reset",
        "examples": [
          {
            "data_component": "1200410b198000000000",
            "value": {
              "meters": 222000
            },
            "description": "Vehicle travelled 222000.0m using fuel since last reset"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 34,
        "name": "driving_duration_last_trip",
        "name_cased": "drivingDurationLastTrip",
        "name_pretty": "Driving duration last trip",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Duration of last trip",
        "examples": [
          {
            "data_component": "07014053400000000000",
            "value": {
              "minutes": 77
            },
            "description": "Vehicle travelled 77.0min during last trip"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "id": 35,
        "name": "driving_duration_since_reset",
        "name_cased": "drivingDurationSinceReset",
        "name_pretty": "Driving duration since reset",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Duration of travelling since reset",
        "examples": [
          {
            "data_component": "07014056000000000000",
            "value": {
              "minutes": 88
            },
            "description": "Vehicle travelled 88.0min since last reset"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "eco_score_total",
        "name_cased": "ecoScoreTotal",
        "name_pretty": "Eco-score total",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Overall eco-score rating",
        "id": 36,
        "added": 12,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Total eco-score rating is 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "name": "eco_score_free_wheel",
        "name_cased": "ecoScoreFreeWheel",
        "name_pretty": "Eco-score free wheel",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Eco-score rating for free-wheeling",
        "id": 37,
        "added": 12,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Eco-score free-wheeling rating is 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "name": "eco_score_constant",
        "name_cased": "ecoScoreConstant",
        "name_pretty": "Eco-score constant",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Eco-score rating constant",
        "id": 38,
        "added": 12,
        "examples": [
          {
            "data_component": "3fe6666666666666",
            "value": 0.7,
            "description": "Eco-score constant is 70%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "usage"
      },
      {
        "id": 39,
        "name": "eco_score_bonus_range",
        "name_cased": "ecoScoreBonusRange",
        "name_pretty": "Eco-score bonus range",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "description": "Eco-score bonus range",
        "examples": [
          {
            "data_component": "12043fe6666666666666",
            "value": {
              "kilometers": 0.7
            },
            "description": "Eco-score bonus range is 0.7km"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "usage"
      },
      {
        "name": "trip_meters",
        "name_cased": "tripMeters",
        "name_pretty": "Trip meters",
        "type": "custom",
        "size": 11,
        "description": "Independent meter that can be reset at any time by the driver",
        "items": [
          {
            "name": "id",
            "name_cased": "id",
            "name_pretty": "ID",
            "type": "uinteger",
            "size": 1,
            "capabilityName": "usage"
          },
          {
            "name": "distance",
            "name_cased": "distance",
            "type": "unit.length",
            "size": 10,
            "unit": {
              "name": "length",
              "id": 18,
              "unit_types": [
                {
                  "name": "meters",
                  "id": 0,
                  "conversion_linear": 1
                },
                {
                  "name": "millimeters",
                  "id": 1,
                  "conversion_linear": 0.001
                },
                {
                  "name": "centimeters",
                  "id": 2,
                  "conversion_linear": 0.01
                },
                {
                  "name": "decimeters",
                  "id": 3,
                  "conversion_linear": 0.1
                },
                {
                  "name": "kilometers",
                  "id": 4,
                  "conversion_linear": 1000
                },
                {
                  "name": "megameters",
                  "id": 5,
                  "conversion_linear": 1000000
                },
                {
                  "name": "inches",
                  "id": 11,
                  "conversion_linear": 0.0254
                },
                {
                  "name": "feet",
                  "id": 12,
                  "conversion_linear": 0.3048
                },
                {
                  "name": "yards",
                  "id": 13,
                  "conversion_linear": 0.9144
                },
                {
                  "name": "miles",
                  "id": 14,
                  "conversion_linear": 1609.344
                },
                {
                  "name": "scandinavian_miles",
                  "id": 15,
                  "conversion_linear": 10000
                },
                {
                  "name": "nautical_miles",
                  "id": 17,
                  "conversion_linear": 1852
                }
              ]
            },
            "capabilityName": "usage"
          }
        ],
        "id": 40,
        "name_singular": "trip_meter",
        "added": 13,
        "multiple": true,
        "examples": [
          {
            "data_component": "011204407c833333333333",
            "values": {
              "id": 1,
              "distance": {
                "kilometers": 456.2
              }
            },
            "description": "Trip meter 1`s distance is 456.2km"
          },
          {
            "data_component": "02120440a372999999999a",
            "values": {
              "id": 2,
              "distance": {
                "kilometers": 2489.3
              }
            },
            "description": "Trip meter 2`s distance is 2489.3km"
          }
        ],
        "customType": "trip_meter",
        "capabilityName": "usage"
      }
    ]
  },
  "valet_mode": {
    "name": "valet_mode",
    "name_cased": "valetMode",
    "name_pretty": "Valet Mode",
    "category": "parking",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 40
    },
    "api": {
      "intro": 3,
      "update": 11
    },
    "getters": {
      "name": "get_valet_mode"
    },
    "setters": [
      {
        "name": "activate_deactivate_valet_mode",
        "mandatory": [
          1
        ],
        "description": "Activate or deactivate valet mode."
      }
    ],
    "state": [
      1
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "active",
            "description": "Valet mode is active"
          }
        ],
        "customType": "active_state",
        "capabilityName": "valetMode"
      }
    ]
  },
  "vehicle_information": {
    "name": "vehicle_information",
    "name_cased": "vehicleInformation",
    "name_pretty": "Vehicle Information",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 20
    },
    "api": {
      "intro": 12,
      "update": 13
    },
    "getters": {
      "name": "get_vehicle_information"
    },
    "state": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22,
      23
    ],
    "properties": [
      {
        "name": "powertrain",
        "name_cased": "powertrain",
        "name_pretty": "Powertrain",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unknown"
          },
          {
            "id": 1,
            "name": "all_electric"
          },
          {
            "id": 2,
            "name": "combustion_engine"
          },
          {
            "id": 3,
            "name": "phev",
            "name_pretty": "Plug-in Hybrid EV"
          },
          {
            "id": 4,
            "name": "hydrogen"
          },
          {
            "id": 5,
            "name": "hydrogen_hybrid"
          },
          {
            "id": 6,
            "name": "petrol"
          },
          {
            "id": 7,
            "name": "electric"
          },
          {
            "id": 8,
            "name": "gas"
          },
          {
            "id": 9,
            "name": "diesel"
          },
          {
            "id": 10,
            "name": "gasoline"
          },
          {
            "id": 11,
            "name": "cng",
            "name_pretty": "Compressed natural gas"
          },
          {
            "id": 12,
            "name": "lpg",
            "name_pretty": "Liquefied petroleum gas"
          }
        ],
        "id": 2,
        "added": 12,
        "description": "Type of the (primary) powertrain",
        "examples": [
          {
            "data_component": "01",
            "value": "all_electric",
            "description": "Powertrain is all electric"
          }
        ],
        "customType": "engine_type",
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 3,
        "name": "model_name",
        "name_cased": "modelName",
        "name_pretty": "Model name",
        "added": 12,
        "type": "string",
        "description": "The vehicle model name",
        "examples": [
          {
            "data_component": "547970652058",
            "value": "Type X",
            "description": "Model name is 'Type X'"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 4,
        "name": "name",
        "name_cased": "name",
        "name_pretty": "Name",
        "added": 12,
        "type": "string",
        "description": "The vehicle name (nickname)",
        "examples": [
          {
            "data_component": "537065656479",
            "value": "Speedy",
            "description": "Name of the vehicle is 'Speedy'"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 5,
        "name": "license_plate",
        "name_cased": "licensePlate",
        "name_pretty": "Licence plate",
        "added": 12,
        "type": "string",
        "description": "The license plate number",
        "examples": [
          {
            "data_component": "414243313233",
            "value": "ABC123",
            "description": "Licence plate number is 'ABC123'"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 6,
        "name": "sales_designation",
        "name_cased": "salesDesignation",
        "name_pretty": "Sales designation",
        "added": 12,
        "type": "string",
        "description": "The sales designation of the model",
        "examples": [
          {
            "data_component": "5061636b6167652b",
            "value": "Package+",
            "description": "Sales designation is 'Package+'"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 7,
        "name": "model_year",
        "name_cased": "modelYear",
        "name_pretty": "Model year",
        "added": 12,
        "type": "uinteger",
        "size": 2,
        "description": "The vehicle model manufacturing year number",
        "examples": [
          {
            "data_component": "07e3",
            "value": 2019,
            "description": "Vehicle manufacturing year is 2019"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 8,
        "name": "colour_name",
        "name_cased": "colourName",
        "name_pretty": "Colour name",
        "added": 12,
        "type": "string",
        "description": "The colour name",
        "examples": [
          {
            "data_component": "4573746f72696c20426c6175",
            "value": "Estoril Blau",
            "description": "Colour is named 'Estoril Blau'"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 9,
        "name": "power_in_kw",
        "name_cased": "powerInKW",
        "name_pretty": "Power in kW",
        "added": 12,
        "deprecated": {
          "new_name": "power",
          "reason": "removed the unit from the name"
        },
        "type": "unit.power",
        "size": 10,
        "description": "The power of the vehicle",
        "examples": [
          {
            "data_component": "1402406b800000000000",
            "value": {
              "kilowatts": 220
            },
            "description": "Vehicle has 220.0kW of power"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 10,
        "name": "number_of_doors",
        "name_cased": "numberOfDoors",
        "name_pretty": "Number of doors",
        "added": 12,
        "type": "uinteger",
        "size": 1,
        "description": "The number of doors",
        "examples": [
          {
            "data_component": "05",
            "value": 5,
            "description": "Vehicle has 5 doors"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 11,
        "name": "number_of_seats",
        "name_cased": "numberOfSeats",
        "name_pretty": "Number of seats",
        "added": 12,
        "type": "uinteger",
        "size": 1,
        "description": "The number of seats",
        "examples": [
          {
            "data_component": "05",
            "value": 5,
            "description": "Vehicle has 5 seats"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 12,
        "name": "engine_volume",
        "name_cased": "engineVolume",
        "name_pretty": "Engine volume",
        "added": 12,
        "type": "unit.volume",
        "size": 10,
        "description": "The engine volume displacement",
        "examples": [
          {
            "data_component": "19024004000000000000",
            "value": {
              "liters": 2.5
            },
            "description": "Engine volume is 2.5 L"
          }
        ],
        "unit": {
          "name": "volume",
          "id": 25,
          "unit_types": [
            {
              "name": "liters",
              "id": 2,
              "conversion_linear": 1
            },
            {
              "name": "milliliters",
              "id": 3,
              "conversion_linear": 0.001
            },
            {
              "name": "centiliters",
              "id": 4,
              "conversion_linear": 0.01
            },
            {
              "name": "deciliters",
              "id": 5,
              "conversion_linear": 0.1
            },
            {
              "name": "cubic_millimeters",
              "id": 10,
              "conversion_linear": 0.000001
            },
            {
              "name": "cubic_centimeters",
              "id": 9,
              "conversion_linear": 0.001
            },
            {
              "name": "cubic_decimeters",
              "id": 8,
              "conversion_linear": 1
            },
            {
              "name": "cubic_meters",
              "id": 7,
              "conversion_linear": 1000
            },
            {
              "name": "cubic_inches",
              "id": 11,
              "conversion_linear": 0.016387064
            },
            {
              "name": "cubic_feet",
              "id": 12,
              "conversion_linear": 28.316846592
            },
            {
              "name": "fluid_ounces",
              "id": 19,
              "conversion_linear": 0.0295735296875
            },
            {
              "name": "gallons",
              "id": 23,
              "conversion_linear": 3.785411784
            },
            {
              "name": "imperial_fluid_ounces",
              "id": 26,
              "conversion_linear": 0.0284130625
            },
            {
              "name": "imperial_gallons",
              "id": 29,
              "conversion_linear": 4.54609
            }
          ]
        },
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 13,
        "name": "engine_max_torque",
        "name_cased": "engineMaxTorque",
        "name_pretty": "Engine max torque",
        "added": 12,
        "type": "unit.torque",
        "size": 10,
        "description": "The maximum engine torque",
        "examples": [
          {
            "data_component": "1800406ea00000000000",
            "value": {
              "newton_meters": 245
            },
            "description": "Engine maximum torque is 245.0Nm"
          }
        ],
        "unit": {
          "name": "torque",
          "id": 24,
          "unit_types": [
            {
              "name": "newton_meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "newton_millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "pound_feet",
              "id": 2,
              "conversion_linear": 0.73756214927727
            }
          ]
        },
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 14,
        "name": "gearbox",
        "name_cased": "gearbox",
        "name_pretty": "Gearbox",
        "added": 12,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "manual"
          },
          {
            "id": 1,
            "name": "automatic"
          },
          {
            "id": 2,
            "name": "semi_automatic"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "automatic",
            "description": "Vehicle has an automatic gearbox"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 15,
        "name": "display_unit",
        "name_cased": "displayUnit",
        "name_pretty": "Display unit",
        "added": 12,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "km"
          },
          {
            "id": 1,
            "name": "miles"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "km",
            "description": "Vehicle displays values in kilometers"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 16,
        "name": "driver_seat_location",
        "name_cased": "driverSeatLocation",
        "name_pretty": "Driver seat location",
        "added": 12,
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "left"
          },
          {
            "id": 1,
            "name": "right"
          },
          {
            "id": 2,
            "name": "center"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "left",
            "description": "Driver seat is located on the left"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 17,
        "name": "equipments",
        "name_cased": "equipments",
        "name_pretty": "Equipments",
        "added": 12,
        "type": "string",
        "multiple": true,
        "name_singular": "equipment",
        "description": "Names of equipment the vehicle is equipped with",
        "examples": [
          {
            "data_component": "5061726b696e672073656e736f7273",
            "value": "Parking sensors",
            "description": "Parking sensors are equipped (installed)"
          },
          {
            "data_component": "4175746f6d6174696320776970657273",
            "value": "Automatic wipers",
            "description": "Automatic wipers are equipped (installed)"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 19,
        "name": "power",
        "name_cased": "power",
        "name_pretty": "Power",
        "added": 12,
        "type": "unit.power",
        "size": 10,
        "description": "The power of the vehicle",
        "examples": [
          {
            "data_component": "1402406b800000000000",
            "value": {
              "kilowatts": 220
            },
            "description": "Vehicle has 220kW of power"
          }
        ],
        "unit": {
          "name": "power",
          "id": 20,
          "unit_types": [
            {
              "name": "watts",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "milliwatts",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "kilowatts",
              "id": 2,
              "conversion_linear": 1000
            },
            {
              "name": "megawatts",
              "id": 3,
              "conversion_linear": 1000000
            },
            {
              "name": "horsepower",
              "id": 10,
              "conversion_linear": 745.7
            }
          ]
        },
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 20,
        "name": "language",
        "name_cased": "language",
        "name_pretty": "Language",
        "added": 12,
        "type": "string",
        "description": "The language on headunit",
        "examples": [
          {
            "data_component": "6573746f6e69616e",
            "value": "estonian",
            "description": "Headunit is in estonian language"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 21,
        "name": "timeformat",
        "name_cased": "timeformat",
        "name_pretty": "Timeformat",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "The timeformat on headunit",
        "enum_values": [
          {
            "id": 0,
            "name": "twelve_h"
          },
          {
            "id": 1,
            "name": "twenty_four_h"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "twenty_four_h",
            "description": "Headunit is using a 24h timeformat"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "id": 22,
        "name": "drive",
        "name_cased": "drive",
        "name_pretty": "Drive",
        "added": 12,
        "type": "enum",
        "size": 1,
        "description": "Wheels driven by the engine",
        "enum_values": [
          {
            "id": 0,
            "name": "fwd",
            "description": "Front-wheel drive"
          },
          {
            "id": 1,
            "name": "rwd",
            "description": "Rear-wheel drive"
          },
          {
            "id": 2,
            "name": "four_wd",
            "description": "Four-wheel drive"
          },
          {
            "id": 3,
            "name": "awd",
            "description": "All-wheel drive"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "rwd",
            "description": "Vehicle has rear-wheel drive"
          }
        ],
        "capabilityName": "vehicleInformation"
      },
      {
        "name": "powertrain_secondary",
        "name_cased": "powertrainSecondary",
        "name_pretty": "Powertrain secondary",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unknown"
          },
          {
            "id": 1,
            "name": "all_electric"
          },
          {
            "id": 2,
            "name": "combustion_engine"
          },
          {
            "id": 3,
            "name": "phev",
            "name_pretty": "Plug-in Hybrid EV"
          },
          {
            "id": 4,
            "name": "hydrogen"
          },
          {
            "id": 5,
            "name": "hydrogen_hybrid"
          },
          {
            "id": 6,
            "name": "petrol"
          },
          {
            "id": 7,
            "name": "electric"
          },
          {
            "id": 8,
            "name": "gas"
          },
          {
            "id": 9,
            "name": "diesel"
          },
          {
            "id": 10,
            "name": "gasoline"
          },
          {
            "id": 11,
            "name": "cng",
            "name_pretty": "Compressed natural gas"
          },
          {
            "id": 12,
            "name": "lpg",
            "name_pretty": "Liquefied petroleum gas"
          }
        ],
        "id": 23,
        "added": 13,
        "examples": [
          {
            "data_component": "06",
            "value": "petrol",
            "description": "Secondary powertrain`s type is petrol."
          }
        ],
        "customType": "engine_type",
        "capabilityName": "vehicleInformation"
      }
    ]
  },
  "vehicle_location": {
    "name": "vehicle_location",
    "name_cased": "vehicleLocation",
    "name_pretty": "Vehicle Location",
    "category": "poi",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 48
    },
    "api": {
      "intro": 2,
      "update": 13
    },
    "getters": {
      "name": "get_vehicle_location"
    },
    "state": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "properties": [
      {
        "name": "coordinates",
        "name_cased": "coordinates",
        "name_pretty": "Coordinates",
        "type": "custom",
        "size": 16,
        "items": [
          {
            "name": "latitude",
            "name_cased": "latitude",
            "validation": "min:-90|max:90",
            "type": "double",
            "size": 8,
            "description": "Latitude",
            "capabilityName": "vehicleLocation"
          },
          {
            "name": "longitude",
            "name_cased": "longitude",
            "validation": "min:-180|max:180",
            "type": "double",
            "size": 8,
            "description": "Longitude",
            "capabilityName": "vehicleLocation"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "404a428f9f44d445402acf562174c4ce",
            "values": {
              "latitude": 52.520008,
              "longitude": 13.404954
            },
            "description": "Vehicle coordinates are 52.520008:13.404954"
          }
        ],
        "customType": "coordinates",
        "capabilityName": "vehicleLocation"
      },
      {
        "id": 5,
        "name": "heading",
        "name_cased": "heading",
        "name_pretty": "Heading",
        "type": "unit.angle",
        "size": 10,
        "description": "Heading angle",
        "examples": [
          {
            "data_component": "0200402abd80c308feac",
            "value": {
              "degrees": 13.370123
            },
            "description": "Heading direction is 13.370123°"
          }
        ],
        "unit": {
          "name": "angle",
          "id": 2,
          "unit_types": [
            {
              "name": "degrees",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "radians",
              "id": 3,
              "conversion_linear": 57.29578
            },
            {
              "name": "revolutions",
              "id": 5,
              "conversion_linear": 360
            }
          ]
        },
        "capabilityName": "vehicleLocation"
      },
      {
        "id": 6,
        "name": "altitude",
        "name_cased": "altitude",
        "name_pretty": "Altitude",
        "type": "unit.length",
        "size": 10,
        "description": "Altitude above the WGS 84 reference ellipsoid",
        "examples": [
          {
            "data_component": "12004060b00000000000",
            "value": {
              "meters": 133.5
            },
            "description": "Vehicle altitude is 133.5m"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "vehicleLocation"
      },
      {
        "id": 7,
        "name": "precision",
        "name_cased": "precision",
        "name_pretty": "Precision",
        "added": 12,
        "type": "unit.length",
        "size": 10,
        "examples": [
          {
            "data_component": "1200407f400000000000",
            "value": {
              "meters": 500
            },
            "description": "Precision is 500m"
          }
        ],
        "unit": {
          "name": "length",
          "id": 18,
          "unit_types": [
            {
              "name": "meters",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "millimeters",
              "id": 1,
              "conversion_linear": 0.001
            },
            {
              "name": "centimeters",
              "id": 2,
              "conversion_linear": 0.01
            },
            {
              "name": "decimeters",
              "id": 3,
              "conversion_linear": 0.1
            },
            {
              "name": "kilometers",
              "id": 4,
              "conversion_linear": 1000
            },
            {
              "name": "megameters",
              "id": 5,
              "conversion_linear": 1000000
            },
            {
              "name": "inches",
              "id": 11,
              "conversion_linear": 0.0254
            },
            {
              "name": "feet",
              "id": 12,
              "conversion_linear": 0.3048
            },
            {
              "name": "yards",
              "id": 13,
              "conversion_linear": 0.9144
            },
            {
              "name": "miles",
              "id": 14,
              "conversion_linear": 1609.344
            },
            {
              "name": "scandinavian_miles",
              "id": 15,
              "conversion_linear": 10000
            },
            {
              "name": "nautical_miles",
              "id": 17,
              "conversion_linear": 1852
            }
          ]
        },
        "capabilityName": "vehicleLocation"
      },
      {
        "id": 8,
        "name": "gps_source",
        "name_cased": "gpsSource",
        "name_pretty": "GPS source",
        "added": 13,
        "type": "enum",
        "size": 1,
        "description": "Type of GPS source",
        "enum_values": [
          {
            "id": 0,
            "name": "dead_reckoning"
          },
          {
            "id": 1,
            "name": "real"
          },
          {
            "id": 2,
            "name": "none"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "real",
            "description": "The GPS signal is from a real source"
          }
        ],
        "capabilityName": "vehicleLocation"
      },
      {
        "name": "gps_signal_strength",
        "name_cased": "gpsSignalStrength",
        "name_pretty": "GPS signal strength",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "GPS signal strength percentage between 0.0-1.0",
        "id": 9,
        "added": 13,
        "examples": [
          {
            "data_component": "3fe999999999999a",
            "value": 0.8,
            "description": "GPS signal strength is 80%"
          }
        ],
        "customType": "percentage",
        "capabilityName": "vehicleLocation"
      }
    ]
  },
  "vehicle_status": {
    "name": "vehicle_status",
    "name_cased": "vehicleStatus",
    "name_pretty": "Vehicle Status",
    "category": "api_structure",
    "authorization": false,
    "identifier": {
      "msb": 0,
      "lsb": 17
    },
    "api": {
      "intro": 2,
      "update": 12
    },
    "getters": {
      "name": "get_vehicle_status"
    },
    "state": [
      153
    ],
    "properties": [
      {
        "name": "states",
        "name_cased": "states",
        "name_pretty": "States",
        "type": "bytes",
        "description": "The bytes of a Capability state",
        "id": 153,
        "name_singular": "state",
        "multiple": true,
        "examples": [
          {
            "data_component": "0c0020010600040100010004000501000200010400050100020201a2000b010008000001598938e788",
            "values": {
              "doors": {
                "locks_state": "unlocked",
                "positions": [
                  {
                    "location": "front_left",
                    "position": "open"
                  },
                  {
                    "location": "rear_right",
                    "position": "open"
                  }
                ],
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Doors capability - front left and rear right door is open while locks are unlocked, recorded at 10. January 2017 at 16:32:05 GMT"
          },
          {
            "data_component": "0c0023010b0004010001010c00040100010018000d01000a140240418000000000001c000d01000a12044081580000000000a2000b010008000001598938e788",
            "values": {
              "charging": {
                "charge_port_state": "open",
                "charge_mode": "immediate",
                "charging_rate": {
                  "kilowatts": 35
                },
                "max_range": {
                  "kilometers": 555
                },
                "timestamp": "2017-01-10T16:32:05.000Z"
              }
            },
            "description": "Charging capability - charging port is open, charge mode is immediate, charging rate is 35.0kW and max range is 555.0km, recorded at 10. January 2017 at 16:32:05 GMT"
          }
        ],
        "customType": "capability_state",
        "capabilityName": "vehicleStatus"
      }
    ]
  },
  "vehicle_time": {
    "name": "vehicle_time",
    "name_cased": "vehicleTime",
    "name_pretty": "Vehicle Time",
    "category": "poi",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 80
    },
    "api": {
      "intro": 5,
      "update": 11
    },
    "getters": {
      "name": "get_vehicle_time"
    },
    "state": [
      1
    ],
    "properties": [
      {
        "name": "vehicle_time",
        "name_cased": "vehicleTime",
        "name_pretty": "Vehicle time",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "hour",
            "name_cased": "hour",
            "unit_sign": "h",
            "validation": "min:0|max:23",
            "type": "uinteger",
            "size": 1,
            "description": "Value between 0 and 23",
            "capabilityName": "vehicleTime"
          },
          {
            "name": "minute",
            "name_cased": "minute",
            "unit_sign": "m",
            "validation": "min:0|max:59",
            "type": "uinteger",
            "size": 1,
            "description": "Value between 0 and 59",
            "capabilityName": "vehicleTime"
          }
        ],
        "id": 1,
        "description": "Vehicle time in a 24h format",
        "examples": [
          {
            "data_component": "1337",
            "values": {
              "hour": 19,
              "minute": 55
            },
            "description": "Vehicle time is 19:55"
          }
        ],
        "customType": "time",
        "capabilityName": "vehicleTime"
      }
    ]
  },
  "video_handover": {
    "name": "video_handover",
    "name_cased": "videoHandover",
    "name_pretty": "Video Handover",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 67
    },
    "api": {
      "intro": 4,
      "update": 12
    },
    "setters": [
      {
        "name": "video_handover",
        "mandatory": [
          1
        ],
        "optional": [
          4,
          3
        ],
        "description": "Hand over a video from smart device to vehicle headunit to be shown in the vehicle display. The emulator supports HTML5 video player formats .mp4 and .webm."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "url",
        "name_cased": "url",
        "name_pretty": "URL",
        "type": "string",
        "description": "URL string",
        "examples": [
          {
            "data_component": "68747470733a2f2f6269742e6c792f326f6259374735",
            "value": "https://bit.ly/2obY7G5",
            "description": "Video URL is 'https://bit.ly/2obY7G5'"
          }
        ],
        "capabilityName": "videoHandover"
      },
      {
        "id": 2,
        "name": "starting_second",
        "name_cased": "startingSecond",
        "name_pretty": "Starting second",
        "deprecated": {
          "new_name": "starting_time",
          "reason": "removed the unit from the name"
        },
        "type": "unit.duration",
        "size": 10,
        "description": "Start the video from the given time",
        "examples": [
          {
            "data_component": "07004008000000000000",
            "value": {
              "seconds": 3
            },
            "description": "Start from 3.0s"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "videoHandover"
      },
      {
        "id": 3,
        "name": "screen",
        "name_cased": "screen",
        "name_pretty": "Screen",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "front"
          },
          {
            "id": 1,
            "name": "rear"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "rear",
            "description": "Play the video on the rear screen"
          }
        ],
        "capabilityName": "videoHandover"
      },
      {
        "id": 4,
        "name": "starting_time",
        "name_cased": "startingTime",
        "name_pretty": "Starting time",
        "added": 12,
        "type": "unit.duration",
        "size": 10,
        "description": "Start the video from the given time",
        "examples": [
          {
            "data_component": "07004004000000000000",
            "value": {
              "seconds": 2.5
            },
            "description": "Start from 2.5s"
          }
        ],
        "unit": {
          "name": "duration",
          "id": 7,
          "unit_types": [
            {
              "name": "seconds",
              "id": 0,
              "conversion_linear": 1
            },
            {
              "name": "minutes",
              "id": 1,
              "conversion_linear": 60
            },
            {
              "name": "hours",
              "id": 2,
              "conversion_linear": 3600
            },
            {
              "name": "days",
              "id": 3,
              "conversion_linear": 86400
            },
            {
              "name": "weeks",
              "id": 4,
              "conversion_linear": 604800
            },
            {
              "name": "months",
              "id": 5,
              "conversion_linear": 2629800
            }
          ]
        },
        "capabilityName": "videoHandover"
      }
    ]
  },
  "wake_up": {
    "name": "wake_up",
    "name_cased": "wakeUp",
    "name_pretty": "Wake Up",
    "category": "digital_key",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 34
    },
    "api": {
      "intro": 2,
      "update": 11
    },
    "disabled_in": [
      "ble"
    ],
    "setters": [
      {
        "name": "wake_up",
        "constants": [
          {
            "property_id": 1,
            "value": [
              0
            ]
          }
        ],
        "description": "Wake up the vehicle. This is necessary when the vehicle has fallen asleep, in which case the vehicle responds with the Failure Message to all incoming messages. The vehicle is also waken up by the Lock/Unlock Doors message."
      }
    ],
    "properties": [
      {
        "id": 1,
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "wake_up"
          },
          {
            "id": 1,
            "name": "sleep"
          }
        ],
        "examples": [
          {
            "data_component": "00",
            "value": "wake_up",
            "description": "Wake up"
          }
        ],
        "capabilityName": "wakeUp"
      }
    ]
  },
  "weather_conditions": {
    "name": "weather_conditions",
    "name_cased": "weatherConditions",
    "name_pretty": "Weather Conditions",
    "category": "environment",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 85
    },
    "api": {
      "intro": 5,
      "update": 11
    },
    "getters": {
      "name": "get_weather_conditions"
    },
    "state": [
      1
    ],
    "properties": [
      {
        "name": "rain_intensity",
        "name_cased": "rainIntensity",
        "name_pretty": "Rain intensity",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Measured raining intensity percentage, whereas 0% is no rain and 100% is maximum rain",
        "id": 1,
        "examples": [
          {
            "data_component": "3ff0000000000000",
            "value": 1,
            "description": "Rain intensity is at 100% (maximum rain)"
          }
        ],
        "customType": "percentage",
        "capabilityName": "weatherConditions"
      }
    ]
  },
  "wi_fi": {
    "name": "wi_fi",
    "name_cased": "wiFi",
    "name_pretty": "Wi-Fi",
    "category": "headunit",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 89
    },
    "api": {
      "intro": 6,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "connect_to_network",
        "mandatory": [
          3,
          4
        ],
        "optional": [
          5
        ],
        "description": "Connect the vehicle to a Wi-Fi network."
      },
      {
        "name": "forget_network",
        "mandatory": [
          3
        ],
        "description": "Forget a network that the vehicle has previously connected to."
      },
      {
        "name": "enable_disable_wi_fi",
        "mandatory": [
          1
        ],
        "description": "Enable or disable Wi-Fi completely."
      }
    ],
    "state": [
      1,
      2,
      3,
      4
    ],
    "properties": [
      {
        "name": "status",
        "name_cased": "status",
        "name_pretty": "Status",
        "type": "enum",
        "size": 1,
        "controls": "switch",
        "enum_values": [
          {
            "id": 0,
            "name": "disabled",
            "verb": "disable"
          },
          {
            "id": 1,
            "name": "enabled",
            "verb": "enable"
          }
        ],
        "id": 1,
        "examples": [
          {
            "data_component": "01",
            "value": "enabled",
            "description": "WiFi is enabled"
          }
        ],
        "customType": "enabled_state",
        "capabilityName": "wiFi"
      },
      {
        "name": "network_connected",
        "name_cased": "networkConnected",
        "name_pretty": "Network connected",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "disconnected"
          },
          {
            "id": 1,
            "name": "connected"
          }
        ],
        "id": 2,
        "examples": [
          {
            "data_component": "01",
            "value": "connected",
            "description": "WiFi is connected"
          }
        ],
        "customType": "connection_state",
        "capabilityName": "wiFi"
      },
      {
        "id": 3,
        "name": "network_ssid",
        "name_cased": "networkSSID",
        "name_pretty": "Network SSID",
        "type": "string",
        "description": "The network SSID",
        "examples": [
          {
            "data_component": "484f4d45",
            "value": "HOME",
            "description": "WiFi network name is 'HOME'"
          }
        ],
        "capabilityName": "wiFi"
      },
      {
        "name": "network_security",
        "name_cased": "networkSecurity",
        "name_pretty": "Network security",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "none"
          },
          {
            "id": 1,
            "name": "wep",
            "name_pretty": "WEP"
          },
          {
            "id": 2,
            "name": "wpa",
            "name_pretty": "WPA/WPA2 Personal"
          },
          {
            "id": 3,
            "name": "wpa2_personal",
            "name_pretty": "WPA2 Personal"
          }
        ],
        "id": 4,
        "examples": [
          {
            "data_component": "03",
            "value": "wpa2_personal",
            "description": "WiFi network uses the WPA2-Personal algorithm"
          }
        ],
        "customType": "network_security",
        "capabilityName": "wiFi"
      },
      {
        "id": 5,
        "name": "password",
        "name_cased": "password",
        "name_pretty": "Password",
        "type": "string",
        "description": "The network password",
        "examples": [
          {
            "data_component": "67726561745f7365637265743132",
            "value": "great_secret12",
            "description": "WiFi network password is 'great_secret12'"
          }
        ],
        "capabilityName": "wiFi"
      }
    ]
  },
  "windows": {
    "name": "windows",
    "name_cased": "windows",
    "name_pretty": "Windows",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 69
    },
    "api": {
      "intro": 2,
      "update": 11
    },
    "getters": {
      "name": "get_windows"
    },
    "setters": [
      {
        "name": "control_windows",
        "optional": [
          2,
          3
        ],
        "description": "Open or close the windows. Either one or all windows can be controlled with the same command."
      }
    ],
    "state": [
      2,
      3
    ],
    "properties": [
      {
        "name": "open_percentages",
        "name_cased": "openPercentages",
        "name_pretty": "Open percentages",
        "type": "custom",
        "size": 9,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Window location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "hatch"
              }
            ],
            "customType": "window_location",
            "capabilityName": "windows"
          },
          {
            "name": "open_percentage",
            "name_cased": "openPercentage",
            "name_pretty": "Percentage",
            "unit_sign": "%",
            "validation": "min:0|max:1",
            "type": "double",
            "size": 8,
            "description": "Percentage value between 0.0 - 1.0 (0% - 100%)",
            "customType": "percentage",
            "capabilityName": "windows"
          }
        ],
        "id": 2,
        "multiple": true,
        "name_singular": "open_percentage",
        "examples": [
          {
            "data_component": "003fc999999999999a",
            "values": {
              "location": "front_left",
              "open_percentage": 0.2
            },
            "description": "Front left window is 20% open"
          },
          {
            "data_component": "013fe0000000000000",
            "values": {
              "location": "front_right",
              "open_percentage": 0.5
            },
            "description": "Front right window is 50% open"
          },
          {
            "data_component": "023fe0000000000000",
            "values": {
              "location": "rear_right",
              "open_percentage": 0.5
            },
            "description": "Rear right window is 50% open"
          },
          {
            "data_component": "033fb999999999999a",
            "values": {
              "location": "rear_left",
              "open_percentage": 0.1
            },
            "description": "Rear left window is 10% open"
          },
          {
            "data_component": "043fc70a3d70a3d70a",
            "values": {
              "location": "hatch",
              "open_percentage": 0.18
            },
            "description": "Hatch is 18% open"
          }
        ],
        "customType": "window_open_percentage",
        "capabilityName": "windows"
      },
      {
        "name": "positions",
        "name_cased": "positions",
        "name_pretty": "Positions",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "location",
            "name_cased": "location",
            "name_pretty": "Window location",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "front_left"
              },
              {
                "id": 1,
                "name": "front_right"
              },
              {
                "id": 2,
                "name": "rear_right"
              },
              {
                "id": 3,
                "name": "rear_left"
              },
              {
                "id": 4,
                "name": "hatch"
              }
            ],
            "customType": "window_location",
            "capabilityName": "windows"
          },
          {
            "name": "position",
            "name_cased": "position",
            "type": "enum",
            "size": 1,
            "enum_values": [
              {
                "id": 0,
                "name": "closed"
              },
              {
                "id": 1,
                "name": "open"
              },
              {
                "id": 2,
                "name": "intermediate",
                "disabled_in_setter": true
              }
            ],
            "capabilityName": "windows"
          }
        ],
        "id": 3,
        "multiple": true,
        "name_singular": "position",
        "examples": [
          {
            "data_component": "0001",
            "values": {
              "location": "front_left",
              "position": "open"
            },
            "description": "Front left window is open"
          },
          {
            "data_component": "0101",
            "values": {
              "location": "front_right",
              "position": "open"
            },
            "description": "Front right window is open"
          },
          {
            "data_component": "0200",
            "values": {
              "location": "rear_right",
              "position": "closed"
            },
            "description": "Rear right window is closed"
          },
          {
            "data_component": "0301",
            "values": {
              "location": "rear_left",
              "position": "open"
            },
            "description": "Rear left window is open"
          },
          {
            "data_component": "0401",
            "values": {
              "location": "hatch",
              "position": "open"
            },
            "description": "Hatch is open"
          }
        ],
        "customType": "window_position",
        "capabilityName": "windows"
      }
    ]
  },
  "windscreen": {
    "name": "windscreen",
    "name_cased": "windscreen",
    "name_pretty": "Windscreen",
    "category": "chassis",
    "authorization": true,
    "identifier": {
      "msb": 0,
      "lsb": 66
    },
    "api": {
      "intro": 4,
      "update": 11
    },
    "getters": {},
    "setters": [
      {
        "name": "set_windscreen_damage",
        "mandatory": [
          3
        ],
        "optional": [
          5
        ],
        "description": "Set the windscreen damage. This is for instance used to reset the glass damage or correct it. Damage confidence percentage is automatically set to either 0% or 100%."
      },
      {
        "name": "set_windscreen_replacement_needed",
        "mandatory": [
          6
        ],
        "description": "Set if the windscreen needs replacement."
      },
      {
        "name": "control_wipers",
        "mandatory": [
          1
        ],
        "optional": [
          2
        ],
        "description": "Control the wipers."
      }
    ],
    "state": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "properties": [
      {
        "id": 1,
        "name": "wipers_status",
        "name_cased": "wipersStatus",
        "name_pretty": "Wipers status",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "inactive",
            "verb": "deactivate"
          },
          {
            "id": 1,
            "name": "active",
            "verb": "activate"
          },
          {
            "id": 2,
            "name": "automatic"
          }
        ],
        "examples": [
          {
            "data_component": "02",
            "value": "automatic",
            "description": "Windscreen wipers are set to automatic mode"
          }
        ],
        "capabilityName": "windscreen"
      },
      {
        "id": 2,
        "name": "wipers_intensity",
        "name_cased": "wipersIntensity",
        "name_pretty": "Wipers intensity",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "level_0",
            "name_pretty": "Level 0, inactive"
          },
          {
            "id": 1,
            "name": "level_1"
          },
          {
            "id": 2,
            "name": "level_2"
          },
          {
            "id": 3,
            "name": "level_3"
          }
        ],
        "examples": [
          {
            "data_component": "03",
            "value": "level_3",
            "description": "Wipers are on highest intensity, indicating heavy rain"
          }
        ],
        "capabilityName": "windscreen"
      },
      {
        "id": 3,
        "name": "windscreen_damage",
        "name_cased": "windscreenDamage",
        "name_pretty": "Windscreen damage",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "no_impact_detected"
          },
          {
            "id": 1,
            "name": "impact_but_no_damage_detected"
          },
          {
            "id": 2,
            "name": "damage_smaller_than_1_inch"
          },
          {
            "id": 3,
            "name": "damage_larger_than_1_inch"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "impact_but_no_damage_detected",
            "description": "Windscreen detected an impact, but no damage"
          }
        ],
        "capabilityName": "windscreen"
      },
      {
        "name": "windscreen_zone_matrix",
        "name_cased": "windscreenZoneMatrix",
        "name_pretty": "Windscreen zone matrix",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "horizontal",
            "name_cased": "horizontal",
            "type": "uinteger",
            "size": 1,
            "description": "Horizontal component of the matrix",
            "capabilityName": "windscreen"
          },
          {
            "name": "vertical",
            "name_cased": "vertical",
            "type": "uinteger",
            "size": 1,
            "description": "Vertical component of the matrix",
            "capabilityName": "windscreen"
          }
        ],
        "id": 4,
        "description": "Representing the size of the matrix, seen from the inside of the vehicle",
        "examples": [
          {
            "data_component": "0403",
            "values": {
              "horizontal": 4,
              "vertical": 3
            },
            "description": "Windscreen is divided into a matrix 4 columns horizontally by 3 rows vertically"
          }
        ],
        "customType": "zone",
        "capabilityName": "windscreen"
      },
      {
        "name": "windscreen_damage_zone",
        "name_cased": "windscreenDamageZone",
        "name_pretty": "Windscreen damage zone",
        "type": "custom",
        "size": 2,
        "items": [
          {
            "name": "horizontal",
            "name_cased": "horizontal",
            "type": "uinteger",
            "size": 1,
            "description": "Horizontal component of the matrix",
            "capabilityName": "windscreen"
          },
          {
            "name": "vertical",
            "name_cased": "vertical",
            "type": "uinteger",
            "size": 1,
            "description": "Vertical component of the matrix",
            "capabilityName": "windscreen"
          }
        ],
        "id": 5,
        "description": "Representing the position in the zone, seen from the inside of the vehicle (1-based index)",
        "examples": [
          {
            "data_component": "0102",
            "values": {
              "horizontal": 1,
              "vertical": 2
            },
            "description": "Damage is detected in the 1st column from left and the 2nd row from the top"
          }
        ],
        "customType": "zone",
        "capabilityName": "windscreen"
      },
      {
        "id": 6,
        "name": "windscreen_needs_replacement",
        "name_cased": "windscreenNeedsReplacement",
        "name_pretty": "Windscreen needs replacement",
        "type": "enum",
        "size": 1,
        "enum_values": [
          {
            "id": 0,
            "name": "unknown"
          },
          {
            "id": 1,
            "name": "no_replacement_needed"
          },
          {
            "id": 2,
            "name": "replacement_needed"
          }
        ],
        "examples": [
          {
            "data_component": "01",
            "value": "no_replacement_needed",
            "description": "Windscreen does not need replacement"
          }
        ],
        "capabilityName": "windscreen"
      },
      {
        "name": "windscreen_damage_confidence",
        "name_cased": "windscreenDamageConfidence",
        "name_pretty": "Windscreen damage confidence",
        "unit_sign": "%",
        "validation": "min:0|max:1",
        "type": "double",
        "size": 8,
        "description": "Confidence of damage detection, 0% if no impact detected",
        "id": 7,
        "examples": [
          {
            "data_component": "3fee666666666666",
            "value": 0.95,
            "description": "Damage detected with 95% confidence"
          }
        ],
        "customType": "percentage",
        "capabilityName": "windscreen"
      },
      {
        "id": 8,
        "name": "windscreen_damage_detection_time",
        "name_cased": "windscreenDamageDetectionTime",
        "name_pretty": "Windscreen damage detection time",
        "type": "timestamp",
        "size": 8,
        "description": "Windscreen damage detection date",
        "examples": [
          {
            "data_component": "000001598938e788",
            "value": "2017-01-10T16:32:05.000Z",
            "description": "Windscreen damage detected at 10 January 2017 at 16:32:05 UTC"
          }
        ],
        "capabilityName": "windscreen"
      }
    ]
  }
}

const UNIVERSAL_PROPERTIES = [
  {
    "id": 160,
    "name": "nonce",
    "name_cased": "nonce",
    "name_pretty": "Nonce",
    "type": "bytes",
    "size": 9,
    "examples": [
      {
        "data_component": "0123456789abcdef01",
        "value": [
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1
        ],
        "description": "Nonce is 0123456789abcdef01 in hex"
      }
    ]
  },
  {
    "id": 161,
    "name": "vehicle_signature",
    "name_cased": "vehicleSignature",
    "name_pretty": "Vehicle signature",
    "type": "bytes",
    "size": 64,
    "examples": [
      {
        "data_component": "0123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef0102",
        "value": [
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          1,
          35,
          69,
          103,
          137,
          171,
          205,
          239,
          1,
          2
        ],
        "description": "Vehicle signature is 0123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef010123456789abcdef0102 in hex"
      }
    ]
  },
  {
    "id": 162,
    "name": "timestamp",
    "name_cased": "timestamp",
    "name_pretty": "Timestamp",
    "type": "timestamp",
    "size": 8,
    "description": "Milliseconds since UNIX Epoch time",
    "examples": [
      {
        "data_component": "0000016d82cebd50",
        "value": "2019-09-30T15:34:10.000Z",
        "description": "Timestamp denotes 30. September 2019 at 15:34:10 GMT"
      }
    ]
  },
  {
    "id": 163,
    "name": "vin",
    "name_cased": "vin",
    "name_pretty": "VIN",
    "type": "string",
    "size": 17,
    "description": "The unique Vehicle Identification Number",
    "examples": [
      {
        "data_component": "4a46325348424443374348343531383639",
        "value": "JF2SHBDC7CH451869",
        "description": "VIN is 'JF2SHBDC7CH451869'"
      }
    ]
  },
  {
    "id": 164,
    "name": "brand",
    "name_cased": "brand",
    "name_pretty": "Brand",
    "type": "enum",
    "size": 1,
    "description": "The vehicle brand",
    "enum_values": [
      {
        "id": 0,
        "name": "unknown"
      },
      {
        "id": 1,
        "name": "abarth"
      },
      {
        "id": 2,
        "name": "alfaromeo",
        "name_pretty": "AlfaRomeo"
      },
      {
        "id": 3,
        "name": "alpine"
      },
      {
        "id": 4,
        "name": "audi"
      },
      {
        "id": 5,
        "name": "bmw",
        "name_pretty": "BMW"
      },
      {
        "id": 6,
        "name": "cadillac"
      },
      {
        "id": 7,
        "name": "chevrolet"
      },
      {
        "id": 8,
        "name": "chrysler"
      },
      {
        "id": 9,
        "name": "citroen",
        "name_pretty": "Citroën"
      },
      {
        "id": 10,
        "name": "cupra"
      },
      {
        "id": 11,
        "name": "dacia"
      },
      {
        "id": 12,
        "name": "dodge"
      },
      {
        "id": 13,
        "name": "ds",
        "name_pretty": "DS"
      },
      {
        "id": 14,
        "name": "fiat"
      },
      {
        "id": 15,
        "name": "ford"
      },
      {
        "id": 16,
        "name": "honda"
      },
      {
        "id": 17,
        "name": "hyundai"
      },
      {
        "id": 18,
        "name": "iveco"
      },
      {
        "id": 19,
        "name": "jaguar"
      },
      {
        "id": 20,
        "name": "jeep"
      },
      {
        "id": 21,
        "name": "kia"
      },
      {
        "id": 22,
        "name": "lancia"
      },
      {
        "id": 23,
        "name": "land_rover",
        "name_pretty": "Land Rover"
      },
      {
        "id": 24,
        "name": "lexus"
      },
      {
        "id": 25,
        "name": "man",
        "name_pretty": "MAN"
      },
      {
        "id": 26,
        "name": "mazda"
      },
      {
        "id": 27,
        "name": "mercedes_benz",
        "name_pretty": "Mercedes-Benz"
      },
      {
        "id": 28,
        "name": "mini"
      },
      {
        "id": 29,
        "name": "mitsubishi"
      },
      {
        "id": 30,
        "name": "nissan"
      },
      {
        "id": 31,
        "name": "opel"
      },
      {
        "id": 32,
        "name": "peugeot"
      },
      {
        "id": 33,
        "name": "porsche"
      },
      {
        "id": 34,
        "name": "renault"
      },
      {
        "id": 35,
        "name": "seat"
      },
      {
        "id": 36,
        "name": "skoda",
        "name_pretty": "Škoda"
      },
      {
        "id": 37,
        "name": "smart"
      },
      {
        "id": 38,
        "name": "subaru"
      },
      {
        "id": 39,
        "name": "toyota"
      },
      {
        "id": 40,
        "name": "volkswagen"
      },
      {
        "id": 41,
        "name": "volvo_cars",
        "name_pretty": "Volvo Cars"
      },
      {
        "id": 42,
        "name": "emulator"
      }
    ],
    "examples": [
      {
        "data_component": "05",
        "value": "bmw",
        "description": "Vehicle brand is 'BMW'"
      }
    ]
  }
]

export default class GraphQlService {
  graphQlApiConfig = null
  accessToken = null

  constructor(graphQlApiConfig, accessToken) {
    this.graphQlApiConfig = graphQlApiConfig
    this.accessToken = accessToken
  }

  buildQuery(properties = []) {
    const capabilities = {}
    properties.forEach((propertyUniqueId) => {
      const [capabilityName, propertyName] = propertyUniqueId.split('.')
      if (capabilities[capabilityName]) {
        capabilities[capabilityName].push(propertyName)
      } else {
        capabilities[capabilityName] = [propertyName]
      }
    })

    const capabilityQueries = Object.entries(capabilities).map(
      ([capabilityName, properties]) => {
        const capabilityConfig =
          capabilityName === 'universal'
            ? { properties: UNIVERSAL_PROPERTIES }
            : Object.values(CAPABILITIES).find(
                (capability) => capability.name_cased === capabilityName
              )
        const propertyQueries = properties.map((propertyName) => {
          const propertyConfig =
            capabilityConfig.properties.find(
              (p) => p.name_cased === propertyName
            ) ||
            UNIVERSAL_PROPERTIES.find(
              (universalProp) => universalProp.name_cased === propertyName
            )

          const propertyQuery = propertyConfig.items
            ? `{ data { ${propertyConfig.items
                .map((item) => {
                  if (item.items) {
                    return `${item.name_cased} { ${item.items
                      .map((subItem) =>
                        subItem.unit
                          ? `${subItem.name_cased} { value unit }`
                          : subItem.name_cased
                      )
                      .join(' ')} }`
                  }

                  return item.unit
                    ? `${item.name_cased} { value unit }`
                    : item.name_cased
                })
                .join(' ')} } timestamp }`
            : `{ data ${
                propertyConfig.type.includes('unit') ? '{ value, unit }' : ''
              } timestamp }`

          return `${propertyName} ${propertyQuery}`
        })

        return `${capabilityName} { ${propertyQueries.join(' ')} }`
      }
    )

    return `{${capabilityQueries.join(', ')}}`
  }

  async getSchema() {
    const cachedSchema = cache.get('schema')
    if (cachedSchema) {
      return cachedSchema
    }

    const jwtToken = this.generateJWT()
    const {
      data: { data: schema, errors },
    } = await axios.post(
      this.graphQlApiConfig.app_uri,
      {
        query: '{ __schema { types { name fields { name } } } }',
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (errors || !schema || !schema.__schema || !schema.__schema.types) {
      console.log('Failed to fetch graphql schema', errors)
      return null
    }

    cache.set('schema', schema, 1800) // Cache for 30min

    return schema
  }

  async validateProperties(properties) {
    const schema = await this.getSchema()

    return properties.filter((propertyId) => {
      const [capabilityName, propertyName] = propertyId.split('.')

      return schema.__schema.types.find(
        ({ name, fields }) =>
          name.toLowerCase() === capabilityName.toLowerCase() &&
          fields.find(
            ({ name }) => name.toLowerCase() === propertyName.toLowerCase()
          )
      )
    })
  }

  async fetchProperties(properties = []) {
    if (properties.length === 0) {
      return {}
    }

    const validProperties = await this.validateProperties(properties)
    const query = this.buildQuery(validProperties)
    const jwtToken = this.generateJWT()

    const {
      data: { data, errors },
    } = await axios.post(
      this.graphQlApiConfig.app_uri,
      {
        query,
      },
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const errorMessage =
      errors && Array.isArray(errors) && errors.length > 0 && errors[0].message
    if (errorMessage) {
      throw new Error(errorMessage)
    }

    return data
  }

  generateJWT() {
    const payload = {
      ver: this.graphQlApiConfig.version,
      iss: this.graphQlApiConfig.client_serial_number.toUpperCase(),
      sub: this.accessToken,
      aud: this.graphQlApiConfig.app_uri,
      iat: Math.round(Date.now() / 1000),
      jti: uuid4(),
    }

    const privateKey = Buffer.from(this.graphQlApiConfig.private_key, 'utf8')
    const jwtToken = jwt.sign(payload, privateKey, {
      algorithm: 'ES256',
    })

    return jwtToken
  }
}
