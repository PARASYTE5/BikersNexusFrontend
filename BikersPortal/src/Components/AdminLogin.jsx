import React, { useState, useRef } from "react";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch("https://localhost:44384/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ User_Email: email, User_Password: password }),
      });

      if (!response.ok) {
        setError("Invalid credentials or unauthorized access");
        toast.error("Invalid credentials or unauthorized access", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
        });
        return;
      }

      const data = await response.json();

      // Ensure user has the "Admin" role before allowing login
      if (data.Roles && data.Roles.includes("Admin")) {
        localStorage.setItem("admin_token", JSON.stringify(data)); // Store admin token
        localStorage.setItem("admin_name", data.User_Name); // Store admin name
        localStorage.setItem("isLoggedIn", "true"); // ✅ Set login state
        toast.success(`Login Successful! Welcome, ${data.User_Name}`, {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
        });
        window.location.href = "/Admin/Dashboard"; // Redirect to admin panel
      } else {
        setError("Access Denied: Only admins can log in.");
        toast.error("Access Denied: Only admins can log in.", {
          position: "top-right",
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
          theme: "colored",
        });
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f4f4f4" }}>
      <div style={{ padding: "30px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff", width: "400px", textAlign: "center" }}>
        <h2>Admin Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin} autoComplete="off">
          <input type="email" placeholder="Email" ref={emailRef} required autoComplete="off" style={{ width: "100%", padding: "12px", margin: "15px 0", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px" }} />
          <input type="password" placeholder="Password" ref={passwordRef} required autoComplete="off" style={{ width: "100%", padding: "12px", margin: "15px 0", border: "1px solid #ccc", borderRadius: "6px", fontSize: "16px" }} />
          <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "6px", fontSize: "16px" }}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
