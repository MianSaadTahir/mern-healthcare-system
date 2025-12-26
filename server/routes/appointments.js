const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middlewares/authMiddleware");

router.post(
  "/",
  [
    auth,
    [
      check("doctorId", "Doctor ID is required").not().isEmpty(),
      check("date", "Date is required").not().isEmpty(),
      check("time", "Time is required").not().isEmpty(),
    ],
  ],
  appointmentController.bookAppointment
);

router.get("/", auth, appointmentController.getAppointments);

module.exports = router;
