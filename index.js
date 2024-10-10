const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const aartiRoutes = require("./src/routes/aartiRoutes.js");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(aartiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Aarti Server",
    version: "2.0.0",
    date: currentDate(),
    status: "Server is live",
  });
});

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to MongoDB Server on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error: ", err);
  });

// generate date
const currentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
