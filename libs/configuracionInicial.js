
import Usuario from "../models/Usuario.js";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../config/config.js";

export const crearAdmin = async () => { 
  try {
    // Verificar si ya existe un usuario admin
    const userFound = await Usuario.findOne({
      where: { usuario: ADMIN_USERNAME },
    });
    console.log("text7", userFound);
    if (userFound) {
      console.log("Usuario administrador ya existe. No se creará uno nuevo.");
      return; // Puedes ajustar según tus preferencias
    }

    // Crear un nuevo usuario admin
    const newUser = await Usuario.create({
      usuario: ADMIN_USERNAME,
      //   email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
     // rol_id: rol.dataValues.id, // Asignar el ID del rol admin directamente al campo role_id
    });

    console.log(`new user created: ${newUser.usuario}`);
  } catch (error) {
    console.log("error al crear el usuario")
    console.error(error);
  }
};

// Llama a las funciones para crear roles y el usuario admin
crearAdmin();
