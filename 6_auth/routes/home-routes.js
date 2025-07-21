const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.get("/home", authMiddleware, adminMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;
  res.json({
    message:
      "welcome to the home page of th application, feel free to visit what is going out there.",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});

module.exports = router;
