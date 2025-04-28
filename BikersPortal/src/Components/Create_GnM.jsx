import React, { useState } from "react";
import axios from "axios";
import "./Create_GnM.css";
import { toast } from "react-toastify";

const Create_GnM = () => {
    const [formData, setFormData] = useState({
        Event_Name: "",
        Event_Type: "Sunday Meetups",
        Date_Time: "",
        Venue: "",
        Hosted_By: "",
        Image_url: null,
        Map_Url: "",
        Address: "",
        Meet_Desc: "",
        TotalAttendees: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, Image_url: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validations
        if (!formData.Event_Name.trim()) {
            alert("Event Name is required.");
            toast.error("Event Name is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!formData.Date_Time) {
            alert("Date and Time is required.");
            toast.error("Date and Time is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!formData.Venue.trim()) {
            alert("Venue is required.");
            toast.error("Venue is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!formData.Hosted_By.trim()) {
            alert("Hosted By is required.");
            toast.error("Hosted By is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
                });
            return;
        }

        if (!formData.Image_url) {
            alert("Please upload an event image.");
            toast.error("Please upload an event image.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!formData.Address.trim()) {
            alert("Address is required.");
            toast.error("Address is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        if (!formData.Meet_Desc.trim()) {
            alert("Event Description is required.");
            toast.error("Event Description is required.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        const attendees = parseInt(formData.TotalAttendees);
        if (isNaN(attendees) || attendees <= 0) {
            alert("Please enter a valid number of attendees.");
            toast.error("Please enter a valid number of attendees.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
            return;
        }

        // Format Date_Time to ISO format
        const formattedDate = new Date(formData.Date_Time).toISOString();
        const formDataToSend = new FormData();

        Object.keys(formData).forEach((key) => {
            if (key === "Date_Time") {
                formDataToSend.append(key, formattedDate);
            } else {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const response = await axios.post("https://localhost:44384/api/AddMeet", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Success:", response.data);
            alert("Event created successfully!");
            toast.success("Event created successfully!", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            alert("Failed to create event.");
            toast.error("Failed to create event.", {
                position: "top-right",
                autoClose: 3000,
                closeButton: false,
                hideProgressBar: false,
                theme: "colored",
            });
        }
    };

    return (
        <div className="pb-5 pt-5">
            <div className="GnMcontainer container pe-5 ps-5 pb-5">
                <h2 className="mb-4">Create Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Event Name</label>
                        <input type="text" name="Event_Name" className="form-control" placeholder="Enter event name" required onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Event Type</label>
                        <select name="Event_Type" className="form-select" onChange={handleChange}>
                            <option>Sunday Meetups</option>
                            <option>Moto Camping</option>
                            <option>Charity Rides</option>
                            <option>Breakfast Rides</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Date and Time</label>
                        <input type="datetime-local" name="Date_Time" className="form-control" required onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Venue</label>
                        <input type="text" name="Venue" className="form-control" placeholder="Enter venue" required onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Hosted By</label>
                        <input type="text" name="Hosted_By" className="form-control" placeholder="Enter host name" required onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Event Image</label>
                        <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Map URL</label>
                        <input type="url" name="Map_Url" className="form-control" placeholder="Enter Google Maps URL" onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea name="Address" className="form-control" rows="2" placeholder="Enter event address" required onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Event Description</label>
                        <textarea name="Meet_Desc" className="form-control" rows="4" placeholder="Describe the event" onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Total Attendees</label>
                        <input type="number" name="TotalAttendees" className="form-control" placeholder="Enter number of attendees" required onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create_GnM;
