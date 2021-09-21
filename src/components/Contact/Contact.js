import React from 'react'
import './contact.scss'
import linkedIn from '../../images/logo/linkedin.png'
import github from '../../images/logo/github-large.png'

const Contact = () => {
    return (
        <div className="contact">
            <p className="contact__text">Don't be shy!</p>
            {/*
            <a href="mailto:philip.daveby@gmail.com">Send an email</a>
            <p>+46 702 17 28 26</p> */}

            <form className="contact__form">
                <input
                type="text"
                // onChange={e => filterExercises(e.target.value)}
                placeholder="Title"
                className="contact__title"
                />
                <input
                type="text"
                // onChange={e => filterExercises(e.target.value)}
                placeholder="E-mail"
                className="contact__email"
                />
                <textarea
                // onChange={e => filterExercises(e.target.value)}
                placeholder="Message"
                className="contact__message"
                />
                <button type="submit" className="contact__submit">Send</button>
            </form>
            <div className="contact__links">
                <a href="https://github.com/philipdaveby"><img src={github} alt="Github logo" className="contact__github" /></a>
                <a href="https://www.linkedin.com/in/philipdaveby/"><img src={linkedIn} alt="LinkedIn logo" className="contact__linkedin" /></a>
            </div>
        </div>
    )
}

export default Contact
