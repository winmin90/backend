'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Posts, {
        foreignKey: "channel",
        sourceKey: "channel",
      });
      this.hasMany(models.Posts, {
        foreignKey: "userimage",
        sourceKey: "userimage",
      });
      this.hasMany(models.Comments, {
        foreignKey: "channel",
        sourceKey: "channel",
      });
      this.hasMany(models.Comments, {
        foreignKey: "userimage",
        sourceKey: "userimage",
      });
      this.hasMany(models.likes, {
        foreignKey: "channel",
        sourceKey: "channel",
      });
    }
  }
  User.init({
    userId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    channel:
    {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },

    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userimage: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};