import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PGUSER || 'root',
  password: process.env.PGPASSWORD || 'password',
  database: process.env.PGDATABASE || 'cabralbuster',
  host: process.env.PGHOST || 'localhost',
  port: Number(process.env.PGPORT) || 3306,
  dialect: 'postgres',
	logging: true,
}

export = config;