import React from 'react';
import eatsy from '../../images/eatsy-without-phone.png';
import './portfolioPhotos.scss';

const PortfolioPhotos = () => {
    return (
        <img src={eatsy} alt="Eatsy project" className="portfolio-photos"/>
    );
}

export default PortfolioPhotos;
