import React from "react";
import './portfolio.scss';
import PortfolioItems from "../PortfolioItems/PortfolioItems";
import portfolioItems from "../../data/portfolioItems";

const Portfolio = () => {

    return (
        <div className="portfolio">
            {portfolioItems.map(item => {
                return <PortfolioItems item={item} />
            })}
        </div>
    );
}

export default Portfolio;
