import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (authContext.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [authContext.isAuthenticated, navigate]);

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Healthcare Management Simplified</h1>
        <p className="lead">
          Book appointments with top doctors, manage your schedule, and take
          control of your health.
        </p>
        <div className="landing-buttons">
          <Link to="/register" className="btn btn-primary btn-lg">
            Get Started
          </Link>
          <Link to="/login" className="btn btn-light btn-lg">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
