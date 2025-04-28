import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './GnM_Hero.css';

const GnM_Hero = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            navigate(path);
        } else {
            alert("You need to log in first!");
            navigate('/login'); // Redirect to login page if not logged in
        }
    };

    return (
        <div>
            <div className="hero-section d-flex align-items-center justify-content-center text-center text-white">
                <div className="overlay1"></div>
                <div className="content position-relative">
                    <h1 className="display-4 fw-bold">Greet & Meet</h1>
                    <p className="lead">Join the community. Share your journey. Ride together!</p>
                    <button
                        onClick={() => handleNavigation('/JoinGnM')}
                        className="button-submit btn btn-warning btn-lg fw-bold  mb-2"
                    >
                        Join the Ride
                    </button>
                    <button
                        onClick={() => handleNavigation('/CreateGnM')}
                        className="btn btn-warning btn-lg fw-bold"
                    >
                        Create the Ride
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GnM_Hero;
