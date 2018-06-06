const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')


const Author = db.define('author', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  DateOfBirth: {
    type: Sequelize.DATE,
  },
  countryOfOrigin: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
})

module.exports = Author;
