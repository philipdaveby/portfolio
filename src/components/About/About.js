import React from "react"
import './about.scss'

import react from '../../images/logo/react.png'
import express from '../../images/logo/express-white.png'
import gatsby from '../../images/logo/gatsbyjs.webp'
import sass from '../../images/logo/sass.png'
import webpack from '../../images/logo/webpack.png'
import docker from '../../images/logo/docker.png'
import heroku from '../../images/logo/heroku.webp'
import graphql from '../../images/logo/graphql.png'
import netlify from '../../images/logo/netlify.webp'
import javascript from '../../images/logo/javascript.webp'
import redux from '../../images/logo/redux.webp'
import rest from '../../images/logo/rest.svg'
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

const About = ({ setClass }) => {
    return (
        <div className={setClass('about')}>
            {/* <h1>Philip Daveby</h1> */}
            <h2>Fullstack Javascript Developer</h2>
            <p className="about__text">Former professional freelance musician in Stockholm. Driven by learning and passionate about frontend, tech & music. I love solving problems, leading teams and seeing the bigger picture.</p>
            <p className="about__text">I discovered coding as a teenager but put it aside for my career as a saxophone player. After 11 years of freelancing I wanted to evolve and learn more. I took a year off studying code by myself before I joined the &lt;/salt&gt; bootcamp.</p>
            <h2 className="about__tech-header">Frontend</h2>
            <ul className="about__tech">
                <li className="about__tech-li"><img className="about__tech-icons" src={javascript} alt="Javascript logo" />
                <p className="about__tech-name">Javascript</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={react} alt="React logo"/>
                <p className="about__tech-name">React</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={html} alt="Html  logo"/>
                <p className="about__tech-name">Html</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={css} alt="Css logo"/>
                <p className="about__tech-name">CSS</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={sass} alt="Sass logo"/>
                <p className="about__tech-name">Sass</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={gatsby} alt="Gatsby logo"/>
                <p className="about__tech-name">Gatsby</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={redux} alt="Redux logo"/>
                <p className="about__tech-name">Redux</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={webpack} alt="Webpack logo"/>
                <p className="about__tech-name">Webpack</p></li>
                {/* <li className="about__tech-li"><img className="about__tech-icons" src={redux} alt=""></img></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={redux} alt=""></img></li> */}
            </ul>
            <h2 className="about__tech-header">Backend</h2>
            <ul className="about__tech">
                <li className="about__tech-li"><img className="about__tech-icons" src={node} alt="Node logo"/>
                <p className="about__tech-name">NodeJS</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={express} alt="Express logo"/>
                <p className="about__tech-name">Express</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={graphql} alt="GraphQL logo"/>
                <p className="about__tech-name">GraphQL</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={mongoDB} alt="MongoDB logo"/>
                <p className="about__tech-name">MongoDB</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={postGres} alt="PostGres logo"/>
                <p className="about__tech-name">PostGreSQL</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={docker} alt="Docker logo"/>
                <p className="about__tech-name">Docker</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={rest} alt="Docker logo"/>
                <p className="about__tech-name">REST</p></li>
            </ul>
            <h2 className="about__tech-header">Tools</h2>
            <ul className="about__tech">
                <li className="about__tech-li"><img className="about__tech-icons" src={git} alt="Git logo"/>
                <p className="about__tech-name">Git</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={tdd} alt="Tdd logo"/>
                <p className="about__tech-name">TDD</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={agile} alt="Agile logo"/>
                <p className="about__tech-name">Agile</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={figma} alt="Figma logo"/>
                <p className="about__tech-name">Figma</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={mocha} alt="Mocha logo"/>
                <p className="about__tech-name">Mocha</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={jest} alt="Jest logo"/>
                <p className="about__tech-name">Jest</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={netlify} alt="Netlify logo"/>
                <p className="about__tech-name">Netlify</p></li>
                <li className="about__tech-li"><img className="about__tech-icons" src={heroku} alt="Heroku logo"/>
                <p className="about__tech-name">Heroku</p></li>
            </ul>
        </div>
    );
}

export default About;
