import React from 'react'
import './newDesign.scss'
import eatsy from '../../images/eatsy-plan.png';

const NewDesign = () => {
    return (
        <div className="new-design">
            <img src={eatsy} alt="Screenshot of Eatsy app" className="eatsy__screenshot"/>
        </div>
    )
}

export default NewDesign
