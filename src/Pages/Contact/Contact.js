import React, { useRef } from 'react';
import SideBer from '../../components/SideBer/SideBer';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v1wubeb', 'template_z1oksff', form.current, 'nwObZR03jMMFUK0AS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='contact'>
            <div className="contactWrapper">
                <div className="container">
                    <h3 className='contact-title label'>Contact Us</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <label for="name" className='label'>Name</label>
                        <input type="text" name="name" placeholder="Your name.." />
                        <label for="email" className='label'>Email</label>
                        <input type="email" name="email" placeholder="Your Email.." />
                        <label for="feedback" className='label'>Feedback</label>
                        <textarea id="feedback" name="feedback" placeholder="Write something.."></textarea>

                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
            <SideBer />
        </div>
    );
};

export default Contact;