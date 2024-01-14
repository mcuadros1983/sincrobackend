import { Router } from "express";
import * as remotePromocionesController from "../controllers/remotePromocionController.js";

// const router = express.Router();
const remotePromocionesRouter = Router();

// Rutas para sucursales
remotePromocionesRouter.get("/promociones", remotePromocionesController.obtenerPromociones);
// remotePromocionesRouter.get("/roles/:id", rolesController.obtenerRolPorId);
// remotePromocionesRouter.post("/roles", rolesController.crearRol);
// remotePromocionesRouter.put("/roles/:id", rolesController.actualizarRol);
// remotePromocionesRouter.delete("/roles/:id", rolesController.eliminarRol);

// export default router;
export default remotePromocionesRouter;