'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Amenities', [
      {
        vanId: 1,
        kitchen: true,
        shower: true,
        spareTire: false,
        firstAidKit: true,
        roadsideAssistance: true,
        roofRackStorage: true,
        hotSpot: true,
        chargingStation: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vanId: 2,
        kitchen: true,
        shower: true,
        spareTire: true,
        firstAidKit: true,
        roadsideAssistance: false,
        roofRackStorage: true,
        hotSpot: true,
        chargingStation: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        vanId: 3,
        kitchen: false,
        shower: true,
        spareTire: true,
        firstAidKit: true,
        roadsideAssistance: true,
        roofRackStorage: true,
        hotSpot: true,
        chargingStation: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Amenities', null, {});
  }
};
