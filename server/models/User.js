const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["patient", "doctor", "admin"],
    default: "patient",
  },
  phone: {
    type: String,
  },
  // Doctor specific fields (can be moved to separate profile, but keeping simple for now)
  specialization: {
    type: String,
  },
  experience: {
    type: Number,
  },
  feesPerConsultation: {
    type: Number,
  },
  timings: {
    start: String,
    end: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
