const adminMiddleware = (req, res, next) => {
  if (req.userInfo.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied, you need to be an admin to access this service.",
    });
  }
  next();
};

module.exports = adminMiddleware;
