import { DataTypes } from "sequelize";
import { sequelize } from "../config/local_database.js"; // Ajusta la ruta según la estructura de tus archivos
import localpromocionarticulo from "./Local_Promocion_articulo.js";


const localpromocion = sequelize.define(
  "promocion",
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   unique: true,
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

// Definición de la relación muchos a muchos con promocionarticulo
localpromocion.belongsToMany(localpromocionarticulo, { 
  through: 'promocion_promocion_articulo',
  as:"promoart",
  foreignKey: 'promocion_id',
  // otherKey: 'promocionesarticulos_id',
  timestamps: false, // Aquí añades la opción timestamps
});

// Definición de la relación muchos a muchos con promocion
localpromocionarticulo.belongsToMany(localpromocion, {
  through: "promocion_promocion_articulo",
  as:"promo",
  foreignKey: "promocionesarticulos_id",
  // otherKey: "promocion_id",
  timestamps: false, // Aquí añades la opción timestamps
});

export default localpromocion;
