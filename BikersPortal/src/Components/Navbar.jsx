import React, { useEffect, useState } from "react";
import Logo from "./Images/LogoB.png";
import Login from "./Images/Login.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ handleLogout, size }) {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    window.addEventListener("storage", updateUser);
    updateUser();

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  return (
    <div className="container-fluid" style={{ fontFamily: "'Poppins', sans-serif"}}>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ boxShadow: "0px 6px 8px rgb(36, 34, 34)",zIndex: "1050", fontWeight: "500", background: "#E2E2D2", paddingTop: "13px", paddingBottom: "13px" }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo & Brand Name */}
          <div className="d-flex align-items-center">
            <img src={Logo} alt="Logo" style={{ height: "80px", width: "80px" }} />
            <NavLink
              to="/"
              className="navbar-brand ms-3"
              style={{ fontSize: "22px", fontWeight: "600", color: "#141D26" }}
            >
              BikersNX
            </NavLink>
          </div>

          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" style={{ fontSize: "18px", color: "#141D26" }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Equipments" style={{ fontSize: "18px", color: "#141D26" }}>
                  Equipments
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/GreetandMeet" style={{ fontSize: "18px", color: "#141D26" }}>
                  Ride and Revel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/UserPost" style={{ fontSize: "18px", color: "#141D26" }}>
                  SpotGallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/News" style={{ fontSize: "18px", color: "#141D26" }}>
                  News
                </NavLink>
              </li>

              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Challenge" style={{ fontSize: "18px", color: "#141D26" }}>
                    Challenge
                  </NavLink>
                </li>
              )}
            </ul>

            {/* Right Side: Login/Logout + Cart */}
            <div className="d-flex ms-auto">
              {user ? (
                <>
                  <span className="me-3" style={{ fontSize: "16px", fontWeight: "500", marginTop: "13px"}}>                 
                       Welcome, {user.User_Name}
                  </span>
                  {location.pathname === "/" && (
                    <button
                      className="btn btn-danger"
                      onClick={handleLogout}
                      style={{ marginRight: "15px", height: "40px", width: "100px", fontSize: "16px", marginTop:"4px" }}
                    >
                      Logout
                    </button>
                  )}
                </>
              ) : (
                <>
                  <img src={Login} alt="Login Icon" height="30px" style={{ marginTop: "5px" }} />
                  <NavLink className="btn me-3" to="/Login" style={{ fontSize: "16px", color: "#141D26" }}>
                    Login
                  </NavLink>
                </>
              )}
              <NavLink
                className="Cart-button btn btn-warning me-3 position-relative "
                to="/Order"
                style={{ fontSize: "16px", color: "#141D26" }}
              >
                Cart
                {size > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {size}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
