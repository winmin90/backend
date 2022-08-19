'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Posts, {
        foreignKey: "postId",
        targetKey: "postId",
      });
      this.belongsTo(models.Users, {
        foreignKey: "channel",
        targetKey: "channel",
      });
      this.belongsTo(models.Users, {
        foreignKey: "userimage",
        targetKey: "userimage",
      });
    }
  }
  Comment.init({
    commentId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};