const router = require('express').Router()
const { Book } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let result = await Book.findAll({include: [Author]});
    res.json(result)
  } catch (err) {console.log(err)}
})

router.get('/:bookId', async (req, res, next) => {
  try {
    let result = await Book.findById({ where: {
      id: req.params.id
    }});
    res.json(result);
  } catch (err) {console.log(err)}
})

router.post('/', async (req, res, next) => {
  try {
    let newBook = await Book.create(req.body)
    res.json(newBook)
  } catch (err) {console.log(err)}
})

router.put('/:bookId', async (req, res, next) => {
  try {
    let updatedBook = await Book.update(req.body, {where: {
      id: req.params.bookId
    }})
    res.json(updatedBook)
  } catch (err) {console.log(err)}
})

router.delete('/:bookId', async (req, res, next) => {
  try {
    await Book.destroy({ where: { id: req.params.bookId }})
    res.status(204).send()
  } catch (err) {console.log(err)}
})

module.exports = router
