import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/auth/authContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated } = authContext;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    specialization: "",
    feesPerConsultation: "",
  });

  const { name, email, password, role, specialization, feesPerConsultation } =
    user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please enter all fields");
    } else {
      register({
        name,
        email,
        password,
        role,
        specialization: role === "doctor" ? specialization : undefined,
        feesPerConsultation:
          role === "doctor" ? feesPerConsultation : undefined,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select name="role" value={role} onChange={onChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>
        {role === "doctor" && (
          <>
            <div className="form-group">
              <label htmlFor="specialization">Specialization</label>
              <input
                type="text"
                name="specialization"
                value={specialization}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="feesPerConsultation">Fees</label>
              <input
                type="number"
                name="feesPerConsultation"
                value={feesPerConsultation}
                onChange={onChange}
              />
            </div>
          </>
        )}
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
