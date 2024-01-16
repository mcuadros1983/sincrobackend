import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_LOCALDATABASE,
  DB_LOCALUSER,
  DB_LOCALPASSWORD,
  DB_LOCALHOST,
  DB_LOCALPORT,
  DB_LOCALDIALECT,
} = process.env;

const sequelize = new Sequelize(DB_LOCALDATABASE, DB_LOCALUSER, DB_LOCALPASSWORD, {
  host: DB_LOCALHOST,
  port: DB_LOCALPORT,
  dialect: DB_LOCALDIALECT,
  logging:true,
  // Puedes agregar más configuraciones aquí según sea necesario
});

export { sequelize };