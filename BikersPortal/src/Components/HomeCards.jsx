import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeCards.css';
import Gloves from './Images/Gloves.webp';
import Shoes from './Images/Shoes.webp';
import Helmet from './Images/Helmet.webp';
import Jacket from './Images/Jacket.webp';

export default function HomeCards({ handleBuyNow }) {
    return (
        <div>
            <div className="container-fluid px-4 pb-3" style={{ backgroundColor: "#E2E2D2" }}>
                <h1 className="text-center" style={{ paddingTop: "10px", paddingBottom: "40px", font:'Poppins'}}>FEATURED GEAR!</h1>
                <div className="row">
                    {/* Jacket Card */}
                    <div className="col-sm-3">
                        <div className="bikersnx-card-wrapper">
                            <div className="bikersnx-gear-card">
                                <img src={Jacket} className="bikersnx-gear-image" alt="Riding Jacket" />
                                <div className="bikersnx-gear-card-info">
                                    <h5 className="bikersnx-card-title">Riding Jacket</h5>
                                    <p className="bikersnx-card-text">
                                        Durable and stylish! Made for long rides, offering maximum protection and comfort.
                                    </p>
                                    <button className="bikersnx-btn" onClick={() => handleBuyNow("/buy/jacket")}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Helmet Card */}
                    <div className="col-sm-3">
                        <div className="bikersnx-card-wrapper">
                            <div className="bikersnx-gear-card">
                                <img src={Helmet} className="bikersnx-gear-image" alt="Racing Helmet" />
                                <div className="bikersnx-gear-card-info">
                                    <h5 className="bikersnx-card-title">Riding Helmet</h5>
                                    <p className="bikersnx-card-text">
                                        Sleek design and advanced safety features. Stay safe and ride with confidence.
                                    </p>
                                    <button className="bikersnx-btn" onClick={() => handleBuyNow("/Equipments/Helmets")}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gloves Card */}
                    <div className="col-sm-3">
                        <div className="bikersnx-card-wrapper">
                            <div className="bikersnx-gear-card">
                                <img src={Gloves} className="bikersnx-gear-image" alt="Riding Gloves" />
                                <div className="bikersnx-gear-card-info">
                                    <h5 className="bikersnx-card-title">Riding Gloves</h5>
                                    <p className="bikersnx-card-text">
                                        Ensure a firm grip and protect your hands with our premium gloves.
                                    </p>
                                    <button className="bikersnx-btn" onClick={() => handleBuyNow("/buy/gloves")}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Boots Card */}
                    <div className="col-sm-3">
                        <div className="bikersnx-card-wrapper">
                            <div className="bikersnx-gear-card">
                                <img src={Shoes} className="bikersnx-gear-image" alt="Protective Boots" />
                                <div className="bikersnx-gear-card-info">
                                    <h5 className="bikersnx-card-title">Protective Boots</h5>
                                    <p className="bikersnx-card-text">
                                        Designed for bikers. Combines style, durability, and protection for long rides.
                                    </p>
                                    <button className="bikersnx-btn" onClick={() => handleBuyNow("/buy/boots")}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
