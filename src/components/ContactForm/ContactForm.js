import React, { useState } from 'react'
import './contactForm.scss'
import emailjs from 'emailjs-com';
import linkedIn from '../../images/logo/linkedin.png'
import github from '../../images/logo/github-large.png'

// init('user_zVG8iUObb40WPNXn94FkR');

const ContactForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const isValidEmail = email => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    const submit = () => {
        if (name && email && message && isValidEmail) {

            const serviceId = process.env.REACT_APP_SERVICE_ID;
            const templateId = process.env.REACT_APP_TEMPLATE_ID;
            const userId = process.env.REACT_APP_USER_ID;
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div className="contact__form">
            <input className="contact__name" type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
            <input className="contact__email" type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
            <textarea className="contact__message" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button className="contact__submit" onClick={submit}>Send Message</button>
            <div className="contact__links">
                <a href="https://github.com/philipdaveby"><img src={github} alt="Github logo" className="contact__github" /></a>
                <a href="https://www.linkedin.com/in/philipdaveby/"><img src={linkedIn} alt="LinkedIn logo" className="contact__linkedin" /></a>
            </div>
            {emailSent ? <div className="contact__confirmation">I'm glad you reached out, I'll get back to you as quick as possible!</div> : ''}
        </div>
    );
};

export default ContactForm;