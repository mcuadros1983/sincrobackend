import promocion from '../models/Promocion.js' 
import promocionpromocionarticulo from '../models/Promocion_Promocion_articulo.js'
import promocionarticulo from '../models/Promocion_articulo.js'


const obtenerPromociones = async (req, res, next) => {
  try {
    const promociones = await promocion.findAll({
      where: {
        sucursal_id: 18,
        habilitada: true,
      },
    });

    // console.log("controller", promociones)

    // Mapear las promociones y obtener los elementos de promocionpromocionarticulo para cada promoción
    const promocionesConArticulos = await Promise.all(
      promociones.map(async (promocion) => {
        const promocionArticulos = await promocionpromocionarticulo.findAll({
          where: {
            promocion_id: promocion.id,
          },
        });

        // Mapear los elementos de promocionpromocionarticulo y obtener los datos de promocion_articulo para cada elemento
        const articulosConValores = await Promise.all(
          promocionArticulos.map(async (promocionArticulo) => {
            const articulo = await promocionarticulo.findOne({
              where: {
                id: promocionArticulo.promocionesarticulos_id,
              },
            });
            console.log("artback", articulo)

            // Retornar un objeto con el id del artículo y su valor
            return {
              articulo_id: articulo.articulo_id,
              valor: articulo.valor,
            };
          })
        );

        // Retornar un objeto con la promoción y los datos de los artículos
        return {
          promocion,
          articulos: articulosConValores,
        };
      })
    );

    res.json(promocionesConArticulos);
  } catch (error) {
    console.error("Error al obtener promociones:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export {
  obtenerPromociones
};

