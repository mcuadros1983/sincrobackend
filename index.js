import app from "./app.js";
import { db } from "./config/config.js";
import { PORT } from "./config/config.js";
import { sequelize } from "./config/local_database.js";
// import "./models/clienteModel.js";
// import "./models/productoModel.js";
// import "./models/ventaModel.js";
// import "./models/formaPagoModel.js";
// import "./models/cuentaCorrienteModel.js";
// import "./models/detalleCuentaCorrienteModel.js";
// import "./models/cobranzaModel.js";
// import "./models/detalleCobranzaModel.js";

import "./libs/configuracionInicial.js"
 

// import "./models/detalleVentaModel.js";

async function main() {
  try {
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    // Sincroniza las tablas después de que el servidor esté escuchando
    app.listen(PORT, async () => {
      // await sequelize.sync({ force: true }); // force: false evita que se borren las tablas para recrearlas
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();