import React from 'react'
import './header.scss'
import { useLocation, useHistory } from 'react-router-dom'

const Header = ({setClass, setClickedNav}) => {

    const { pathname } = useLocation();
    let history = useHistory();

    const handleClick = () => {
        setClickedNav(false);
        history.push('/');
    }

    return (
        <div className={setClass('header')} onClick={handleClick} style={{ backgroundColor: pathname === '/' ? 'pink' : pathname === '/about' ? '#D24F80' : '#FC7295'}}>
            <h1>Philip Daveby</h1>
        </div>
    )
}

export default Header
