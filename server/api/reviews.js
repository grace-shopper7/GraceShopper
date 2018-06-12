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
  if (req.user.id != req.body.userId) next()
  try {
    const review = await Review.create(req.body);
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.put("/:reviewId", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!(req.user.admin || req.user.id == review.userId)) next();
    await review.update(req.body)
    res.json(review);
  } catch (error) {
    next(error);
  }
});

router.delete("/:reviewId", async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.reviewId);
    if (!(req.user.admin || req.user.id == review.userId)) next();
    await review.destroy()
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
