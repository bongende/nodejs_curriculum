const fs = require("fs");

const Image = require("../models/image");
const uploadToCloudinary = require("../helpers/cloudinaryHelper");

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
    const images = await Image.find({});

    if (images) {
      res.status(200).json({
        success: true,
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

module.exports = { uploadImageController, fetchImagesController };
