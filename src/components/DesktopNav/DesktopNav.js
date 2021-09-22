import React from 'react'
import './desktopNav.scss'
import { useLocation } from 'react-router-dom';

const DesktopNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className="desktop-nav" style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <a href="/">HOME</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
        </nav>
    )
}

export default DesktopNav
