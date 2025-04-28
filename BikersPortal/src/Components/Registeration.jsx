import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

const Registration = () => {
    const [formData, setFormData] = useState({
        User_Name: "",
        User_FName: "",
        User_Email: "",
        User_Password: "",
        Confirm_Password: "",
        User_Phno: "",
        User_Pfp: null,
        User_DOB: "",
        User_Bio: "",
        Address_Line1: "",
        Address_Line2: "",
        City: "",
        State: "",
        Postal_Code: "",
        Country: "",
    });

    const validateName = (fname) => /^[a-zA-Z\s]+$/.test(fname);
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) =>
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password);
    const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);
    const validatePostalCode = (code) => /^[0-9]{5,6}$/.test(code);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
            if (allowedTypes.includes(fileType)) {
                setFormData({ ...formData, User_Pfp: file });
            } else {
                toast.error("Only image files (PNG, JPG, JPEG) are allowed.", {
                    position: "top-right",
                    autoClose: 3000,
                    closeButton: false,
                    hideProgressBar: false,
                    theme: "colored",
                });
                e.target.value = null;
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            User_Email,
            User_Password,
            Confirm_Password,
            User_Phno,
            Postal_Code,
        } = formData;

        if (User_Password !== Confirm_Password) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!validateEmail(User_Email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }
        if (!validateName(formData.User_FName)) {
            toast.error("Name can only contain letters and spaces.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!validatePassword(User_Password)) {
            toast.error(
                "Password must be at least 6 characters long and include at least one letter and one number.",
                {
                    position: "top-right",
                    autoClose: 3000,
                    closeButton: false,
                    hideProgressBar: false,
                    theme: "colored",
                }
            );
            return;
        }

        if (!validatePhone(User_Phno)) {
            toast.error("Phone number must be exactly 10 digits.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!validatePostalCode(Postal_Code)) {
            toast.error("Postal code must be 5 or 6 digits.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        const { Confirm_Password: _, ...newUser } = formData;
        newUser.Roles = "User";
        newUser.Total_Badges = null;
        newUser.User_RegDate = new Date().toISOString();
        newUser.User_IsActive = true;

        const formDataToSend = new FormData();
        Object.keys(newUser).forEach((key) => {
            formDataToSend.append(key, newUser[key]);
        });

        if (formData.User_Pfp) {
            formDataToSend.append("User_Pfp", formData.User_Pfp);
        }

        try {
            const response = await axios.post("https://localhost:44384/api/users", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("User Registered:", response.data);
            toast.success("User Registered Successfully!", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            setTimeout(() => {
                window.location.href = "/Login";
            }, 3000);
        } catch (error) {
            console.error("Error registering user:", error);
            toast.error("Failed to register user. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <ToastContainer />
            <div style={{ paddingTop: "130px" }}>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="card p-4 shadow-lg w-75" style={{ height: "auto" }}>
                        <h2 className="text-center mb-4">User Registration</h2>
                        <form onSubmit={handleSubmit} className="row g-3">
                            {Object.keys(formData).map((key) =>
                                key !== "User_Pfp" ? (
                                    <div className="col-md-6 col-sm-12" key={key}>
                                        <label className="form-label">{key.replace(/_/g, " ")}</label>
                                        <input
                                            type={
                                                key.includes("Password")
                                                    ? "password"
                                                    : key.includes("DOB")
                                                        ? "date"
                                                        : "text"
                                            }
                                            className="form-control"
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                ) : (
                                    <div className="col-md-6 col-sm-12" key={key}>
                                        <label className="form-label">Profile Picture</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept=".png, .jpg, .jpeg"
                                            onChange={handleFileChange}
                                            required
                                        />
                                    </div>
                                )
                            )}
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;
