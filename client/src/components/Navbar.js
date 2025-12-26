import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { isAuthenticated, logout, user } = authContext;
  // const { clearAppointments } = appointmentContext; // Not used yet

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  const authLinks = (
    <>
      <li className="nav-item">
        <span className="nav-greeting">Hello, {user && user.name}</span>
      </li>
      {/* Show Dashboard only if not on dashboard? Or always? Always is fine. */}
      <li>
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!" className="nav-link btn-logout">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link btn-login">
          Login
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-primary">
      <div className="container navbar-container">
        <h1>
          <Link to="/" className="logo">
            <i className="fas fa-heartbeat"></i> HealthCare
          </Link>
        </h1>
        <ul className="nav-menu">{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
