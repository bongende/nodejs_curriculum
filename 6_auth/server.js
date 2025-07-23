const env = require("dotenv").config();
const express = require("express");

const connectToDB = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");
const imageRoutes = require("./routes/image-routes");
const uploadImageRoutes = require("./routes/image-routes");

connectToDB();

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares

app.use(express.json());
app.use("/", homeRoutes);
app.use("/api/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/image", imageRoutes);
app.use("/api/image", uploadImageRoutes);

app.listen(PORT, () => {
  console.log(`Server runing at port: ${PORT}`);
});
