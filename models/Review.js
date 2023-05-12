const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL(3,1),
      allowNull: false,
      validate: {
        max: 10,
        isDecimal: true,
      }

    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',

      }
    },
    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id',

      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',

      }
    }
  },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
     
      modelName: 'review',
    });

    module.exports = Review;