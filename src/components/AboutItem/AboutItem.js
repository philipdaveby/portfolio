import React from 'react'
import './aboutItem.scss'

const AboutItem = ({ imgSrc, imgAlt, name }) => {
    return (
            <li className="about__tech-li">
                <img className="about__tech-icons" src={imgSrc} alt={imgAlt} />
                <p className="about__tech-name">{name}</p>
            </li>
    )
}

export default AboutItem
