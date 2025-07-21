const express = require("express");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Please login or sign in to access this page",
    });
  }

  // Decode the given token

  try {
    req.userInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occured, please try agin later",
    });
  }

  next();
};

module.exports = authMiddleware;
