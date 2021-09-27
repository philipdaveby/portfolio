import React from "react";
import './nav.scss';
import { useLocation, useHistory } from "react-router";

const Nav = ({setClass, clickedNav, setClickedNav}) => {

    const { pathname } = useLocation();
    const history = useHistory();
    
    const handleClick = path => {
        setClickedNav(false);
        history.push(path)
    }
    

    return (
        <nav className={setClass('nav')} style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? '#D24F80' : '#FC7295'}}>
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
