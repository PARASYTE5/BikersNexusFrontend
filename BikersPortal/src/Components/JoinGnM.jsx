import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './JoinGnM.css';
import 'react-toastify/dist/ReactToastify.css';

const JoinGnM = () => {
    const [events, setEvents] = useState([]);
    const imageBasePath = 'https://localhost:44384/Greet_Meet/';
    const email = localStorage.getItem('User_Email');

    useEffect(() => {
        fetch('https://localhost:44384/api/GetAll')
            .then(response => response.json())
            .then(data => {
                const currentDate = new Date();
                const upcomingEvents = data.filter(event => new Date(event.Date_Time) >= currentDate);
                setEvents(upcomingEvents);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const sendEmail = (eventDetails) => {
        const eventDateTime = new Date(eventDetails.Date_Time);

        const templateParams = {
            to_name: 'Rider', // Can be replaced with user input if available
            Event_name: eventDetails.Event_Name,
            Time: eventDateTime.toLocaleString(), // Example: 5/1/2025, 7:00:00 PM
            Venue: eventDetails.Venue,
            email: email
        };

        emailjs.send('service_y8pnzgy', 'template_01ikrlq', templateParams, 'GEklFiPMR5garEvZM')
            .then((result) => {
                toast.success('You’ve joined the ride successfully.', {
                    autoClose: 2000,
                    position: "top-right",
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    closeButton: false,
                    draggable: false,
                    theme: 'colored',
                });
            }, (error) => {
                console.error('❌ Email sending error:', error.text);
                toast.error('Failed to send email. Try again later.', {
                    autoClose: 2000,
                    position: "top-right    ",
                    hideProgressBar: true,
                    closeOnClick: false,
                    pauseOnHover: false,
                    closeButton: false,
                    draggable: false,
                    theme: 'colored',
                });
            });
    };

    return (
        <div className="container-fluid" style={{ marginTop: "100px", background: "#E2E2D2", paddingTop: "20px" }}>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <div className='event-card row' key={index}>
                        <div className='col-md-4 image-container'>
                            <img src={`${imageBasePath}${event.Image_Url}`} alt={event.Event_Name} className="event-image" />
                        </div>
                        <div className='col-md-5 event-details'>
                            <h4 className="event-name text-center">{event.Event_Name}</h4>
                            <p className="hosted-by">Hosted By: {event.Hosted_By}</p>
                            <p className="Type">Type: {event.Event_Type}</p>
                            <p className="Date">Date: {new Date(event.Date_Time).toLocaleDateString()}</p>
                            <p className="venue">Venue: {event.Venue}</p>
                        </div>
                        <div className='col-md-3 text-md-end text-center action-container'>
                            <button
                                className="btn btn-warning"
                                onClick={() => sendEmail(event)}
                            >
                                Join the Ride
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center">No upcoming events.</p>
            )}
        </div>
    );
};

export default JoinGnM;
