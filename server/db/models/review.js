const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  date: {
    type: Sequelize.DATE
  }
});

module.exports = Review;
