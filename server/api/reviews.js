const router = require("express").Router();
const Review = require("../db/models/review");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.get("/:bookId", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.Id);
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.put("/:reviewId", async (req, res, next) => {
  try {
    const review = await Review.update(req.body, {
      where: {
        id: req.params.reviewId
      }
    });
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.delete("/:reviewId", async (req, res, next) => {
  try {
    await Review.destory({
      where: {
        id: req.params.authorId
      }
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
