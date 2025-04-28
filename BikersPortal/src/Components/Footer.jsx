import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import Admin from './Images/Admin.svg';
export default function Footer() {
  return (
    <div>
      <div className="container-fluid About">
        <footer className="py-3">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item Nav-Text"><NavLink to="/" className="nav-link px-2 text-dark">Home</NavLink></li>
            <li className="nav-item Nav-Text"><NavLink to="/Equipments" className="nav-link px-2 text-dark " >Equipments</NavLink></li>
            <li className="nav-item Nav-Text"><NavLink to="/GreetandMeet" className="nav-link px-2 text-dark" >Ride and Revel</NavLink></li>
            <li className="nav-item Nav-Text"><NavLink to="/UserPost" className="nav-link px-2 text-dark" >SpotGallery</NavLink></li>
            <li className="nav-item Nav-Text"><NavLink to="/ContactUS" className="nav-link px-2 text-dark" >Contact Us</NavLink></li>
            <li className="nav-item Nav-Text"><NavLink to="/AdminLogin" className="nav-link px-2 text-dark" >
            <img src={Admin} alt="Admin Panel" className='image-Admin' height={"25px"}/>
            </NavLink></li>

          </ul>
          <p className="text-center text-body-secondary">© Bikers Nexus 2025 Company</p>
        </footer>
      </div>
    </div>
  );
}
