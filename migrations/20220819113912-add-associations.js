'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Posts", "channel", {
      type: Sequelize.STRING,
      allowNull: true,
      references: {
        model: "Users", // Users 모델에서
        key: "channel", // 그 아이디 값을 참고합니다.
      },
      onUpdate: "CASCADE",
      // onDelete: "SET NULL",
    });

    await queryInterface.addColumn("Posts", "userimage", {
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
