const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("cuentocontigo", "root", "14245708", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

class contador extends Model {}

contador.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    especialidad: {
      type:
        DataTypes.ENUM(
          "auditor",
          "financiero",
          "fiscal",
          "administrativo",
          "general"
        ) || "general",
      allowNull: false,
    },
    tarifa: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.FLOAT(3, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "contador",
  } 
);

module.exports = contador;
