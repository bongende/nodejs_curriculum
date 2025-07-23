const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          inStock: true,
          price: {
            $gte: 110,
          },
        },
      },

      {
        // Group our documents

        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Filtering applied was mades",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "An error occured",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "electronic",
        },
      },
      {
        // Phase 2, groupimg and ....

        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to analyse the data, try again later",
    });
  }
};

const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        id: 1,
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        category: "electronic",
        inStock: true,
        tags: ["laptop", "electronic"],
      },
      {
        id: 2,
        name: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        category: "mode",
        category: "electronic",
        inStock: false,
        tags: ["mode", "col"],
      },
      {
        id: 3,
        name: "Mens Cotton Jacket",
        price: 55.99,

        category: "mode",
        inStock: true,
        tags: ["mode", "fashion"],
      },
      {
        id: 4,
        name: "Mens Casual Slim Fit",
        price: 15.99,
        category: "mode",
        inStock: true,
        tags: ["style"],
      },
      {
        id: 5,
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        category: "style",
        inStock: false,
        tags: ["cool", "precious"],
      },
      {
        id: 6,
        name: "Solid Gold Petite Micropave ",
        price: 168,

        category: "electronic",
        inStock: "true",
        tags: ["high-tech"],
      },
    ];

    console.log(Product);

    const result = await Product.insertMany(sampleProducts);

    res.status(201).json({ success: true, data: result.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
