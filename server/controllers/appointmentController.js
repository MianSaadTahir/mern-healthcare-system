const Appointment = require("../models/Appointment");
const User = require("../models/User");
const { validationResult } = require("express-validator");

// @route   POST api/appointments
// @desc    Book an appointment
// @access  Private
exports.bookAppointment = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { doctorId, date, time } = req.body;

  try {
    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== "doctor") {
      return res.status(404).json({ msg: "Doctor not found" });
    }

    const appointment = new Appointment({
      patientId: req.user.id,
      doctorId,
      date,
      time,
    });

    const savedAppointment = await appointment.save();
    res.json(savedAppointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   GET api/appointments
// @desc    Get all appointments for current user (Doctor or Patient)
// @access  Private
exports.getAppointments = async (req, res) => {
  try {
    let appointments;
    if (req.user.role === "doctor") {
      appointments = await Appointment.find({ doctorId: req.user.id })
        .populate("patientId", ["name", "email"])
        .sort({ date: -1 });
    } else {
      appointments = await Appointment.find({ patientId: req.user.id })
        .populate("doctorId", ["name", "specialization"])
        .sort({ date: -1 });
    }
    res.json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
