const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'id',

      }
    },
    movieId: {
      type: DataTypes.UUID,
      references: {
        model: 'movie',
        key: 'id',

      }
    },
    tagId: {
      type: DataTypes.UUID,
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
      underscored: true,
      modelName: 'review',
    });

    module.exports = Review;