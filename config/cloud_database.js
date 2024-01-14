import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_CLOUDDATABASE,
  DB_CLOUDUSER,
  DB_CLOUDPASSWORD,
  DB_CLOUDHOST,
  DB_CLOUDPORT,
  DB_CLOUDDIALECT,
} = process.env;

const sequelize = new Sequelize(DB_CLOUDDATABASE, DB_CLOUDUSER, DB_CLOUDPASSWORD, {
  host: DB_CLOUDHOST,
  port: DB_CLOUDPORT,
  dialect: DB_CLOUDDIALECT,
  // Puedes agregar más configuraciones aquí según sea necesario
});

export { sequelize };