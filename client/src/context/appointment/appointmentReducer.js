const appointmentReducer = (state, action) => {
  switch (action.type) {
    case "GET_APPOINTMENTS":
      return {
        ...state,
        appointments: action.payload,
        loading: false,
      };
    case "ADD_APPOINTMENT":
      return {
        ...state,
        appointments: [action.payload, ...state.appointments],
        loading: false,
      };
    case "GET_DOCTORS":
      return {
        ...state,
        doctors: action.payload,
        loading: false,
      };
    case "APPOINTMENT_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appointmentReducer;
