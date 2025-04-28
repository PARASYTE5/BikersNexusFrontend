import React from 'react'
import SellingPortal from './SellingPortal'
import SellingCarousel from './SellingCarousel'
import EquipmentsProduct from './EquipmentsProduct'
import MainPartitions from './MainPartitions'

const Accessories = ({handleBuyNow}) => {
  return (
    <div>
        <SellingPortal handleBuyNow={handleBuyNow}/>
        <SellingCarousel/>
        <MainPartitions handleBuyNow={handleBuyNow}/>        
    </div>
  )
}

export default Accessories