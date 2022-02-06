'use strict';
const Sequelize = require('sequelize');
const db = require('../../config/db.config');

const SellerLog = db.define('sellerLogs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    body: {
      type: Sequelize.JSON
    },
    url: {
      type: Sequelize.STRING
    },
    method: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER
    },
    createdAt: {
      // allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      // allowNull: false,
      type: Sequelize.DATE
    }
});

module.exports = SellerLog;