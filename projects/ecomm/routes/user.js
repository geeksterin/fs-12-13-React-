const express = require("express");

const userController = require("../controllers/user");

const router = express.Router();

router.post("/register", userController.userRegistration);

router.post("/login", userController.userLogin);

router.post("/logout", userController.userLogout);

module.exports = router;
