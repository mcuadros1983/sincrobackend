// Role.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/local_database.js";
// import Usuario from "../models/usuarioModel.js"; // Asegúrate de importar el modelo User

const Rol = sequelize.define("Rol", {
  nombre: {
    type: DataTypes.STRING,
    unique: true,
  },
});

// Definir relaciones
// Rol.hasMany(Usuario, {
//   foreignKey: "rol_id",
//   sourceKey: "id",
//   as: "usuarios",
//   allowNull: true,
//   onDelete: "SET NULL",
// });

// Usuario.belongsTo(Rol, {
//   foreignKey: "rol_id",
//   targetKey: "id",
//   allowNull: true,
//   onDelete: "SET NULL",
// });

export default Rol;
