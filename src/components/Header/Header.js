import React from 'react'
import './header.scss'
import { useLocation, useHistory } from 'react-router-dom'

const Header = props => {

    const { pathname } = useLocation();
    let history = useHistory();

    return (
        <div className={props.setClass('header')} onClick={() => history.push('/')} style={{ backgroundColor: pathname === '/about' ? 'black' : 'pink'}}>
            <h1>Philip Daveby</h1>
        </div>
    )
}

export default Header
