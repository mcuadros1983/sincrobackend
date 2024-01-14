import { config } from 'dotenv';
config();

export const db = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Corregido: debería ser DB_PORT en lugar de DB_HOST
  database: process.env.DB_DATABASE,
//   puerto:process.env.PORT
};

export const PORT = process.env.PORT || 5000;
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";
