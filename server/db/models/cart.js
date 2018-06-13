const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  completed: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
  },
  status: {
    type: Sequelize.STRING,
  },
  session: {
    type: Sequelize.STRING,
    defaultValue: null
  }
})

module.exports = Cart
