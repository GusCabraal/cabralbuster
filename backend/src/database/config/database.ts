import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || 'password',
  database: process.env.MYSQLDATABASE || 'cabralbuster',
  host: process.env.MYSQLHOST || 'localhost',
  port: Number(process.env.MYSQLPORT) || 3306,
  dialect: 'mysql'
}

export = config;