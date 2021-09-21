import React from 'react'
import './header.scss'
import { useLocation } from 'react-router'
import signature from '../../images/signature-white-3.png'

const Header = () => {

    const { pathname } = useLocation();

    return (
        <div className="header" style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? 'black' : '#FFCE00' }}>
            <img src={signature} alt="Logo" className="header__signature"/>
        </div>
    )
}

export default Header
