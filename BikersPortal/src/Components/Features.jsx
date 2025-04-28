import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div>
      <div className="container-fluid features-section text-center" style={{background:"#E2E2D2"}}>
        <h1 className="pb-4 mb-2 About">WHAT WE PROVIDE</h1>
        <div className="feature-container">
          <div className="feature-box">
            <i className="fas fa-users fa-3x mb-3"></i>
            <h3>GREET AND MEET</h3>
            <h6>Join our greet and meet events to become part of an exclusive biking community. Connect with fellow enthusiasts, share experiences, and build lasting friendships in a welcoming environment.</h6>
          </div>
          <div className="feature-box">
            <i className="fas fa-newspaper fa-3x mb-3"></i>
            <h3>NEWS</h3>
            <h6>Stay updated with the latest biking news, trends, and community highlights. Get personalized articles and updates tailored to your interests, keeping you informed and engaged.</h6>
          </div>
          <div className="feature-box">
            <i className="fas fa-share-square fa-3x mb-3"></i>
            <h3>POSTING</h3>
            <h6>Share your favorite moments and locations by posting photos that tell your unique story. Capture and showcase the places that inspire you and your biking adventures!</h6>
          </div>
          <div className="feature-box">
            <i className="fas fa-headset fa-3x mb-3"></i>
            <h3>24/7 SERVICE</h3>
            <h6>Access round-the-clock assistance, ensuring that support is always available whenever you need it. Experience convenience and reliability at any time, day or night!</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
