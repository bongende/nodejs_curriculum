const multer = require("multer");
const path = require("path");

//Set our multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    const uniqueSufix = `${Date.now()}-${Math.round(Math.random() * 1e9)}.${
      file.mimetype.split("/")[1] /*.extname(file.originalname)*/
    }`;
    cb(null, `${file.filename}-${uniqueSufix}`); //TODO : fix this bug to get file uploaded with extension name
  },
});

// Add file filters functions

const checkFileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) cb(null, true);
  else cb(new Error("Not an image, please pload only images"));
};

// create an Multer middleware

module.exports = multer({
  storage,
  checkFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 /* Creating a 5mb limit fileSize */ },
});
