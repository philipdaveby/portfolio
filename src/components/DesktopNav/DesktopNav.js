import React from 'react'
import './desktopNav.scss'
import { useLocation, useHistory } from 'react-router-dom';

const DesktopNav = ({setClass}) => {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <nav className={setClass('desktop-nav')} style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? '#D24F80' : '#FC7295'}}>
            <div onClick={() => history.push('/')} style={{ textDecoration: pathname === '/' ? 'underline' : null}}>HOME</div>
            <div onClick={() => history.push('/about')} style={{ textDecoration: pathname === '/about' ? 'underline' : null}}>ABOUT</div>
            <div onClick={() => history.push('/contact')} style={{ textDecoration: pathname === '/contact' ? 'underline' : null}}>CONTACT</div>
        </nav>
    )
}

export default DesktopNav
