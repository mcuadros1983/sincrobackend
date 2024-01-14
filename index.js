import app from "./app.js";
import { db } from "./config/config.js";
import { PORT } from "./config/config.js";
import { sequelize } from "./config/database.js";
// import "./models/Usuario.js";
// import "./models/Rol.js";

import "./libs/configuracionInicial.js"

async function main() {
  try {
    console.log("Connection has been established successfully.");

    // Sincroniza las tablas después de que el servidor esté escuchando
    app.listen(PORT, async () => {
      await sequelize.sync({ force: false }); // force: false evita que se borren las tablas para recrearlas
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();