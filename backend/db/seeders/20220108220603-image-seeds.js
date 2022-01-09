'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          vanId: 1,
          url: "https://bearfoottheory.com/wp-content/uploads/2018/12/SKYE-WALKER-SPRINTER-VAN-PHOTOS-2.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vanId: 2,
          url: "https://cdn.vanclan.co/wp-content/uploads/2019/04/sprintervanlife.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          vanId: 3,
          url: "https://s4844.pcdn.co/wp-content/uploads/2021/09/09_14_2021_VanLife-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
