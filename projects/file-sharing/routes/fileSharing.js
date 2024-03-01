const express = require("express");

const fileSharingController = require("../controllers/fileSharing");

const router = express.Router();

router.post("/api/files", fileSharingController.uploadFile); // Upload file API

router.get("/files/:uuid", fileSharingController.generateLink); // File link generation API

router.get("/files/download/:uuid", fileSharingController.downloadFile); // Download file End Point

router.post("/api/files/send", fileSharingController.sendFileLinkOnEmail); // Send Email with link

module.exports = router;
