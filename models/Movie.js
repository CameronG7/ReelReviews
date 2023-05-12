const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate:{
        isAlphanumeric: true,
      },
    },
    tagId: {
      type: DataTypes.UUID,
      references: {
        model: 'tag',
        key: 'id',

      }
    },
    reviewId: {
      type: DataTypes.UUID,
      references: {
        model: 'review',
        key: 'id',

      }
    },
  },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'movie',
    });

    module.exports = Movie;