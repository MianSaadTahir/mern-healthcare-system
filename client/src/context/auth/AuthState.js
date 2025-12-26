import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";
import { API_URL } from "../../config";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    // Check localStorage manually to be sure
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
    }

    try {
      const res = await axios.get(`${API_URL}/auth`);

      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Endpoint updated to /api/users based on backend implementation
      const res = await axios.post(`${API_URL}/users`, formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      // KEY FIX: Set token immediately to avoid race condition in loadUser
      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload:
          err.response.data.msg ||
          (err.response.data.errors
            ? err.response.data.errors[0].msg
            : "Registration failed"),
      });
    }
  };

  // Login User
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${API_URL}/auth`, formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });

      // KEY FIX: Set token immediately
      localStorage.setItem("token", res.data.token);
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg || "Login failed",
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // Load User on Mount
  React.useEffect(() => {
    if (localStorage.token) {
      loadUser();
    } else {
      dispatch({ type: AUTH_ERROR });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
