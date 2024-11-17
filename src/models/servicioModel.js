const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("cuentocontigo", "root", "14245708", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

class servicio extends Model {}

servicio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombreServicio: {
      type:
        DataTypes.ENUM(
          "auditoria",
          "finanzas",
          "fiscalia",
          "administratición, general"
        ) || "general",
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "servicio",
  }
);

module.exports = servicio;
