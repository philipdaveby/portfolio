import React from "react"
import './about.scss'

import react from '../../images/logo/react.png'
import express from '../../images/logo/express.png'
import gatsby from '../../images/logo/gatsbyjs.webp'
import sass from '../../images/logo/sass.png'
import docker from '../../images/logo/docker.png'
import heroku from '../../images/logo/heroku.webp'
import graphql from '../../images/logo/graphql.png'
// import apollo from '../../images/logo/apollo.png'
import netlify from '../../images/logo/netlify.webp'
import javascript from '../../images/logo/javascript.webp'
import redux from '../../images/logo/redux.webp'
import html from '../../images/logo/html5.webp'
import css from '../../images/logo/css3.webp'
import node from '../../images/logo/nodejs.webp'
import mongoDB from '../../images/logo/mongodb.webp'
import postGres from '../../images/logo/postgresql.webp'
import agile from '../../images/logo/agile.webp'
import tdd from '../../images/logo/tdd.webp'
import mocha from '../../images/logo/mocha.webp'
import jest from '../../images/logo/jest.webp'
import git from '../../images/logo/git.png'
import figma from '../../images/logo/figma.png'

const About = () => {
    return (
        <div className="about">
            <h1>Philip Daveby</h1>
            <h2>Fullstack Javascript Developer</h2>
            <p>I'm a former professional freelance musician in Stockholm. Driven by learning and passionate about frontend, tech & music. I love solving problems, leading teams and seeing the bigger picture.</p>
            <h2 className="about__tech-header">Frontend</h2>
            <ul className="about__tech">
                <li><img className="about__tech-icons" src={javascript} alt=""></img></li>
                <li><img className="about__tech-icons" src={react} alt=""></img></li>
                <li><img className="about__tech-icons" src={html} alt=""></img></li>
                <li><img className="about__tech-icons" src={css} alt=""></img></li>
                <li><img className="about__tech-icons" src={sass} alt=""></img></li>
                <li><img className="about__tech-icons" src={gatsby} alt=""></img></li>
                <li><img className="about__tech-icons" src={redux} alt=""></img></li>
                {/* <li><img className="about__tech-icons" src={redux} alt=""></img></li>
                <li><img className="about__tech-icons" src={redux} alt=""></img></li> */}
            </ul>
            <h2 className="about__tech-header">Backend</h2>
            <ul className="about__tech">
                <li><img className="about__tech-icons" src={node} alt=""></img></li>
                <li><img className="about__tech-icons" src={express} alt=""></img></li>
                <li><img className="about__tech-icons" src={graphql} alt=""></img></li>
                <li><img className="about__tech-icons" src={mongoDB} alt=""></img></li>
                <li><img className="about__tech-icons" src={postGres} alt=""></img></li>
                <li><img className="about__tech-icons" src={docker} alt=""></img></li>
            </ul>
            <h2 className="about__tech-header">Tools</h2>
            <ul className="about__tech">
                <li><img className="about__tech-icons" src={git} alt=""></img></li>
                <li><img className="about__tech-icons" src={tdd} alt=""></img></li>
                <li><img className="about__tech-icons" src={agile} alt=""></img></li>
                <li><img className="about__tech-icons" src={figma} alt=""></img></li>
                <li><img className="about__tech-icons" src={mocha} alt=""></img></li>
                <li><img className="about__tech-icons" src={jest} alt=""></img></li>
                <li><img className="about__tech-icons" src={netlify} alt=""></img></li>
                <li><img className="about__tech-icons" src={heroku} alt=""></img></li>
            </ul>
        </div>
    );
}

export default About;
