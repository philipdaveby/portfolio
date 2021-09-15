import React from "react";
import './portfolio.scss';
import PortfolioItems from "../PortfolioItems/PortfolioItems";
import PortfolioPhotos from "../PortfolioPhotos.js/PortfolioPhotos";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <PortfolioItems />
            {/* <PortfolioPhotos /> */}
        </div>
    );
}

export default Portfolio;
