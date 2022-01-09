'use strict';
module.exports = (sequelize, DataTypes) => {
  const Van = sequelize.define('Van', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    costPerNight: DataTypes.INTEGER,
    totalPassengers: DataTypes.INTEGER,
    zipCode: DataTypes.INTEGER
  }, {});
  
  Van.associate = function(models) {
    Van.belongsTo(models.User, { foreignKey: 'userId' });
    Van.hasMany(models.Review, { foreignKey: 'vanId' });
    Van.hasMany(models.Booking, { foreignKey: 'vanId' });
    Van.hasMany(models.Amenity, { foreignKey: 'vanId' });
    Van.hasMany(models.Image, { foreignKey: 'vanId' });
  };

  return Van;
};
