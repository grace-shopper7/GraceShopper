const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router;

router.get('/', (req, res, next) => {
  User.findAll({
    // explicitly select only the id and email fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
    attributes: ['id', 'email']
  })
    .then(users => res.json(users))
    .catch(next)
})


router.put('/:userId', async (req, res, next) => {
  try {
       await User.update(req.body, { where: {
      id: req.params.userId
    }})
    res.json(await User.findById(req.params.userId))
  } catch (err) {console.log(err)}
})


router.delete('/:userId', async (req, res, next) => {
  try {
    await User.destroy({ where: {
      id: req.params.userId
    }})
    res.status(204).send()
  } catch (err) {console.log(err)}
})
