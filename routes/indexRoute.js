import { Router } from "express";
import JWTAuth from "../middleware/jwtMiddleware.js";
import * as indexController from "../controllers/indexController.js";
import authRouter from "./authRoute.js";
import sucursalesRouter from "./sucursalesRoute.js";
import usuariosRouter from "./usuariosRoute.js";
import rolesRouter from "./rolesRoute.js";
import remotePromocionesRouter from './remotePromocionesRoute.js'
import articulosRouter from "./articulosRoute.js";
import remotePromocionArticuloRouter from "./remotePromocionArticuloRoute.js";
import localPromocionesRouter from "./localPromocionesRoute.js";
// import clientesRouter from "./clientesRoute.js";
// import cobranzasRouter from "./cobranzasRoute.js";
// import cuentasCorrientesRouter from "./cuentasCorrientesRoute.js";
// import detallesCobranzasRouter from "./detallesCobranzasRoute.js";
// import detallesCuentasCorrientesRouter from "./detallesCuentasCorrientesRoute.js";
// import formasPagoRouter from "./formasPagoRoute.js";
// import ingresosRouter from "./ingresosRoute.js";
// import ordenesRouter from "./ordenesRoute.js";
// import productosRouter from "./productosRoute.js";
// import ventasRouter from "./ventasRoute.js";

const router = Router();

const indexRouter = Router();
// const router = Router();

indexRouter.get("/", JWTAuth, indexController.index);

router.use(indexRouter);
router.use(authRouter);
router.use(usuariosRouter);
router.use(rolesRouter)
router.use(remotePromocionesRouter)
router.use(localPromocionesRouter)
router.use(sucursalesRouter);
router.use(articulosRouter);
router.use(remotePromocionArticuloRouter);

// router.use(JWTAuth, sucursalesRouter);
// router.use(JWTAuth, clientesRouter);
// router.use(JWTAuth, cobranzasRouter);
// router.use(JWTAuth, cuentasCorrientesRouter);
// router.use(JWTAuth, detallesCobranzasRouter);
// router.use(JWTAuth, detallesCuentasCorrientesRouter);
// router.use(JWTAuth, formasPagoRouter);
// router.use(JWTAuth, ingresosRouter);
// router.use(JWTAuth, ordenesRouter);
// router.use(JWTAuth, productosRouter);
// router.use(JWTAuth, ventasRouter);


export default router;
