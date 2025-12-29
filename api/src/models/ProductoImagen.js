const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ProductoImagen",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "ProductoImagen",
      timestamps: false,
    }
  );
};
