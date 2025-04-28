import React from 'react'
import HeroVideoHome from './HeroVideoHome'
import Features from './Features'
import HomeCards from './HomeCards'
import Testimonials from './Testomonials'
import NewsLetter from './NewsLetter'


export const Home = ({handleBuyNow}) => {
  return (
    <div>
        <HeroVideoHome/>
        <Features/>
        <HomeCards handleBuyNow={handleBuyNow}/>
        <Testimonials/>
        <NewsLetter/>
    </div>
  )
}
