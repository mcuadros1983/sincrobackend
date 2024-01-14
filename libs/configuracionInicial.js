// Importa tus modelos y configuración de sequelize según sea necesario
// import Rol from "../models/Rol.js";
import Usuario from "../models/Usuario.js";
import { sequelize } from "../config/local_database.js";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "../config/config.js";

// export const crearRoles = async () => {
//   try {
//     // Sincronizar los modelos con la base de datos
//     await sequelize.sync();

//     // Contar registros
//     const count = await Rol.count();

//     // Verificar roles existentes
//     if (count > 0) return;

//     // Crear roles predeterminados
//     const values = await Promise.all([
//       Rol.create({ nombre: "usuario" }),
//       Rol.create({ nombre: "moderador" }),
//       Rol.create({ nombre: "admin" }),
//     ]);

//     console.log(values);

//     crearAdmin();
//   } catch (error) {
//     console.error(error);
//   }
// };

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

    // Obtener el rol de administrador
    //const rol = await Rol.findOne({ where: { nombre: "admin" } });
   // console.log("text8", rol);

    // Crear un nuevo usuario admin
    const newUser = await Usuario.create({
      usuario: ADMIN_USERNAME,
      //   email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
     // rol_id: rol.dataValues.id, // Asignar el ID del rol admin directamente al campo role_id
    });

    // Asociar los roles al usuario admin
    // await newUser.setRoles(rol);

    console.log(`new user created: ${newUser.usuario}`);
  } catch (error) {
    console.error(error);
  }
};

// Llama a las funciones para crear roles y el usuario admin
crearAdmin();
