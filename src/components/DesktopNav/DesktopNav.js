import React from 'react'
import './desktopNav.scss'
import { useLocation } from 'react-router-dom';

const DesktopNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className="desktop-nav" style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <a href="/" style={{ textDecoration: pathname === '/' ? 'underline' : null}}>HOME</a>
            <a href="/about" style={{ textDecoration: pathname === '/about' ? 'underline' : null}}>ABOUT</a>
            <a href="/contact" style={{ textDecoration: pathname === '/contact' ? 'underline' : null}}>CONTACT</a>
        </nav>
    )
}

export default DesktopNav
