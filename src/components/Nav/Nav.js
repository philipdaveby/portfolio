import React, { useState } from "react";
import './nav.scss';
import { useLocation } from "react-router";

const Nav = () => {

    const [clickedNav, setClickedNav] = useState(false);
    const { pathname } = useLocation();

    return (
        <nav className="nav" style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <div className="nav__hamburger">
                {clickedNav ? <div className="links" id="slide">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/contact">CONTACT</a>
                </div> : ''}
                
                <div className={clickedNav ? 'nav__animation change' : 'nav__animation'} onClick={() => clickedNav ? setClickedNav(false) : setClickedNav(true)} >
                    <div className="nav__bar1"></div>
                    <div className="nav__bar2"></div>
                    <div className="nav__bar3"></div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
