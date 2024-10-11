const express = require("express");
const {
  getAllData,
  addNewAarti,
} = require("../controllers/aartiControllers.js");

const router = express.Router();

router.get("/getAllData", getAllData);
router.post("/addNewAarti", addNewAarti);

module.exports = router;
