const router = require("express").Router();
const { Cart, Book, Author, Address } = require("../db/models");
module.exports = router;

router.get("/guest", async (req, res, next) => {
  try {
    const carts = await Cart.findAll({
      where: { session: req.session.id },
      include: [{ model: Book, include: [Author], required: false }]
    });
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  if (req.user.id != req.params.id) next();
  try {
    const carts = await Cart.findAll({
      where: { userId: req.params.id },
      include: [{ model: Book, include: [Author], required: false }]
    });
    res.json(carts);
  } catch (err) {
    next(err);
  }
});

router.put("/add/:id", async (req, res, next) => {
  if (req.user.id != req.params.id) next();
  try {
    let activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.addBook(book);
    activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false },
      include: [{ model: Book, include: [Author], required: false }]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/remove/:id", async (req, res, next) => {
  if (req.user.id != req.params.id) next();
  try {
    let activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.removeBook(book);
    activeCart = await Cart.findOne({
      where: { userId: req.params.id, completed: false },
      include: [{ model: Book, include: [Author] }]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/checkout", async (req, res, next) => {
  if (req.user.id !== req.body.userId) next();
  try {
    const activeCart = await Cart.findById(req.body.id);
    await activeCart.update({ completed: true, status: "Shippped" });
    const user = await activeCart.getUser();
    const address = await user.getAddress();
    if (address) activeCart.setAddress(address);
    const previous = await Cart.findAll({
      where: {
        userId: user.id,
        completed: true
      },
      include: [{ model: Book, include: [Author], required: false }]
    });
    const active = await Cart.create({ status: "active" });
    await user.addCart(active);
    res.json({ previous, active });
  } catch (err) {
    next(err);
  }
});

router.post("/guest", async (req, res, next) => {
  try {
    const cart = await Cart.create({
      status: "active",
      session: req.session.id
    });
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

router.put("/guest/add", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { session: req.session.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.addBook(book);
    activeCart = await Cart.findOne({
      where: { session: req.session.id, completed: false },
      include: [{ model: Book, include: [Author], required: false }]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/guest/remove", async (req, res, next) => {
  try {
    let activeCart = await Cart.findOne({
      where: { session: req.session.id, completed: false }
    });
    const book = await Book.findOne({ where: { id: req.body.id } });
    await activeCart.removeBook(book);
    activeCart = await Cart.findOne({
      where: { session: req.session.id, completed: false },
      include: [{ model: Book, include: [Author], required: false }]
    });
    res.json(activeCart);
  } catch (err) {
    next(err);
  }
});

router.put("/guest/checkout", async (req, res, next) => {
  try {
    const activeCart = await Cart.findById(req.body.cart.id);
    await activeCart.update({ completed: true, status: "Shippped" });
    const address = await Address.findById(req.body.addressId);
    if (address) activeCart.setAddress(address);
    const previous = await Cart.findAll({
      where: {
        session: req.session.id,
        completed: true
      },
      include: [{ model: Book, include: [Author], required: false }]
    });
    const active = await Cart.create({
      status: "active",
      session: req.session.id
    });
    res.json({ previous, active });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
