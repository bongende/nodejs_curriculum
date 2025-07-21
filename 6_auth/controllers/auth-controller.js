const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//registter controller

const registerUser = async (req, res) => {
  try {
    // extract user information from the request body
    const { username, email, password, role } = req.body;

    // Check if the user already exist

    const checkExistingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (checkExistingUser) {
      res.status(400).json({
        success: false,
        message:
          "Username or Email already exist Please try with another username or email",
      });
    }

    // Hash user password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user and save in the DB

    const newlyCreeatedUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newlyCreeatedUser.save();

    if (newlyCreeatedUser) {
      res.status(201).json({
        success: true,
        message: `${username} registered successfully`,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "An error occureed in the user registration! Please try again",
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Some error ocured in creating the User! Please try again",
    });
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Check correctness of username

    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found, error in the username",
      });
    }

    // Check correcness of password

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      res.status(400).json({
        success: false,
        message: "Password incorrect",
      });
    }

    // create a token to store the credentials

    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "120m",
      }
    );

    res.status(200).json({
      success: true,
      message: "Logged successfully!",
      accessToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "some error occured in the login! Please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
