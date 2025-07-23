const express = require("express");

const uploadImage = require("../controllers/image-controllers");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const uploadMiddleware = require("../middlewares/upload-middleware");
const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
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
router.get("/get", authMiddleware, fetchImagesController);

// delete image
router.delete("/:id", authMiddleware, adminMiddleware, deleteImageController);

module.exports = router;
