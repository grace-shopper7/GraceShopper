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

// /**
//  * instanceMethods
//  */
// Book.prototype.correctPassword = function (candidatePwd) {
//   return User.encryptPassword(candidatePwd, this.salt()) === this.password()
// }

// /**
//  * classMethods
//  */
// Book.generateSalt = function () {
//   return crypto.randomBytes(16).toString('base64')
// }

// Book.encryptPassword = function (plainText, salt) {
//   return crypto
//     .createHash('RSA-SHA256')
//     .update(plainText)
//     .update(salt)
//     .digest('hex')
// }

// /**
//  * hooks
//  */
// const setSaltAndPassword = user => {
//   if (user.changed('password')) {
//     user.salt = User.generateSalt()
//     user.password = User.encryptPassword(user.password(), user.salt())
//   }
// }

// Book.beforeCreate(setSaltAndPassword)
// Book.beforeUpdate(setSaltAndPassword)
