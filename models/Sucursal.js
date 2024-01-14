import { DataTypes } from "sequelize";
import { sequelize } from "../config/cloud_database.js";

const sucursal = sequelize.define(
  "sucursal",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
    }
  },
  {
    // Opciones adicionales si es necesario
    tableName: "sucursal", // Agregar esta línea para especificar el nombre de la tabla
    timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

export default sucursal;
