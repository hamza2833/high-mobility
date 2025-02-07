import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  migrations: {
    // directory: new URL('./server/migrations', import.meta.url).pathname,
    directory: path.join(__dirname, 'server', 'migrations'),
    extension : 'cjs'

  },
};
