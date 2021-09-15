import React, { useState } from "react";
import './nav.css';

const Nav = () => {

    const [clickedNav, setClickedNav] = useState(false);

    // const clickNav = bar => {
    //     bar.classList.toggle('change');
    // }
    
    // const toggleClass = () => {

    // }
    return (
        <nav className="nav" >
            <div className={clickedNav ? 'nav__hamburger change' : 'nav__hamburger'} onClick={() => clickedNav ? setClickedNav(false) : setClickedNav(true)}>
                <div className="nav__bar1"></div>
                <div className="nav__bar2"></div>
                <div className="nav__bar3"></div>
            </div>
        </nav>
    )
}

export default Nav;
