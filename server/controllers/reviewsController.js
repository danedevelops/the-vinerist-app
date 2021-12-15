const reviews = require("../models/reviewsModel");

async function getReviewsByID(req, res) {
  const data = await reviews.findReviewsByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function postNewReview(req, res) {
  if (
    !req.body.user_id ||
    !req.body.user_level ||
    !req.body.user_review ||
    !req.body.star_review
  ) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: ["user_id, user_level, user_review, star_review"],
    });
  }
  const data = await reviews.insertReview(req.body);
  res.json(data);
}

async function postNewReviewImg(req, res) {
  if (!req.body.reviewsID || !req.body.imageLink) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: [""],
    });
  }
  const data = await reviews.insertReviewImg(req.body);
  res.json(data);
}

async function getReviewsByVintagesID(req, res) {
  const data = await reviews.findReviewsByVintagesID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getReviewsImagesByID(req, res) {
  const data = await reviews.getReviewsImagesByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getNumberofReviewersByID(req, res) {
  const data = await reviews.getNumberofReviewersByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getAverageofReviewsByID(req, res) {
  const data = await reviews.getAverageofReviewsByID(parseInt(req.params.id));
  res.status(200).json(data);
}

async function getLikes(req, res) {
  const data = await reviews.getLikes(parseInt(req.params.id));
  console.log(data);
  res.status(200).json(data);
}

async function addLike(req, res) {
  const data = await reviews.addLike(parseInt(req.params.id));
  res.status(200).json(data);
}

module.exports = {
  getReviewsByID,
  postNewReview,
  getReviewsByVintagesID,
  postNewReviewImg,
  getReviewsImagesByID,
  getNumberofReviewersByID,
  getAverageofReviewsByID,
  getLikes,
  addLike,
};
