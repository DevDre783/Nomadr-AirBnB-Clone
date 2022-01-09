'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    vanId: DataTypes.INTEGER,
    kitchen: DataTypes.BOOLEAN,
    shower: DataTypes.BOOLEAN,
    spareTire: DataTypes.BOOLEAN,
    firstAidKit: DataTypes.BOOLEAN,
    roadsideAssistance: DataTypes.BOOLEAN,
    roofRackStorage: DataTypes.BOOLEAN,
    hotSpot: DataTypes.BOOLEAN,
    chargingStation: DataTypes.BOOLEAN
  }, {});
  
  Amenity.associate = function(models) {
    Amenity.belongsTo(models.Van, { foreignKey: 'vanId' });
  };

  return Amenity;
};
