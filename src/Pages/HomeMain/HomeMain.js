import React from 'react';
import Header from '../../components/Header/Header';
import SideBer from '../../components/SideBer/SideBer';
import Home from '../Home/Home';
import './HomeMain.css';

const HomeMain = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <Home />
                <SideBer />
            </div>
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
    );
};

export default HomeMain;