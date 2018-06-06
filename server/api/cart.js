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
        await activeCart.addBook(req.body)
        res.json(activeCart)
    } catch (err) {console.log(err)}
})

router.put('/remove/:id', async (req, res, next) => {
    try {
        let activeCart = await Cart.findOne({where: {id: req.params.id, completed: false}})
        await activeCart.removeBook(req.body)
        res.json(activeCart)
    } catch (err) {console.log(err)}
})


module.exports = router
