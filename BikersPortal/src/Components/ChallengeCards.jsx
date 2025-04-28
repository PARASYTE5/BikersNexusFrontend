import React from 'react';
import Banner1 from './Images/Agnipath1.webp';
import Banner2 from './Images/Agnipath2.webp';
import Banner3 from './Images/Agnipath3.webp';
import Banner4 from './Images/Agnipath4.webp';
import Banner5 from './Images/Agnipath5.webp';
import Banner6 from './Images/Safar-e-Shourya.webp';
import Banner7 from './Images/BulletRan.webp';
import Banner8 from './Images/RudraYatra.webp';

import { NavLink } from 'react-router-dom';
import './ChallengeCards.css'; // Import the CSS file

const ChallengeCards = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row challenge-container">
                    <h2 className="text-center my-3">Agnipath Challenges - 6 Levels</h2>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body ">
                                <img src={Banner1} alt="Agnipath Challenge" className="w-100" height="320px" />
                                <h5 className="Title card-title">Level 1 - 1200km</h5>
                                <p className="Challenge-Info focard-text">Level 1 of the Agnipath Challenge – your first stride toward a thrilling journey of opportunities!</p>
                                <a className="btn btn-warning" href="https://discord.gg/erwwu4UVyK">Enroll Now</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner2} alt="" className="w-100" height="320px" />
                                <h5 className="Title card-title">Level 2 - 1800km</h5>
                                <p className="Challenge-Info card-text">Level 2 of the Agnipath Challenge – pushing boundaries, unlocking greater opportunities!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/kNNQjW7NCu">Enroll Now</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner3} alt="" className="w-100" height="320px" />
                                <h5 className=" Title card-title">Level 3 - 2400km</h5>
                                <p className="Challenge-Info card-text">Level 3 of the Agnipath Challenge – the test of resilience, one step closer to greatness!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/9gNfwDUKMW">Enroll Now</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner4} alt="" className="w-100" height="320px" />
                                <h5 className="Title card-title">Level 4 - 3000km</h5>
                                <p className="Challenge-Info card-text">Level 4 of the Agnipath Challenge – where determination meets the road to triumph!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/xn5DnMZWBf">Enroll Now</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner5} alt="" className="w-100" height="320px" />
                                <h5 className="Title card-title">Level 5 - 3400km</h5>
                                <p className="Challenge-Info card-text">Level 5 of the Agnipath Challenge – the ultimate grind before the final glory!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/f4rX8yvsUp">Enroll Now</NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner6} alt="" className="w-100" height="320px" />
                                <h5 className="Title card-title">Level 6 - Custom Level</h5>
                                <p className="Challenge-Info card-text">Level 6 of the Agnipath Challenge – the grand finale, where legends are made!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/4Vjm2YYbzf">Enroll Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        {/* First Card */}
                        <div className="col-md-6 d-flex flex-column align-items-center">
                            <h2 className="text-center my-3">Bullet Ran Challenge</h2>
                            <div className="card challenge-card w-75">
                                <div className="card-body text-center">
                                    <img src={Banner7} alt="Bullet Ran Challenge" className="w-100" height="320px" />
                                    <h5 className="Title card-title">Short Challenge of 300 km</h5>
                                    <p className="Challenge-Info focard-text">A journey of power and endurance only for the boldest riders!</p>
                                    <NavLink className="btn btn-warning" to="https://discord.gg/wWpEHBJ5Fy">Enroll Now</NavLink>
                                </div>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="col-md-6 d-flex flex-column align-items-center">
                            <h2 className="text-center my-3">Rudra Yatra Challenge</h2>
                            <div className="card challenge-card w-75">
                                <div className="card-body text-center">
                                    <img src={Banner8} alt="Bullet Ran Challenge" className="w-100" height="320px" />
                                    <h5 className="Title card-title">Moderate Challenge of 600 km</h5>
                                    <p className="Challenge-Info focard-text">Speed, precision, and the spirit of a warrior on the open road!</p>
                                    <NavLink className="btn btn-warning" to="https://discord.gg/Jsvkw8gjSM">Enroll Now</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                    <h2 className="text-center my-3">Safar-E-Shourya Challenge</h2>
                        <div className="col-md-4 ">
                        <div className="card challenge-card">
                            <div className="card-body">
                                <img src={Banner6} alt="" className="w-100" height="320px" />
                                <h5 className="Title card-title">Epic Challenge of 900 km</h5>
                                <p className="Challenge-Info card-text">An expedition of honor, courage, and unshakable determination!</p>
                                <NavLink className="btn btn-warning" to="https://discord.gg/XhjprszWb4">Enroll Now</NavLink>
                            </div>
                        </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChallengeCards;
