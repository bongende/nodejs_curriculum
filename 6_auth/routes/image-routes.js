const express = require("express");

const uploadImage = require("../controllers/image-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImageController,
  fetchImagesController,
} = require("../controllers/image-controllers");

const router = express.Router();

// upload the image
router.post(
  "/upload",
  authMiddleware,
  adminMiddleware,
  uploadMiddleware.single("image"),
  uploadImageController
);

//Get images
router.get("/", authMiddleware, fetchImagesController);

module.exports = router;
