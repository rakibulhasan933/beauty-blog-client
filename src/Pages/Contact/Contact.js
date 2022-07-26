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
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="name" placeholder="Your name.." />
                        <label for="lname">Email</label>
                        <input type="text" id="lname" name="email" placeholder="Your email.." />
                        <label for="subject">Feedback</label>
                        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
            <SideBer />
        </div>
    );
};

export default Contact;