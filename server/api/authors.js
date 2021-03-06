const router = require("express").Router();
const Author = require("../db/models/author");
const Book = require("../db/models/book");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book }]
    });

    res.json(authors);
  } catch (error) {
    next(error);
  }
});

router.get("/:authorId", async (req, res, next) => {
  try {
    const authors = await Author.findById(req.params.authorId);
    res.json(authors);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  if (!req.user.admin) next();
  try {
    const author = await Author.create(req.body);
    res.json(author);
  } catch (error) {
    next(error);
  }
});

router.put("/:authorId", async (req, res, next) => {
  if (!req.user.admin) next();
  try {
    const author = await Author.update(req.body, {
      where: {
        id: req.params.authorId
      }
    });

    res.json(author);
  } catch (error) {
    next(error);
  }
});

router.delete("/:authorId", async (req, res, next) => {
  if (!req.user.admin) next();
  try {
    await Author.destroy({
      where: {
        id: req.params.authorId
      }
    });

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
