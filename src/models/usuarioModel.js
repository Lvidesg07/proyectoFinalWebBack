const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("cuentocontigo", "root", "14245708", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

class usuario extends Model {}

usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoUsuario: {
      type: DataTypes.ENUM("contador", "usuario") || "usuario",
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "usuario",
  }
);

module.exports = usuario;
