import React from "react";
import './portfolioItems.scss';

const PortfolioItems = ({ item }) => {
    return (
        <div className="portfolio-items" style={{gridArea: item.gridArea}}>
            <div className="portfolio-items__text">
                <h2>{ item.name }</h2>
                {item.text.map(text => <p>{text}</p>)}
            </div>
            <img src={item.imageLink} alt={item.imageAlt} className="portfolio-photos"/>
            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="portfolio-items__live">LIVE</a>
            <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="portfolio-items__code">CODE</a>
        </div>
    );
}

export default PortfolioItems;
