const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  async checkPassword(userPassword) {
		try {
			return await bcrypt.compare(userPassword, this.password);
			
		} catch (error) {
			return false
		}
	}
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
    {
      hooks: {
        beforeCreate: async (newUserData) => {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      
      modelName: 'user',
    });

    module.exports = User;