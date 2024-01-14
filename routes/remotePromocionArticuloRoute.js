import { Router } from "express";
import * as remotePromocionArticuloController from "../controllers/remotePromocionArticuloController.js";

const remotePrmocionArticuloRouter = Router();

// Rutas para sucursales
remotePrmocionArticuloRouter.get("/promocionarticulo/:id/articulos", remotePromocionArticuloController.obtenerPromocionArticulo);
remotePrmocionArticuloRouter.get("/promocionarticulo", remotePromocionArticuloController.obtenerPromocionesArticulos);

export default remotePrmocionArticuloRouter;