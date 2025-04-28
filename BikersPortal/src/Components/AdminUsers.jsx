import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './AdminUsers.css';

const AdminUsers = ({ handleLogout }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://localhost:44384/api/users")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }
        return response.json();
      })
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching users:", error));
  };

  const handleDelete = (userId) => {
    fetch(`https://localhost:44384/api/users/${userId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setUsers(users.filter(user => user.User_ID !== userId));
        } else {
          console.error('Error deleting user:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className="admin-container">
      <AdminNavbar handleLogout={handleLogout} />
      <div className="admin-main">
        <h2 className="admin-title text-center">Admin Users</h2>

        <div className="table-container">
          <table className="user-table table-bordered table-responsive">
            <thead>
              <tr>
                <th>Actions</th>
                <th>User Name</th>
                <th>First Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Profile Image</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(user.User_ID)}>
                        Delete
                      </button>
                    </td>
                    <td>{user.User_Name}</td>
                    <td>{user.User_FName}</td>
                    <td>{user.User_Email}</td>
                    <td>{user.User_Phno}</td>
                    <td>{user.User_Pfp ? 'Yes' : 'No'}</td>
                    <td>{user.User_IsActive ? "Active" : "Inactive"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
