const User = require("../models/User");

// @route   GET api/doctors
// @desc    Get all doctors
// @access  Public
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" }).select("-password");
    res.json(doctors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/doctors/:id
// @desc    Get doctor by ID
// @access  Public
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id).select("-password");
    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.json(doctor);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Doctor not found" });
    }
    res.status(500).send("Server Error");
  }
};
