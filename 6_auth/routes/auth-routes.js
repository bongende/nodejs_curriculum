const express = require("express");

const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");

const router = express.Router();

// all routes are related to user Authentication and User authorisation
const timeLog = (req, res, next) => {
  console.log("time: ", Date.now().toLocaleString());
  next();
};

router.use(timeLog);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/password/change", authMiddleware, changePassword);

module.exports = router;
