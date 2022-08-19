'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Comments", "postId", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Posts", // Users 모델에서
        key: "postId", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      // onDelete: "SET NULL",
    });

    await queryInterface.addColumn("Comments", "channel", {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: "Users", // Users 모델에서
        key: "channel", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      // onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Comments", "userimage", {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: "Users", // Users 모델에서
        key: "userimage", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      // onDelete: "SET NULL",
    });
  },  

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
