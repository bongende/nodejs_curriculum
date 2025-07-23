const express = require("express");
const router = express.Router();

const {
  insertSampleProducts,
  getProductStats,
  getProductAnalysis,
} = require("../controllers/product-controllers");

router.post("/upload", insertSampleProducts);
router.get("/stats", getProductStats);
router.get("/analysis", getProductAnalysis);

module.exports = router;
