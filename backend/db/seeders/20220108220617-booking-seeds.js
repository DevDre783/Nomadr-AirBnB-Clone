'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [
        {
          vanId: 1,
          userId: 2,
          startDate: new Date(),
          endDate: new Date(),
          passengers: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vanId: 3,
          userId: 1,
          startDate: new Date(),
          endDate: new Date(),
          passengers: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vanId: 2,
          userId: 3,
          startDate: new Date(),
          endDate: new Date(),
          passengers: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
