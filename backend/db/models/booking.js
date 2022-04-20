'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    vanId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    // passengers: DataTypes.STRING
  }, {});

  Booking.associate = function(models) {
    Booking.belongsTo(models.User, { foreignKey: 'userId' });
    Booking.belongsTo(models.Van, { foreignKey: 'vanId' });
  };

  return Booking;
};
