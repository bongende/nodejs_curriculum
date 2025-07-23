require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const productRoutes = require("./routes/product-routes");
const bookRoutes = require("./routes/book-routes");

// connect to the database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/products", productRoutes);
app.use("/book", bookRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is now listening at port: ${process.env.PORT}`);
});
