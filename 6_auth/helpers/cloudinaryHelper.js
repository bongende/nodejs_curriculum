const cloudinary = require("../config/cloudinary");

const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: "house architecture",
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to upload to Cloudinary: ", error);
  }
};

console.log(uploadToCloudinary);

module.exports = uploadToCloudinary;
