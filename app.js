import express from "express";
// import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import router from "./routes/indexRoute.js";
import "./config/passport.js";
import { FRONTEND_URL } from "./config/config.js";

dotenv.config();

const app = express();

// Configuración de CORS
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(router);
// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

export default app;
