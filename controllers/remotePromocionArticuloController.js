// sucursalesController.js

import PromocionArticulo from "../models/Promocion_articulo.js";

const obtenerPromocionArticulo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productos = await PromocionArticulo.findAll({
      where: { id },
    });
    const productosOrdenados = productos.sort((a, b) => a.id - b.id);
    res.json(productosOrdenados);
  } catch (error) {
    next(error);
  }
};

const obtenerPromocionesArticulos = async (req, res, next) => {
  // const { id } = req.params;
  try {
    const productos = await PromocionArticulo.findAll({
      // where: { id },
    });
    console.log("productosback", productos)
    // const productosOrdenados = productos.sort((a, b) => a.id - b.id);
    res.json(productos);
  } catch (error) {
    next(error);
  }
};
export { obtenerPromocionArticulo, obtenerPromocionesArticulos };
