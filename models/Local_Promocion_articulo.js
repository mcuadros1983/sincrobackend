// promocion_articulo.js
import { DataTypes } from "sequelize";
import { sequelize } from "../config/local_database.js";
import localpromocion from "./Local_Promocion.js";
// import localpromocion from "./Local_Promocion.js";

const localpromocionarticulo = sequelize.define(
  "promocion_articulo",
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    valor: {
      type: DataTypes.DECIMAL(12, 2),
    },
    articulo_id: {
      type: DataTypes.BIGINT,
    },
  },
  {
    tableName: "promocion_articulo", // Asegúrate de que el nombre de la tabla coincida con el nombre real
    timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
    freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
  }
);



export default localpromocionarticulo;
