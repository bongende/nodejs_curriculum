const express = require("express");

const { registerUser, loginUser } = require("../controllers/auth-controller");

const router = express.Router();

// all routes are related to user Authentication and User authorisation
const timeLog = (req, res, next) => {
  console.log("time: ", Date.now().toLocaleString());
  next();
};

router.use(timeLog);

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
