import { Router } from "express";
import localPromocionController from "../controllers/localPromocionController.js";

// const router = express.Router();
const localPromocionesRouter = Router();

// Rutas para copiar promociones
localPromocionesRouter.post("/copiarpromociones", localPromocionController.copiarPromociones);
localPromocionesRouter.post("/sync-database", localPromocionController.syncDatabase);

// export default router;
export default localPromocionesRouter;