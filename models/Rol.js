// Role.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/cloud_database.js";
// import Usuario from "../models/usuarioModel.js"; // Asegúrate de importar el modelo User

const Rol = sequelize.define("Rol", {
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
});

export default Rol;
