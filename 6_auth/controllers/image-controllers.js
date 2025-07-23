const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const Image = require("../models/image");
const uploadToCloudinary = require("../helpers/cloudinaryHelper");
const { console } = require("inspector");

const uploadImageController = async (req, res) => {
  try {
    // check if the file is missing from the requrest object

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "File is required, please upload an image",
      });
    }

    console.log(req.file);

    // upload to cloudinary

    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // Store the image url and the publicId to mongoDB

    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId,
    });

    await newlyUploadedImage.save();

    // Delete the file for local storage

    fs.unlinkSync(req.file.path);

    res.status(201).json({
      success: true,
      message: "Image uploaded Successfully",
      image: newlyUploadedImage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message:
        "Something went wrong in unploading the image, please try again!",
    });
  }
};

const fetchImagesController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || "createdAt";
    const sortOrder = req.query.sortOrder || "asc" ? 1 : -1;
    const totlaImages = await Image.countDocuments();
    const totlaPages = Math.ceil(totlaImages / limit);

    const sortObj = {};
    sortObj[sortBy] = sortOrder;

    const images = await Image.find().sort(sortObj).skip(skip).limit(limit);

    if (images) {
      res.status(200).json({
        success: true,
        currentPage: page,
        totlaPages,
        totlaImages,
        data: images,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message:
        "Something went wrong in fetching the images, please try again later!",
    });
  }
};

const deleteImageController = async (req, res) => {
  try {
    // get image Id
    const currentImageId = req.params.id;

    // get who is deleting the image (current user)
    const userId = req.userInfo.userId;

    // find current image

    const image = await Image.findById(currentImageId);

    !image ||
      res.staus(400).json({ success: false, message: "Image not found" });

    // check if current image is upploaded by current user

    image.uploadedBy.toString() !== userId ||
      res.status(403).json({
        success: false,
        message: "Permission denied, only who upload can delete",
      });

    // deleting image from cloudinary and the from mongoDB

    await cloudinary.uploader.destroy(image.publicId);
    await Image.findByIdAndDelete(currentImageId);

    res.status(201).json({
      success: false,
      message: "Image deleted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "There were a problem in deleting the image, please try agail",
    });
  }
};

module.exports = {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
};
