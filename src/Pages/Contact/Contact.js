import React from 'react';
import SideBer from '../../components/SideBer/SideBer';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="contactWrapper">
                <h3>Contact Us</h3>
                <div className="container">
                    <form>
                        <label for="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label for="lname">Email</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
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