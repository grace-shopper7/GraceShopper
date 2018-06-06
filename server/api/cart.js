const router = require('express').Router()
const Cart = require('../db/models/cart')
const Book = require('../db/models/book')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    let cart = await Cart.findAll({where: {id: req.params.id}, include: [Book]});
    res.json(cart)
  } catch (err) {console.log(err)}
})

router.put('/add/:id', async (req, res, next) => {
    try {
        let activeCart = await Cart.findOne({where: {id: req.params.id, completed: false}})
        let book = await Book.findOne({where: {id: req.body.id}})
        await activeCart.addBook(book)
        activeCart = await Cart.findOne({where: {id: req.params.id, completed: false}, include: [Book]})
        res.json(activeCart)
    } catch (err) {console.log(err)}
})

router.put('/remove/:id', async (req, res, next) => {
    try {
        let activeCart = await Cart.findOne({where: {id: req.params.id, completed: false}})
        let book = await Book.findOne({where: {id: req.body.id}})
        await activeCart.removeBook(book)
        activeCart = await Cart.findOne({where: {id: req.params.id, completed: false}, include: [Book]})
        res.json(activeCart)
    } catch (err) {console.log(err)}
})


module.exports = router
