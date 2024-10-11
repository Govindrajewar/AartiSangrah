const Aarti = require("../model/aartiModule");

const getAllData = async (req, res) => {
  try {
    const response = await Aarti.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

const addNewAarti = async (req, res) => {
  try {
    const newAarti = new Aarti(req.body);
    newAarti.save();
    res
      .status(201)
      .json({ message: "Aarti created successfully", Aarti: newAarti });
  } catch (error) {
    res.status(500).json({ message: "Error adding new Aarti", error });
  }
};

module.exports = {
  getAllData,
  addNewAarti,
};
