const User = require('./user')
const Address = require('./address')
const Cart = require('./cart')
const Book = require('./book')
const Author = require('./author')
const Review = require('./review')
const Transaction = require('./transaction')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
Book.belongsTo(Author)
Author.hasMany(Book)

Review.belongsTo(Book)
Book.hasMany(Review)

Review.belongsTo(User)
User.hasMany(Review)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsToMany(Book, {through: Transaction})
Book.belongsToMany(Cart, {through: Transaction})

Address.belongsTo(User)
User.hasOne(Address)

Address.belongsTo(Cart)
Cart.hasOne(Address)

User.afterCreate(async user => {
  const cart = await Cart.create({status: "active"})
  await user.addCart(cart)
})

module.exports = {
  User, Address, Cart, Book, Author, Review, Transaction
}
