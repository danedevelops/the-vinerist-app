const express = require("express");
const router = express.Router();
const vintagesController = require("../controllers/vintagesController");

//---------------Routes------------//
router.get("/", vintagesController.getAllVintages);

router.get("/wineries/:id", vintagesController.getVintageByWineryID);

router.get("/:id", vintagesController.getVintageByID);

router.post("/images", vintagesController.postNewVintageImg);

router.post("/", vintagesController.postNewVintage);

router.get("/images/:id", vintagesController.getVintagesImagesByID);

module.exports = router;
