const Sequelize = require('sequelize')
const db = require('../db')

//Join table - Cart & Book
const Transaction = db.define('transaction', {
  quantity: {
      type: Sequelize.Integer,
      allowNull: false,
      defaultValue: 1
  },
})

module.exports = Transaction
