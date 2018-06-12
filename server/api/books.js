const router = require("express").Router();
const { Book, Author, Review, User } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {


    console.log(req.params)
    let result = await Book.findAll({ include: [Author, { model: Review, include: [User] }] });
    res.json(result);

  } catch (err) {
    next(err);

  }
});

router.get("/:bookId", async (req, res, next) => {
  try {
    let result = await Book.findById({
      where: {
        id: req.params.id
      },
      include: [Review]
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  if (!req.user.admin) next()
  try {
    let newBook = await Book.create(req.body);
    res.json(newBook);
  } catch (err) {
    next(err);
  }
});

router.put("/:bookId", async (req, res, next) => {
  if (!req.user.admin) next()
  try {
    let updatedBook = await Book.update(req.body, {
      where: {
        id: req.params.bookId
      }
    });
    res.json(updatedBook);
  } catch (err) {
    next(err);
  }
});

router.delete("/:bookId", async (req, res, next) => {
  if (!req.user.admin) next()
  try {
    await Book.destroy({ where: { id: req.params.bookId } });
    res.status(204).send();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
