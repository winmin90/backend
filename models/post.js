'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users,{
        foreignKey: "channel",
        targetKey: "channel",
    });
    this.belongsTo(models.Users,{
      foreignKey: "userimage",
      targetKey: "userimage",
  });
  this.hasMany(models.Comments,{
    foreignKey: "postId",
    sourceKey: "postId",
});
  this.hasMany(models.Likes,{
    foreignKey: "postId",
    sourceKey: "postId",
});
    }
  }
  Post.init({postId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
    title: DataTypes.STRING,
    discription: DataTypes.STRING,
    url: DataTypes.STRING,
    like: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};