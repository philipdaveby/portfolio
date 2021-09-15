import React from "react";
import './portfolioItems.scss';
import eatsy from '../../images/eatsy-without-phone.png';

const PortfolioItems = () => {
    return (
        <div className="portfolio-items">
            <div className="portfolio-items__text">
                <h2>Eatsy</h2>
                <p>Eatsy will schedule a meal plan for you, so you know exactly what to cook every meal, day and week. No more planning!</p>
                <p>This was the final project of the &lt;/salt&gt; bootcamp</p>
            </div>
            <img src={eatsy} alt="Eatsy project" className="portfolio-photos"/>
            <a href="" className="portfolio-items__live">LIVE</a>
            <a href="" className="portfolio-items__code">CODE</a>
        </div>
    );
}

export default PortfolioItems;
