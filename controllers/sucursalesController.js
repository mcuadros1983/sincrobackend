// sucursalesController.js

import Sucursal from "../models/Sucursal.js";

const obtenerSucursales = async (req, res, next) => {
  try {
    const sucursales = await Sucursal.findAll();
    res.json(sucursales);
  } catch (error) {
    next(error);
  }
};

const obtenerSucursal = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sucursal = await Sucursal.findOne({
      where: { id },
    });
    if (!sucursal) {
      return res.status(404).json({
        message: "Sucursal no encontrada",
      });
    }
    res.json(sucursal);
  } catch (error) {
    next(error);
  }
};

const crearSucursal = async (req, res, next) => {
  try {
    const { nombre } = req.body;

    const nuevaSucursal = await Sucursal.create({
      nombre,
    });
    res.json(nuevaSucursal);
  } catch (error) {
    next(error);
  }
};

const actualizarSucursal = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;

    const sucursal = await Sucursal.findByPk(id);
    sucursal.nombre = nombre;

    await sucursal.save();
    res.json(sucursal);
  } catch (error) {
    next(error);
  }
};

const eliminarSucursal = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Sucursal.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const obtenerProductosSucursal = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productos = await Producto.findAll({ where: { sucursal_id: id } });
    res.json(productos);
  } catch (error) {
    next(error);
  }
};

export {
  obtenerSucursales,
  obtenerSucursal,
  crearSucursal,
  actualizarSucursal,
  eliminarSucursal,
  obtenerProductosSucursal,
};
