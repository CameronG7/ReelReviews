const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ReviewTag extends Model {}

ReviewTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reviewId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'movie',
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review_tag'
  }
);

module.exports = ReviewTag;