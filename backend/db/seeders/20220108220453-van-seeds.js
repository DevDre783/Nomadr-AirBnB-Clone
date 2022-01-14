'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Vans', [
        {
          userId: 2,
          address: '108 Meadle Court',
          city: 'Hoopsville',
          state: 'Washington',
          country: 'USA',
          title: 'Luxury Sprinter Van',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          costPerNight: 150,
          totalPassengers: 4,
          zipCode: 10728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          address: '108 Blockadoo Avenue',
          city: 'Peakston',
          state: 'Oregon',
          country: 'USA',
          title: 'Sick newly-built Sprinter! Rent me now! :D',
          description: 'Rent me! We just finished our van build a few months back, brand new Mercedes Sprinter, bring your whole family around the country.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          costPerNight: 230,
          totalPassengers: 6,
          zipCode: 11872,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          address: '12 Twelve Street',
          city: 'Logical',
          state: 'Texas',
          country: 'USA',
          title: 'Oldschool VW cross-country beast',
          description: 'This is our beautiful VW oldschool van, if you want that nostalgic 70s roadtrip, look no further.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit',
          costPerNight: 182,
          totalPassengers: 3,
          zipCode: 10668,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],{})
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Vans', null, {});
  }
};
