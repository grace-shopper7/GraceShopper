const router = require('express').Router()
module.exports = router;

router.use('/users', require('./users'))
router.use('/books', require('./books'))
router.use('/addresses', require('./addresses'))


router.use('/authors', require('./authors'))
router.use('/reviews', require('./reviews'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
