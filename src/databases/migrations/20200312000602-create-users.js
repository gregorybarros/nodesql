'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        secondName:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      office:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      dateBirth:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      dateAdm:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      zip:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      city:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      state:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      adress:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false,
      },
        eAdmin:{
          type: Sequelize.INTEGER,
          defaultValue: 0,
      },
        totalProt: {
          type: Sequelize.INTEGER,
          defaultValue:0,
        },
        phrase: {
          type: Sequelize.STRING,  
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('users');

  }
};
