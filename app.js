import express from "express";
// import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
// import sequelize from './sequelize';  // Asegúrate de tener un archivo para la configuración de Sequelize
import router from "./routes/indexRoute.js";
// import { sequelize, authenticateDatabase } from './config/database.js';  // Importa la función
import "./config/passport.js";

dotenv.config();

const app = express();

// Middlewares
// app.use(bodyParser.json());

// Configuración de CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methos", "GET,POST,OPTIONS,PUT,DELETE");
//   next();
// });

//middleware para manejar errores de express (error handling)
// app.use((err, req, res, next) => {
//   return res.json({
//     message: err.message,
//   });
// });

// Rutas
// app.use("/api", clientesRoutes);
// app.use("/api", productosRoutes);
// app.use("/api", formasPagoRoutes);
// app.use("/api", ventasRoutes);
// app.use("/api", detallesVentasRoutes);
// app.use("/api", cuentasCorrientesRoutes);
// app.use("/api", detallesCuentasCorrientesRoutes);
// app.use('/api', cobranzasRoute);
// app.use('/api', detallesCobranzasRoute)
// app.use('/api', sucursalesRoute);
// app.use('/api', ingresosRoute);
app.use(router);
// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// // Manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Error interno del servidor" });
// });

//middleware para manejar errores de express (error handling)
// app.use((err, req, res, next) => {
//   return res.json({
//     message: err.message,
//   });
// });

// Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor en ejecución en el puerto ${PORT}`);
// });

export default app;
