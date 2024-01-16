// Importa los modelos según la ruta correcta de tus archivos
import { sequelize } from "../config/local_database.js"; // Asegúrate de proporcionar la ruta correcta
import localpromocion from "../models/Local_Promocion.js";
import localpromocionpromocionarticulo from "../models/Local_Promocion_Promocion_articulo.js";
import localpromocionarticulo from "../models/Local_Promocion_articulo.js";
import dotenv from "dotenv";

const copiarPromociones = async (req, res) => {
  try {
    const { sucursal_id, promociones } = req.body;
    console.log("datos", sucursal_id, promociones);
    // Elimina las promociones existentes para la sucursal
    await eliminarPromocionesPorSucursal(sucursal_id);

    // Crea una transacción para asegurar la consistencia de los datos
    const transaction = await sequelize.transaction();

    try {
      // Itera sobre las promociones y cópialas con la nueva sucursal_id
      for (const promocionData of promociones) {
        // Excluye explícitamente el campo 'id' al crear la promoción
        const { id, ...promocionWithoutId } = promocionData.promocion;
        const nuevaPromocion = await localpromocion.create(
          {
            ...promocionWithoutId,
            sucursal_id,
          },
          { transaction }
        );

        // Itera sobre los artículos de la promoción original
        for (const articuloData of promocionData.articulos) {
          const { articulo_id, valor } = articuloData;

          // Crea un nuevo registro en localpromocionarticulo
          const nuevoPromocionArticulo = await localpromocionarticulo.create(
            {
              valor,
              articulo_id,
            },
            { transaction }
          );

          // Crea un nuevo registro en la tabla intermedia promocion_promocion_articulo
          await localpromocionpromocionarticulo.create(
            {
              promocion_id: nuevaPromocion.id,
              promocionesarticulos_id: nuevoPromocionArticulo.id,
            },
            { transaction }
          );
        }
      }

      // Completa la transacción
      await transaction.commit();

      res.status(200).json({ message: "Promociones copiadas con éxito." });
    } catch (error) {
      // Si hay algún error, deshace la transacción
      await transaction.rollback();
      throw error;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al copiar promociones." });
  }
};

const eliminarPromocionesPorSucursal = async (sucursalId) => {
  const transaction = await sequelize.transaction();

  try {
    // Verifica si existen promociones con la sucursal_id dada
    const promocionesExisten = await localpromocion.findOne({
      where: {
        sucursal_id: sucursalId,
      },
      raw: true,
      transaction,
    });

    if (promocionesExisten) {
      // Elimina las promociones con la sucursal_id dada
      await localpromocion.destroy({
        where: {
          sucursal_id: sucursalId,
        },
        transaction,
      });

      // Obtén los IDs de las promociones eliminadas
      const promocionesEliminadas = await localpromocion.findAll({
        attributes: ["id"],
        where: {
          sucursal_id: sucursalId,
        },
        raw: true,
        transaction,
      });

      const idsPromocionesEliminadas = promocionesEliminadas.map(
        (promocion) => promocion.id
      );

      // Elimina los elementos de la tabla promocion_promocion_articulo
      await localpromocionpromocionarticulo.destroy({
        where: {
          promocion_id: idsPromocionesEliminadas,
        },
        transaction,
      });

      // Elimina los elementos de la tabla promocion_articulo
      await localpromocionarticulo.destroy({
        where: {
          id: idsPromocionesEliminadas,
        },
        transaction,
      });

      // Completa la transacción
      await transaction.commit();

      console.log("Promociones y asociaciones eliminadas con éxito.");
    } else {
      console.log("No hay promociones para la sucursal dada.");
      // Completa la transacción ya que no hay nada que eliminar
      await transaction.commit();
    }
  } catch (error) {
    // Si hay algún error, deshace la transacción
    await transaction.rollback();
    console.error("Error al eliminar promociones:", error);
    throw error;
  }
};

const syncDatabase = async (req, res) => {
  console.log("datoshost", process.env.DB_LOCALHOST);
  try {
    // Verificar la conexión
    await sequelize.authenticate();
    console.log("Conexión exitosa a la base de datos local");
    // Lógica para sincronizar la base de datos usando Sequelize
    await sequelize.sync({ force: false }); // Aquí usé "force: true" para recrear las tablas (ten cuidado con esto en producción)
    console.log("base de dato local conectada correctamente");
    res.status(200).json({ message: "Sincronización exitosa" });
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
    res.status(500).json({ error: "Error al sincronizar la base de datos" });
  }
};

export default {
  copiarPromociones,
  eliminarPromocionesPorSucursal,
  syncDatabase,
  // Otros controladores si es necesario
};
