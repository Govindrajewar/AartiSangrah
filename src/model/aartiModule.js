const mongoose = require("mongoose");

const AartiSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lyrics: { type: String, required: true },
});

module.exports = mongoose.model("Aarti", AartiSchema);
