const router = require("express").Router();
const { Cart, Book, User, Author } = require("../db/models");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      where: { userId: req.params.id },
      include: [{model: Book, include: [Author], required: false}]
    });
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

router.put("/add/:id", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.addBook(book);
    activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false },
      include: [{model: Book, include: [Author], required: false}]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/remove/:id", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.removeBook(book);
    activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false },
      include: [{model: Book, include: [Author]}]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/checkout", async (req, res, next) => {
  const activeCart = await Cart.findById(req.body.id);
  await activeCart.update({ completed: true, status: "Shippped" });
  const user = await activeCart.getUser();
  const address = await user.getAddress()
  if (address) activeCart.setAddress(address)
  const previous = await user.getCarts();
  const active = await Cart.create({ status: "active" });
  await user.addCart(active);
  res.json({previous, active});
});

module.exports = router;
