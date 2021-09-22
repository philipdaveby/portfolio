import React from 'react'
import './contact.scss'
import ContactForm from '../ContactForm/ContactForm'

const Contact = () => {
    return (
        <div className="contact">
            <h3 className="contact__text">Say hi! 👋</h3>
            <ContactForm />
            {/*
            <a href="mailto:philip.daveby@gmail.com">Send an email</a>
            <p>+46 702 17 28 26</p> */}
            {/* <form className="contact__form">
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
            </form> */}
        </div>
    )
}

export default Contact
