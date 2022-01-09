'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    vanId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});

  Image.associate = function(models) {
    Image.belongsTo(models.Van, { foreignKey: 'vanId' });
  };
  
  return Image;
};
