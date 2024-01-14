import { DataTypes } from "sequelize";
import { sequelize } from '../config/database.js'; // Ajusta la ruta según la estructura de tus archivos

const promocion = sequelize.define(
  "promocion",
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    //   diassemanas: {
    //     type: DataTypes.BLOB,
    //   },
    esporprecio: {
      type: DataTypes.BOOLEAN,
    },
    fechafin: {
      type: DataTypes.DATE,
    },
    fechainicio: {
      type: DataTypes.DATE,
    },
    habilitada: {
      type: DataTypes.BOOLEAN,
    },
    nombre: {
      type: DataTypes.STRING(255),
    },
    porcentajeatodos: {
      type: DataTypes.DECIMAL(12, 2),
    },
    prioridad: {
      type: DataTypes.INTEGER,
    },
    sucursal_id: {
      type: DataTypes.BIGINT,
    },
  },
  {
    // Opciones adicionales si es necesario
    tableName: "promocion", // Agregar esta línea para especificar el nombre de la tabla
    timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
  }
);


// // Establece la asociación entre Promocion y PromocionPromocionArticulo después de la definición de Promocion
// promocion.belongsToMany(PromocionPromocionArticulo, { through: 'promocion_promocion_articulo', foreignKey: 'promocion_id' });

export default promocion;
