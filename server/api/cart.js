const router = require("express").Router();
const { Cart, Book, User } = require("../db/models");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findAll({
      where: { id: req.params.id },
      include: [Book]
    });
    res.json(cart);
  } catch (err) {
    console.log(err);
  }
});

router.put("/add/:id", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { id: req.params.id, completed: false },
      include: [Book]
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.addBook(book);
    activeCart = await Cart.findOne({
      where: { id: req.params.id, completed: false },
      include: [Book]
    });
    res.json(activeCart);
  } catch (err) {
    console.log(err);
  }
});

router.put("/remove/:id", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { id: req.params.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.removeBook(book);
    activeCart = await Cart.findOne({
      where: { id: req.params.id, completed: false },
      include: [Book]
    });
    res.json(activeCart);
  } catch (err) {
    console.log(err);
  }
});

router.put("/checkout/:id", async (req, res, next) => {
  const activeCart = await Cart.findOne({
    where: { id: req.params.id, completed: false }
  });
  await activeCart.update({ completed: true, status: "Shippped" });
  const user = await User.findById(req.params.id);
  const previous = user.getCarts();
  const active = await Cart.create({ status: "active" });
  await user.addCart(active);
  res.json({previous, active});
});

module.exports = router;
