const HospitalModal = require("../model/HospitalModal");

const hospitaModalGetAll = async (req, res) => {
  try {
    const hospital = await HospitalModal.find();
    res.status(200).json(hospital);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports = { hospitaModalGetAll };
