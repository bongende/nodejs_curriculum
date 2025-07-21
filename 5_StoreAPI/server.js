require("dotenv").config();

const express = require("express");
const connectToDB = require("./database/db");
const productRoutes = require("./routes/product-routes");

const app = express();
const PORT = process.env.PORT || 3000;

// connect to our db
connectToDB();

// use the middleware -> express.json()
app.use(express.json());

// create the route
app.use("./api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port: ${PORT}.`);
});
