import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import AppointmentState from "./context/appointment/AppointmentState";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";

// Placeholder Pages (will implement next)
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AppointmentState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AppointmentState>
    </AuthState>
  );
};

export default App;
