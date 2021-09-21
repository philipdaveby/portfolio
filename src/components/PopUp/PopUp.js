import React from 'react'
import './popUp.scss'
import react from '../../images/logo/react.png'
import express from '../../images/logo/express.png'
import node from '../../images/logo/node.png'
import gatsby from '../../images/logo/gatsby.png'
import sass from '../../images/logo/sass.png'
import docker from '../../images/logo/docker.png'
import heroku from '../../images/logo/heroku.png'
import graphql from '../../images/logo/graphql.png'
import apollo from '../../images/logo/apollo.png'

const PopUp = props => {
    return (
        <div className="pop-up" onClick={() => props.setOpenPopUp(false)}>
            {/* <h2 className="pop-up__header">EATSY</h2> */}
            <p className="pop-up__text">Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning! This was the graduation project at &lt;/salt&gt;</p>
            {/* <h3 className="pop-up__tech">Tech stack</h3> */}
            <ul className="pop-up__list">
                <li className="pop-up__li"><img src={react} alt="react logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={gatsby} alt="gatsby logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={sass} alt="sass logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={apollo} alt="apollo logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={graphql} alt="graphql logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={node} alt="node logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={express} alt="express logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={docker} alt="docker logo" className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={heroku} alt="heroku" className="pop-up__img"></img></li>
                {/* <li className="pop-up__li"><img src={} className="pop-up__img"></img></li>
                <li className="pop-up__li"><img src={} className="pop-up__img"></img></li> */}
                {/* <li className="pop-up__li">React</li>
                <li className="pop-up__li">Gatsby</li>
                <li className="pop-up__li">Apollo</li>
                <li className="pop-up__li">Sass</li>
                <li className="pop-up__li">Node</li>
                <li className="pop-up__li">Express</li>
                <li className="pop-up__li">GraphQL</li>
                <li className="pop-up__li">FaunaDB</li>
                <li className="pop-up__li">Docker</li> */}
                {/* <li className="pop-up__li">Netlify</li> */}
                {/* <li className="pop-up__li">Heroku</li>     */}
            </ul>
        </div>
    )
}

export default PopUp
