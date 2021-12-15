const express = require("express");
const router = express.Router();
const reviewsController = require("../controllers/reviewsController");

//---------------Routes------------//
router.get("/:id", reviewsController.getReviewsByID);

router.get("/selected/:id", reviewsController.getReviewsByVintagesID);

router.post("/images", reviewsController.postNewReviewImg);

router.post("/", reviewsController.postNewReview);

router.patch("/likes/:id", reviewsController.addLike);

router.get("/likes/:id", reviewsController.getLikes);

router.get("/images/:id", reviewsController.getReviewsImagesByID);

router.get("/number", reviewsController.getNumberofReviewersByID);

router.get("/average/:id", reviewsController.getAverageofReviewsByID);

module.exports = router;
