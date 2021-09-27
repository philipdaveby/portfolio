import React from 'react'
import './popUp.scss'


const PopUp = ({setOpenPopUp, project}) => {
    return (
        <div className="pop-up" onClick={() => setOpenPopUp(false)}>
            <p className="pop-up__text">{project.info}</p>
            <ul className="pop-up__list">
                {project.techStack.map((logo, index) => {
                    return <li key={index} className="pop-up__li"><img src={logo} alt="logo" className="pop-up__img"></img></li>
                })}
            </ul>
            {/* <button className="pop-up__close" onClick={() => props.setOpenPopUp(false)}>Close</button> */}
        </div>
    )
}

export default PopUp
