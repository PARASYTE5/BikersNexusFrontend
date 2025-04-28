import React from 'react'
import News from './News'
import NewsNavbar from './NewsNavbar'
import NewsIndia from './NewsIndia'

const NewsMain = () => {
  return (
    <div>
        <NewsNavbar/>
        <News/>
        <NewsIndia/>
    </div>
  )
}

export default NewsMain