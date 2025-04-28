import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChallengeInforamtion.css";
import Banner from "./Images/BannerChallenge.jpg";

const ChallengeInformation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status
    if (!isLoggedIn) {
      navigate("/login"); // Redirect if not logged in
    }
  }, []);

  
  
  return (
    <>
    <div>
      <div className="Label container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Challenge Information</h1>
          </div>
          <div className="Written col-md-6 text-center mt-5">
            <h3>Biker's Challenge are the unique challenges for Bikers Members</h3>
            <h4>There are 4 Types of Challenges</h4>
            <h5>Agnipath Challenges - 6 Levels</h5>
            <h5>Bullet Ran - 1 Level</h5>
            <h5>Rudra Yatra - 1 Level</h5>
            <h5>Safar-E-Shourya - 1 Level</h5>
          </div>
          <div className="col-md-6">
            <img className="img " src={Banner} alt="" style={{height:"500px", boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.3)"}}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChallengeInformation;
