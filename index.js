const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Aarti Server",
    version: "1.0.0",
    date: currentDate(),
    status: "Server is live",
  });
});

app.get("/aartiList", async (req, res) => {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db("AartiDatabase");
    const aartiCollection = database.collection("aartiCollection");


    const aartiList = await aartiCollection.find({name: "lolo lagla"})
    .toArray();
    res.json(aartiList);
  } catch (e) {
    console.error("Error connecting to MongoDB: ", e);
    return;
  } finally {
    await client.close();
  }
});


app.delete("/delete", async (req, res) => {
    const client = new MongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      const database = client.db("AartiDatabase");
      const aartiCollection = database.collection("aartiCollection");


      const aartiList = await aartiCollection.deleteOne({_id})
      .toArray();
      res.json(aartiList);
    } catch (e) {
      console.error("Error connecting to MongoDB: ", e);
      return;
    } finally {
      await client.close();
    }
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
