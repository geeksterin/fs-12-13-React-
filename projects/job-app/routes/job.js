const express = require("express");

const jobController = require("../controllers/job");

const router = express.Router();

router.post("", jobController.createJob);

router.get("", jobController.getJob);

router.patch("", jobController.editJob);

router.delete("", jobController.deleteJob);

module.exports = router;
