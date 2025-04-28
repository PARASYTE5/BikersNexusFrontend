import React, { useState, useEffect } from 'react';
import BackgroundImg from './Videos/Video1.mov';
import './HeroVideoHome.css'

export default function BackgroundHeroWithStats() {
  const [activeMembers, setActiveMembers] = useState(0);
  const [monthlyEvents, setMonthlyEvents] = useState(0);
  const [productsAvailable, setProductsAvailable] = useState(0);
  const [partnerBrands, setPartnerBrands] = useState(0);

  // Counter logic for each value
  const countUp = (target, setState, duration) => {
    let current = 0;
    const stepTime = Math.floor(duration / target); // Time for each step

    const interval = setInterval(() => {
      current++;
      setState(current);
      if (current >= target) {
        clearInterval(interval); // Stop the interval when target is reached
      }
    }, stepTime);
  };

  useEffect(() => {
    // Trigger counters for each number
    countUp(2000, setActiveMembers, 2000); // Count to 2000 in 2 seconds
    countUp(150, setMonthlyEvents, 2000); // Count to 150 in 2 seconds
    countUp(100, setProductsAvailable, 2000); // Count to 100 in 2 seconds
    countUp(50, setPartnerBrands, 2000); // Count to 50 in 2 seconds
  }, []);

  return (
    <div className="parent Container-fluid ">
    <div className=" container-fluid background-hero p-0">
      <video src={BackgroundImg} alt="Background Video" className="vid" autoPlay loop muted />
      </div>
      <div className='overlay w-100'>
        <div className="container-fluid text-center pt-5 pb-4">
          <div className="row" style={{background:"#E2E2D2"}}>
            <div className="col-sm-3" >
              <h1 style={{ color: 'black'}}>{activeMembers}+</h1>
              <p>Active Members</p>
            </div>
            <div className="col-sm-3">
              <h1 style={{ color: 'black' }}>{monthlyEvents}+</h1>
              <p>Monthly Events</p>
            </div>
            <div className="col-sm-3">
              <h1 style={{ color: 'black' }}>{productsAvailable}+</h1>
              <p>Products Available</p>
            </div>
            <div className="col-sm-3">
              <h1 style={{ color: 'black' }}>{partnerBrands}+</h1>
              <p>Partner Brands</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
