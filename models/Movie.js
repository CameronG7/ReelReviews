const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(75),
      allowNull: false,
      validate:{
        isAlphanumeric: true,
      },
    },
    // tagId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'tag',
    //     key: 'id',

    //   }
    // },
    // reviewId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'review',
    //     key: 'id',

    //   }
    // },
  },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      
      modelName: 'movie',
    });

    module.exports = Movie;