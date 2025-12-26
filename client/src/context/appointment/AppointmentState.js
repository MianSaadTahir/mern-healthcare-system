import React, { useReducer } from "react";
import axios from "axios";
import AppointmentContext from "./appointmentContext";
import appointmentReducer from "./appointmentReducer";
import { API_URL } from "../../config";

const AppointmentState = (props) => {
  const initialState = {
    appointments: [],
    doctors: [],
    error: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(appointmentReducer, initialState);

  // Get Appointments
  const getAppointments = async () => {
    try {
      const res = await axios.get(`${API_URL}/appointments`);

      dispatch({
        type: "GET_APPOINTMENTS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "APPOINTMENT_ERROR",
        payload:
          err.response && err.response.data
            ? err.response.data.msg
            : "Connection Error",
      });
    }
  };

  // Get Doctors
  const getDoctors = async () => {
    try {
      const res = await axios.get(`${API_URL}/doctors`);

      dispatch({
        type: "GET_DOCTORS",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "APPOINTMENT_ERROR",
        payload:
          err.response && err.response.data
            ? err.response.data.msg
            : "Connection Error",
      });
    }
  };

  // Add Appointment
  const addAppointment = async (appointment) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${API_URL}/appointments`,
        appointment,
        config
      );

      dispatch({
        type: "ADD_APPOINTMENT",
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: "APPOINTMENT_ERROR",
        payload:
          err.response && err.response.data
            ? err.response.data.msg
            : "Connection Error",
      });
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments: state.appointments,
        doctors: state.doctors,
        error: state.error,
        loading: state.loading,
        getAppointments,
        getDoctors,
        addAppointment,
      }}
    >
      {props.children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentState;
