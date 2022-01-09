'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Amenities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vanId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Vans" }
      },
      kitchen: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      shower: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      spareTire: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      firstAidKit: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      roadsideAssistance: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      roofRackStorage: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      hotSpot: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      chargingStation: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Amenities');
  }
};
