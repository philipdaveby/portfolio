import React from "react"
import './about.scss'
import AboutItem from "../AboutItem/AboutItem"
import { frontendItems, backendItems, tools } from "../../data/techStackItems"

const About = ({ setClass }) => {
    return (
        <div className={setClass('about')}>
            <h2>Fullstack Javascript Developer</h2>
            <p className="about__text">Former professional freelance musician in Stockholm. Driven by learning and passionate about frontend, tech & music. I love solving problems, leading teams and seeing the bigger picture.</p>
            <p className="about__text">I discovered coding as a teenager but put it aside for my career as a saxophone player. After 11 years of freelancing I wanted to evolve and learn more. I took a year off studying code by myself before I joined the &lt;/salt&gt; bootcamp.</p>
            <h2 className="about__tech-header">Frontend</h2>
            <ul className="about__tech">
                {frontendItems.map(techItem => {
                    return <AboutItem imgSrc={techItem.imageSrc} imgAlt={`${techItem.name} logo`} name={techItem.name} />
                })}
            </ul>

            <h2 className="about__tech-header">Backend</h2>
            <ul className="about__tech">
            {backendItems.map(techItem => {
                    return <AboutItem imgSrc={techItem.imageSrc} imgAlt={`${techItem.name} logo`} name={techItem.name} />
                })}
            </ul>
            <h2 className="about__tech-header">Tools</h2>
            <ul className="about__tech">
            {tools.map(techItem => {
                    return <AboutItem imgSrc={techItem.imageSrc} imgAlt={`${techItem.name} logo`} name={techItem.name} />
                })}
            </ul>
        </div>
    );
}

export default About;
