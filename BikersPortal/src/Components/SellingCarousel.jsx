import React from 'react';
import './SellingCarousel.css';
import Banner1 from './Images/SellingBanner1.png';
import Banner2 from './Images/SellingBanner2.png';
import Banner3 from './Images/SellingBanner3.png';
import Banner4 from './Images/SellingBanner4.png';

const SellingCarousel = () => {
  return (
    <div id="sellingCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Banner4} className="d-block w-100" alt="..." />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="carousel-control-prev" type="button" data-bs-target="#sellingCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#sellingCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SellingCarousel;