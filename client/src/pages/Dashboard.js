import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth/authContext";
import AppointmentContext from "../context/appointment/appointmentContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const appointmentContext = useContext(AppointmentContext);

  const { user } = authContext;
  const {
    appointments,
    doctors,
    getAppointments,
    getDoctors,
    addAppointment,
    loading,
  } = appointmentContext;

  useEffect(() => {
    getAppointments();
    if (user && user.role === "patient") {
      getDoctors();
    }
  }, [user, getDoctors, getAppointments]);

  const [booking, setBooking] = useState({
    doctorId: "",
    date: "",
    time: "",
  });

  const { doctorId, date, time } = booking;

  const onChange = (e) =>
    setBooking({ ...booking, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (doctorId === "" || date === "" || time === "") {
      alert("Please fill all fields");
    } else {
      addAppointment(booking);
      setBooking({ doctorId: "", date: "", time: "" });
      alert("Appointment Booked!");
    }
  };

  if (loading && !user) return <h4>Loading Dashboard...</h4>;

  return (
    <div className="grid-2">
      <div>
        <h1>Welcome, {user && user.name}</h1>
        <p>Role: {user && user.role}</p>

        {/* PATIENT: Book Appointment */}
        {user && user.role === "patient" && (
          <div className="card bg-light">
            <h3>Book Appointment</h3>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Select Doctor</label>
                <select
                  name="doctorId"
                  value={doctorId}
                  onChange={onChange}
                  required
                >
                  <option value="">-- Select Doctor --</option>
                  {doctors.map((doc) => (
                    <option key={doc._id} value={doc._id}>
                      Dr. {doc.name} ({doc.specialization || "General"})
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  name="time"
                  value={time}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                type="submit"
                value="Book Now"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
        )}
      </div>

      <div>
        <h3>
          {user && user.role === "doctor" ? "My Schedule" : "My Appointments"}
        </h3>
        {appointments !== null && appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          appointments.map((appt) => (
            <div key={appt._id} className="card my-1">
              <h4>
                {user && user.role === "doctor"
                  ? `With: ${appt.patientId ? appt.patientId.name : "Unknown"}`
                  : `Dr. ${appt.doctorId ? appt.doctorId.name : "Unknown"}`}
              </h4>
              <p>
                <strong>Date:</strong> {appt.date} <br />
                <strong>Time:</strong> {appt.time} <br />
                <strong>Status:</strong>{" "}
                <span className={`status-${appt.status}`}>{appt.status}</span>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
