const Product = require("../models/products");

const getAllProducts = async (req, res) => {};

const getSingleProductById = async (req, res) => {};

const createNewProduct = async (req, res) => {
  try {
    const newlyCreatedProduct = await Product.create(req.body);

    if (newlyCreatedProduct) {
      res.status(201).json({
        success: true,
        message: "The product has been added successfully",
        data: newlyCreatedProduct,
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateProduct = async () => {};

const deleteProduct = async () => {};

module.exports = {
  getAllProducts,
  getSingleProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
