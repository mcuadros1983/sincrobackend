// promocion_promocion_articulo.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/local_database.js';

const localpromocionpromocionarticulo = sequelize.define('promocion_promocion_articulo', {
  promocion_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  promocionesarticulos_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
}, {
  tableName: 'promocion_promocion_articulo', // Asegúrate de que el nombre de la tabla coincida con el nombre real
  timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
  freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
});

export default localpromocionpromocionarticulo;