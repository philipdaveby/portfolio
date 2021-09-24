import React from 'react'
import './header.scss'
import { useLocation, useHistory } from 'react-router-dom'
// import signature from '../../images/signature-white-3.png'

const Header = () => {

    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <div className="header" onClick={() => history.push('/')} style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <h1>Philip Daveby</h1>
            {/* <h3>Fullstack Javascript Developer</h3> */}
            {/* <img src={signature} alt="Logo" className="header__signature"/> */}
        </div>
    )
}

export default Header
