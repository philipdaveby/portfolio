import React from 'react'
import './popUp.scss'


const PopUp = props => {
    return (
        <div className="pop-up" onClick={() => props.setOpenPopUp(false)}>
            <p className="pop-up__text">{props.project.info}</p>
            <ul className="pop-up__list">
                {props.project.techStack.map(logo => {
                    return <li key={props.project.id} className="pop-up__li"><img src={logo} alt="logo" className="pop-up__img"></img></li>
                })}
            </ul>
        </div>
    )
}

export default PopUp
