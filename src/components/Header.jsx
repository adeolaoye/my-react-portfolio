import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger';
import Navigation from './Navigation';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='header-wrapper'>
            <h1 className='logo'>
            <Link to='/' className='logo-link'>
          olaDEV
        </Link></h1>
            <div><Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setModalOpen={setIsMenuOpen} />
        </div>
        </div>
    )
}

export default Header;