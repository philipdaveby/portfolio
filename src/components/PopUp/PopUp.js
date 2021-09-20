import React from 'react'
import './popUp.scss'

const PopUp = props => {
    return (
        <div className="pop-up" onClick={() => props.setOpenPopUp(false)}>
            {/* <h2 className="pop-up__header">EATSY</h2> */}
            <p className="pop-up__text">Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning! This was the spring 2021 graduation project at &lt;/salt&gt;</p>
            <h3 className="pop-up__tech">Tech stack</h3>
            <ul className="pop-up__list">
                <li className="pop-up__li">React</li>
                <li className="pop-up__li">Gatsby</li>
                <li className="pop-up__li">Apollo</li>
                <li className="pop-up__li">Sass</li>
                <li className="pop-up__li">Node</li>
                <li className="pop-up__li">Express</li>
                <li className="pop-up__li">GraphQL</li>
                <li className="pop-up__li">FaunaDB</li>
                <li className="pop-up__li">Docker</li>
                {/* <li className="pop-up__li">Netlify</li> */}
                <li className="pop-up__li">Heroku</li>    
            </ul>
        </div>
    )
}

export default PopUp
