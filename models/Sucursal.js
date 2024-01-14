import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const sucursal = sequelize.define(
  "sucursal",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    //   diassemanas: {
    //     type: DataTypes.BLOB,
    //   },
  },
  {
    // Opciones adicionales si es necesario
    tableName: "sucursal", // Agregar esta línea para especificar el nombre de la tabla
    timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
  }
);

// // Establece la asociación entre Promocion y PromocionPromocionArticulo después de la definición de Promocion
// promocion.belongsToMany(PromocionPromocionArticulo, { through: 'promocion_promocion_articulo', foreignKey: 'promocion_id' });

export default sucursal;
