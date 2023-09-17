import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const MobileMenu = () => {
    return (
        <nav className='menu-overlay'>
            <ul className='mobile-nav-wrapper'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul> 
        </nav>
    )
}

export default MobileMenu;