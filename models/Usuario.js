import { DataTypes } from "sequelize";
import { sequelize } from "../config/cloud_database.js";
import bcrypt from "bcrypt";

const Usuario = sequelize.define("Usuario", {
  usuario: {
    type: DataTypes.STRING,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
  },

});

// Antes de crear el usuario, cifra la contraseña
Usuario.beforeCreate(async (user) => {
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  } catch (error) {
    console.error("Error al cifrar la contraseña:", error);
    throw error; // Puedes elegir manejar el error de otra manera según tus necesidades
  }
});

export default Usuario;
