import app from "./app.js";
import { PORT } from "./config/config.js";
import { sequelize as cloudDB } from "./config/cloud_database.js";
import { sequelize as localDB } from "./config/local_database.js";
import { sequelize as remoteDB } from "./config/database.js";
// import "./models/Usuario.js";
// import "./models/Rol.js";

import "./libs/configuracionInicial.js";

const sincronizarModelos = async (dbConfig) => {
  try {
    await dbConfig.sync();
    console.log(`Modelos sincronizados para ${dbConfig.config.database} correctamente.`);
  } catch (error) {
    console.error(`Error al sincronizar modelos para ${dbConfig.config.database}:`, error);
    throw error;
  }
};

async function main() {
  try {
    // Sincronizar modelos para cada base de datos
    await sincronizarModelos(cloudDB);
    await sincronizarModelos(localDB);
    await sincronizarModelos(remoteDB);

    console.log("Connection has been established successfully.");

    // Sincroniza las tablas después de que el servidor esté escuchando
    app.listen(PORT, async () => {
      //await sequelize.sync({ force: false }); // force: false evita que se borren las tablas para recrearlas
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();