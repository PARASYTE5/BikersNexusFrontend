import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("admin_name");
    if (storedName) {
      setAdminName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("admin_name");
    localStorage.removeItem("admin_token");
    window.location.href = "/AdminLogin";
  };

  return (
    <div style={{position:"fixed", marginTop:"80px"}}>
      {/* Sidebar */}
      <aside
        style={{width: "150px", background: "#343a40", color: "white",  padding: "15px", display: "flex",flexDirection: "column",gap: "15px",position: "relative", height: "653px",
        }}
      >
        {/* Sidebar content */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <NavLink to="/Admin/Dashboard" style={linkStyle}>Dashboard</NavLink>
          <NavLink to="/Admin/Users" style={linkStyle}>Users</NavLink>
          <NavLink to="/Admin/Orders" style={linkStyle}>Orders</NavLink>
          <NavLink to="/Admin/Products" style={linkStyle}>Products</NavLink>
          <NavLink to="/Admin/Reports" style={linkStyle}>Reports</NavLink>
        </nav>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "auto",
            padding: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", marginLeft: "250px" }}></main>
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  padding: "8px 12px",
  borderRadius: "6px",
  transition: "0.3s",
};

export default Navbar;