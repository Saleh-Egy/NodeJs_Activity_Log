const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class SellerLog extends Model {};
    SellerLog.init({
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      body: DataTypes.JSON,
      url: DataTypes.STRING,
      method: DataTypes.STRING,
      user_id: DataTypes.STRING,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING,
    }, {
      sequelize,
      modelName: 'SellerLog',
    });
    return SellerLog;
  };