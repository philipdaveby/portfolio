import React, { useState } from "react";
import './nav.scss';
import { useLocation, useHistory } from "react-router";

const Nav = props => {

    const [clickedNav, setClickedNav] = useState(false);
    const { pathname } = useLocation();
    const history = useHistory();

    const handleClick = path => {
        setClickedNav(false);
        history.push(path)
    }

    return (
        <nav className={props.setClass('nav')} style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <div className="nav__hamburger">
                {clickedNav ? <div className="links" id="slide">
                    <div onClick={() => handleClick('/')} >HOME</div>
                    <div onClick={() => handleClick('/about')} >ABOUT</div>
                    <div onClick={() => handleClick('/contact')} >CONTACT</div>
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
