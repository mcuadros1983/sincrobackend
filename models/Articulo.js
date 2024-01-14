// promocion_articulo.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
// import promocion from './promocion.js';

const articulo = sequelize.define('articulo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING(255),
  }
}, {
  tableName: 'articulo', // Asegúrate de que el nombre de la tabla coincida con el nombre real
  timestamps: false, // Evita la creación automática de las columnas 'createdAt' y 'updatedAt'
});


export default articulo;