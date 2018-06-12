const router = require("express").Router();
const Address = require("../db/models/address");
const User = require("../db/models/user");
module.exports = router;

router.get("/:userId", async (req, res, next) => {
  if (req.user.id != req.params.userId) next();
  try {
    const address = await Address.findOne({
      where: {
        userId: req.params.userId
      }
    });

    res.json(address);
  } catch (error) {
    next(error);
  }
});

router.post("/add/:userId", async (req, res, next) => {
  if (req.user.id != req.params.userId) next();
  try {
    const user = await User.findById(req.params.userId);
    const newAddress = await Address.create(req.body);
    await newAddress.setUser(user);
    res.json(newAddress);
  } catch (error) {
    next(error);
  }
});

router.put("/edit/:userId", async (req, res, next) => {
  if (req.user.id != req.params.userId) next();
  try {
    let address = await Address.findOne({
      where: { userId: req.params.userId }
    });
    address = address
      ? await address.update(req.body)
      : await Address.create({ userId: req.params.userId, ...req.body });
    res.json(address);
  } catch (error) {
    next(error);
  }
});
