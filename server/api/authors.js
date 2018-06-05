const router = require('express').Router()
const { Author } = require('../db/models/author')
module.exports = router


router.get('/', async (req, res, next) => {
  try {

   const authors = await Author.findAll()
    res.json(authors)

  } catch (error) { next(error) }

})


router.get('/:authorId', async (req, res, next) => {
  try {

   const authors = await Author.findById(req.params.authorId)
    res.json(authors)

  } catch (error) { next(error) }

})

router.post('/', async (req, res, next) => {
  try {

   const author = await Author.create(req.body)
   res.json(author)

  } catch (error) { next(error) }

})


router.put('/:authorId', async (req, res, next) => {
  try {

   const author = await Author.update(req.body, {
     where: {
       id: req.params.authorId
     }
   })

   res.json(author)

  } catch (error) { next(error) }

})


router.delete('/:authorId', async (req, res, next) => {
  try {

    await Author.destory({
      where: {
        id: req.params.authorId
      }
    })

    res.status(204).end()


  } catch (error) { next(error) }

})
