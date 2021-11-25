import React from 'react'
import './desktopNav.scss'
import { useLocation, useHistory } from 'react-router-dom';

const DesktopNav = ({setClass}) => {
    const { pathname } = useLocation();
    const history = useHistory();

    // style={{ textDecoration: pathname === '/about' ? 'underline' : null}}

    return (
        <nav className={setClass('desktop-nav')} style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? '#D24F80' : '#FC7295'}}>
            <h3 onClick={() => history.push('/')} className={pathname === '/' ? 'underlined' : ''}>HOME</h3>
            <h3 onClick={() => history.push('/about')} className={pathname === '/about' ? 'underlined' : ''} >ABOUT</h3>
            <h3 onClick={() => history.push('/contact')} className={pathname === '/contact' ? 'underlined' : ''}>CONTACT</h3>
        </nav>
    )
}

export default DesktopNav
