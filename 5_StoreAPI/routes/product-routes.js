const express = require("express");
const {
  getAllProducts,
  getSingleProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product-controller");

// create express router
const router = express.Router();

//All the routes related to Product
router.get("./", getAllProducts);
router.get("/product/:id", getSingleProductById);
router.post("/add", createNewProduct);
router.put("/update/product/:id", updateProduct);
router.delete("/delete/product/:id", deleteProduct);

module.exports = router;
