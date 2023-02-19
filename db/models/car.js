"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Car.init(
    {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      vin: DataTypes.STRING,
      price: DataTypes.STRING,
      engine: DataTypes.STRING,
      horsePow: DataTypes.STRING,
      desc: DataTypes.STRING,
      phone: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
