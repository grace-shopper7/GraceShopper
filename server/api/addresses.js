const router = require('express').Router()
const Address = require('../db/models/address')
const User = require('../db/models/user')
module.exports = router;


router.put('/add/:userId', async (req, res, next) => {
  try {

    const user = await User.findById(req.params.userId)
    // const address = await Address.findOne({where: {
    //   id: req.params.userId}})

    // if (address) {

    //   await address.update(req.body)
    //   user.addAddress(address)
    //   res.json(await Address.findById(req.params.id))

    // } else {

      console.log(req.body)
      const newAddress = await Address.create(req.body)
      await newAddress.setUser(user)
      res.json(newAddress)


    // }



  } catch (error) {next(error)}
})

