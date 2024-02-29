const express = require("express");

const jobController = require("../controllers/job");

const router = express.Router();

router.post("", jobController.createJob);

router.get("", jobController.getJob);

module.exports = router;
