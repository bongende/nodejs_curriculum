// require("dotenv").config();

const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      //`mongodb+srv://christobongende2105:${process.env.DB_KEY}@cluster0.uqxs1tw.mongodb.net/`
      `mongodb+srv://christobongende2105:${process.env.DB_KEY}@cluster0.ly0e6es.mongodb.net/`
    );
    console.log("Database connected successfully!");
  } catch (err) {
    console.log("An error occure in connecting to the database: ", err);
    process.exit(1);
  }
};

module.exports = connectToDB;
