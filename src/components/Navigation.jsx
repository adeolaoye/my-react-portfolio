import React from 'react'
import {RiMenu2Fill} from 'react-icons/ri'


const Navigation = () => {
    return (
        <div className='header-wrapper'>
            <div></div>
            <h1 className='logo'>olaDEV</h1>
            <span  className='menu-icon'><RiMenu2Fill /></span>
        </div>
    )
}

export default Navigation;