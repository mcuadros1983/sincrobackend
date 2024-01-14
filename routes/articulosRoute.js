import express from 'express';
import { Router } from 'express';
import * as articulosController from '../controllers/articulosController.js';
import { authenticate } from '../middleware/authMiddleware.js';

// const router = express.Router();
const articulosRouter = Router()

// Rutas para sucursales
articulosRouter.get('/articulos', articulosController.obtenerArticulos);
// sucursalesRouter.get('/sucursales/:id', sucursalesController.obtenerSucursal);
// sucursalesRouter.get('/sucursales/:id/productos', sucursalesController.obtenerProductosSucursal);
// sucursalesRouter.post('/sucursales', sucursalesController.crearSucursal);
// sucursalesRouter.put('/sucursales/:id', sucursalesController.actualizarSucursal);
// sucursalesRouter.delete('/sucursales/:id', sucursalesController.eliminarSucursal);

// export default router;
export default articulosRouter;