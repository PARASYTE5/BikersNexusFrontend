import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Image from "./Images/LoginBackground.jpg";
import "font-awesome/css/font-awesome.min.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ handleLogout }) => {
  const [credentials, setCredentials] = useState({
    User_Email: "",
    User_Password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!credentials.User_Email || !credentials.User_Password) {
      toast.error("Please enter email and password.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
      return;
    }

    try {
      const response = await axios.post("https://localhost:44384/api/login", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 && response.data) {
        toast.success("Login Successful!", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
        });

        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("User_ID", response.data.User_ID);
        localStorage.setItem("User_Email", response.data.User_Email);
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        toast.error("Invalid login credentials. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="OutSide" style={{ paddingTop: "50px" }}>
      <button className="btn back-button" onClick={handleBackClick} style={{ top: "15px" }}>
        <i className="fa fa-arrow-left"></i>
      </button>

      <div className="login-container bg-light">
        <div className="image-section">
          <img src={Image} alt="Login Background" />
        </div>
        <div className="form-section">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="text-dark form-control"
                id="email"
                name="User_Email"
                value={credentials.User_Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="text-dark form-control"
                id="password"
                name="User_Password"
                value={credentials.User_Password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
          <p>
            Don't have an account? <NavLink to="/register">Sign up</NavLink>
          </p>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
