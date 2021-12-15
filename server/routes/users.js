const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/register").post(userController.registerUser);

router.route("/login").post(userController.loginUser);

router.route("/").post(userController.getUserData);

router.route("/img").post(userController.postNewUserImg);

module.exports = router;
