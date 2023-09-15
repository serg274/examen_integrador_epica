const { DataType, sequelize } = require('../model/database');

const publicacion = sequelize.define('publicaciones', {
  titulo: {
    typo: DataType.STRING,
    allowNull: false
  },
  detalle: {
    type: DataType.STRING,
    allowNull:false
  }
})

module.exports = publicacion;