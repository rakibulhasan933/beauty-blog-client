import React from 'react';
import SideBer from '../../components/SideBer/SideBer';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contactWrapper">
                <div className="container">
                    <h3 className='contact-title label'>Contact Us</h3>
                    <form>
                        <label for="name" className='label'>Name</label>
                        <input type="text" name="name" placeholder="Your name.." />
                        <label for="email" className='label'>Email</label>
                        <input type="email" name="email" placeholder="Your Email.." />
                        <label for="feedback" className='label'>Feedback</label>
                        <textarea id="feedback" name="feedback" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <SideBer />
        </div>
    );
};

export default Contact;