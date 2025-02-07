// import { knex as initKnex } from 'knex'
// import config from '../knexfile.js'

// export const knex = initKnex(config)
import knexPackage from 'knex';
import config from '../knexfile.js';

export const knex = knexPackage(config);
