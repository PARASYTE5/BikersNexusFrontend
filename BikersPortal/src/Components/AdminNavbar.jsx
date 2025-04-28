import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ handleLogout }) => {
  const [adminName, setAdminName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const storedName = localStorage.getItem("admin_name");
    if (storedName) {
      setAdminName(storedName);
    }
  }, []);

  const isDashboard = location.pathname === "/Admin/Dashboard";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top pt-3 pb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold mx-3" to="/">BikerNX</NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/Admin/Dashboard">Dashboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Admin/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Admin/orders">Orders</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Admin/products">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/Admin/reports">Reports</NavLink></li>
          </ul>
        </div>

        {adminName && <span className="navbar-text fw-semibold me-3">Welcome, {adminName}!</span>}
        {isDashboard && (
          <button
            type="submit"
            onClick={handleLogout}
            style={{
              width: "100px",
              padding: "12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
              fontSize: "16px",
              marginRight: "10px"
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
