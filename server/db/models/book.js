const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../db");

const Book = db.define("book", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publicationDate: {
    type: Sequelize.DATE
  },
  publisher: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT,
    get() {
      return this.getDataValue("price") / 100;
    },
    set(val) {
      this.setDataValue("price", val * 100);
    }
  },
  genre: {
    type: Sequelize.STRING,
    get() {
      return this.getDataValue("genre").split("|");
    }
  },
  condition: {
    type: Sequelize.ENUM("new", "used")
  },
  description: {
    type: Sequelize.TEXT
  },
  numberSold: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Book;
