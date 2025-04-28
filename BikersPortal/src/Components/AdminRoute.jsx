import React from "react";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ Admin }) => {
  const adminData = JSON.parse(localStorage.getItem("admin_token"));

  if (!adminData || !adminData.Roles || !adminData.Roles.includes("Admin")) {
    return <Navigate to="/Admin" />;
  }

  return Admin;
};

export default AdminRoute;
