import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidePanel from './AdminSidePanel';

const Dashboard = ({handleLogout}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "738px" }}>
      <AdminNavbar handleLogout={handleLogout}/>
        <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>Manage your admin panel from here.</p>
        </div>
      </div>
  );
};

export default Dashboard;
