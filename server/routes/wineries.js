const express = require("express");
const router = express.Router();
const wineriesController = require("../controllers/wineriesController");

//---------------Routes------------//
router.get("/", wineriesController.getAllWineries);

router.get("/abbreviated", wineriesController.getWineriesIDAndName);

router.get("/:id", wineriesController.getWineryByID);

router.post("/images", wineriesController.postNewWineryImg);

router.get("/images/:id", wineriesController.getWineryImagesByID);

router.post("/", wineriesController.postNewWinery);

module.exports = router;
