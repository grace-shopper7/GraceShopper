const router = require('express').Router()
const Address = require('../db/models/address')
const User = require('../db/models/user')
module.exports = router;


router.get('/:userId', async (req, res, next) => {
  try {

    const  address = await Address.findOne({where: {
      userId: req.params.userId
    }})

    res.json(address)

  } catch (error) {next(error)}
})






router.post('/add/:userId', async (req, res, next) => {
  try {

    const user = await User.findById(req.params.userId)
      console.log(req.body)
      const newAddress = await Address.create(req.body)
      await newAddress.setUser(user)
      res.json(newAddress)



  } catch (error) {next(error)}
})


router.put('/edit/:userId', async (req, res, next) => {
  try {
    const [numberOfAffectedRows, affectedRows] = await Address.update(req.body, {
      where: {userId: req.params.userId},
      returning: true, // needed for affectedRows to be populated
      plain: true // makes sure that the returned instances are just plain objects
    })

      res.json(Address.findOne({
        where: {
          userId: req.params.userId
        }
      }))



  } catch (error) {next(error)}
})

