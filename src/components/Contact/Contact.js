import React from 'react'
import './contact.scss'
import ContactForm from '../ContactForm/ContactForm'

const Contact = props => {
    return (
        <div className={props.setClass('contact')}>
            <h3 className="contact__text">Say hi! 👋</h3>
            <ContactForm />
        </div>
    )
}

export default Contact
