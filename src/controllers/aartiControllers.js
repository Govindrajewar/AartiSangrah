const Aarti = require("../model/aartiModule");

const getAllData = async (req, res) => {
  try {
    const response = await Aarti.find();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
};

module.exports = {
  getAllData,
};
