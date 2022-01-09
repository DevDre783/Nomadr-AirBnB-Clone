'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Vans', [
        {
          userId: 1,
          address: '108 Meadle Court',
          city: 'Hoopsville',
          state: 'Washington',
          country: 'USA',
          title: 'Luxury Sprinter Van',
          description: 'Our sprinter will take you to the most beautiful places and back with nothing but great memories to leave with. With plenty of storage space',
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
          description: 'Rent me! We just finished our van build a few months back, brand new Mercedes Sprinter, bring your whole family around the country',
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
          description: 'This is our beautiful VW oldschool van, if you want that nostalgic 70s roadtrip, look no further.',
          costPerNight: 182,
          totalPassengers: 3,
          zipCode: 10668,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // New Data below (has not been seeded)
        {
          userId: 4,
          address: '8 Makka Lane',
          city: 'Whosville',
          state: 'New York',
          country: 'USA',
          title: 'Sprinter ready to sprint!',
          description: 'Come one, come all! Meet Van. Enjoy our sweet ride chasing the horizon to wherever life will take you, did i say life? I meant Van.',
          costPerNight: 405,
          totalPassengers: 6,
          zipCode: 10728,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],{})
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Vans', null, {});
  }
};
