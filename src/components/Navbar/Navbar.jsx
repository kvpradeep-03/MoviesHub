import React from 'react'
import './Navbar.css'
import fire from '../../assets/fire.png'
import star from '../../assets/glowing-star.png'
import party from '../../assets/partying-face.png'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>MoviesHub</h1>
            <div className='nav-links'>
                <a href="">Popular <img src={fire} alt="fire emoji" className='nav-emoji' /></a>
                <a href="">Top Rated <img src={star} alt="star emoji" className='nav-emoji' /></a>
                <a href="">Upcoming <img src={party} alt="party emoji" className='nav-emoji' /></a>
            </div>
        </nav>
    )
}

export default Navbar