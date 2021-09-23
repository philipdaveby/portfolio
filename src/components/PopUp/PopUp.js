import React from 'react'
import './popUp.scss'


const PopUp = props => {
    return (
        <div className="pop-up" onClick={() => props.setOpenPopUp(false)}>
            <p className="pop-up__text">{props.project.info}</p>
            <ul className="pop-up__list">
                {props.project.techStack.map((logo, index) => {
                    return <li key={index} className="pop-up__li"><img src={logo} alt="logo" className="pop-up__img"></img></li>
                })}
            </ul>
            <button className="pop-up__close" onClick={() => props.setOpenPopUp(false)}>Close</button>
        </div>
    )
}

export default PopUp
