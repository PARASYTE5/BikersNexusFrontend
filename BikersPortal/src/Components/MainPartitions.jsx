import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPartition.css';
import helmet from './Images/BikerEquipments.jpg';
import shoes from './Images/ShoesEquipments.png';
import gloves from './Images/GlovesEquipments.jpg';
import gear from './Images/GearEquipments1.jpg';

const UpdatedMainPartitions = ({handleBuyNow}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-section');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="equipment-container pt-3 px-3">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="fade-in-section">
            <img src={helmet} className="responsive-img" alt="Helmet" />
            <button className="custom-btn" onClick={() => handleBuyNow('/Equipments/Helmets')}>Helmet</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="fade-in-section">
            <img src={shoes} className="responsive-img" alt="Shoes" />
            <button className="custom-btn" onClick={() => handleBuyNow('/Equipments/Shoes')}>Shoes</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="fade-in-section">
            <img src={gloves} className="responsive-img" alt="Gloves" />
            <button className="custom-btn" onClick={() => handleBuyNow('/Equipments/Gloves')}>Gloves</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
          <div className="fade-in-section">
            <img src={gear} className="responsive-img" alt="Gear" />
            <button className="custom-btn" onClick={() => handleBuyNow('/Equipments/Jackets')}>Gear</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedMainPartitions;