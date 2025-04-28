import React from 'react'
import'./NewsNavbar.css'
import { NavLink } from 'react-router-dom'
const NewsNavbar = () => {
    return (
        <div>
            <div class=" category-menu1">
                <NavLink to="/All">All</NavLink>
                <NavLink to="/india">India</NavLink>
                <NavLink to="/USA">USA</NavLink>
                <NavLink to="/UK">United Kingdom</NavLink>
                <NavLink to="/Australia">Australia</NavLink>
                <NavLink to="/Russia">Russia</NavLink>
                <NavLink to="/China">Japan</NavLink>
            </div>
        </div>
    )
}

export default NewsNavbar