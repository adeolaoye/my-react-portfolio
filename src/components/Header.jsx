import React, {useState} from 'react'
import {RiMenu2Fill} from 'react-icons/ri'
import MobileMenu from './MobileMenu'


const Header = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(true)

    const handleClick = () => {
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className='header-wrapper'>
            <div></div>
            <h1 className='logo'>olaDEV</h1>
            <div className='icon-menu-wrapper'>{isMenuClicked ? <MobileMenu /> : <span  className='menu-icon' onClick={handleClick}><RiMenu2Fill /></span>}</div>
        </div>
    )
}

export default Header;