import React from 'react'
import './SellingPortal.css'
import { NavLink } from 'react-router-dom'

const SellingPortal = ({ handleBuyNow }) => {  
    return (
        <>
            <div>
                <div className="category-menu">
                    <NavLink to="/Equipments/Helmets" onClick={() => handleBuyNow('/Equipments/Helmets')}>Helmets</NavLink>
                    <NavLink to="/Equipments/Jackets" onClick={() => handleBuyNow('/Equipments/Jackets')}>Gear</NavLink>
                    <NavLink to="/Equipments/Shoes" onClick={() => handleBuyNow('/Equipments/Shoes')}>Shoes</NavLink>
                    <NavLink to="/Equipments/Gloves" onClick={() => handleBuyNow('/Equipments/Gloves')}>Gloves</NavLink>
                    <NavLink to="/Equipments/Accessories" onClick={() => handleBuyNow('/Equipments/Accessories')}>Accessories</NavLink>
                </div>
            </div>
        </>
    )
}

export default SellingPortal;
