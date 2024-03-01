const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const FileSharingModel = require("../models/fileSharing");

const uploadPath = path.join(__dirname, "..", "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadPath),
  filename: (req, file, cb) => {
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
}).single("attachment");

const uploadFile = (req, res) => {
  upload(req, res, async (error) => {
    if (error) {
      console.log("ERROR", error);
      res.status(500).json({
        success: false,
        message: "Error uploading the file.",
      });
    } else {
      console.log("File uploaded successfully");
      console.log(req.file);
      const newFile = new FileSharingModel({
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
      });

      const newlyInsertedFile = await newFile.save();

      res.json({
        success: true,
        message: "Dummy upload file API",
        fileId: newlyInsertedFile._id, //uuid for file
      });
    }
  });
};

const generateLink = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy generate link API",
  });
};

const downloadFile = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy download file API",
  });
};

const sendFileLinkOnEmail = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy send link on email API",
  });
};

module.exports = {
  uploadFile,
  generateLink,
  downloadFile,
  sendFileLinkOnEmail,
};
