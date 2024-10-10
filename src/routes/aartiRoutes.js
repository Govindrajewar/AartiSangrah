const express = require("express");
const { getAllData } = require("../controllers/aartiControllers.js");

const router = express.Router();

router.get("/getAllData", getAllData);

module.exports = router;
