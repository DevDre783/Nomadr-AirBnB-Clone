'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {
          userId: 2,
          vanId: 1,
          rating: 4,
          review: 'Amazing experience with my family and this van was a beast the whole time, only complaint id have is the lack of a spare-tire, that had me worried all trip.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          vanId: 2,
          rating: 5,
          review: 'Amazing experience with my family and this van was amazing too, only complaint id have is the lack of a roadside-assistance, that had me worried.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          vanId: 3,
          rating: 5,
          review: 'WOW, just wow!',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
