const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("cuentocontigo", "root", "14245708", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

class calificacion extends Model {}

calificacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.FLOAT(1, 2),
      allowNull: false,
    },
    comentario: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "calificacion",
  }
);

module.exports = calificacion;
