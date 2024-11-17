const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("cuentocontigo", "root", "14245708", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

class contratacion extends Model {}

contratacion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM("pendiente", "aceptado", "rechazado") || "pendiente",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "contratacion",
  }
);

module.exports = contratacion;
