import React, { useState } from 'react';
import SideBer from '../../components/SideBer/SideBer';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, formState: { errors } } = useForm();
    const [emailValidation, setEmailValidation] = useState(true);
    const [msgValidation, setmsgValidation] = useState(true);

    return (
        <div className='contact'>
            <div className="contactWrapper">
                <div className="container">
                    <h3 className='contact-title label'>Contact Us</h3>
                    <form onSubmit={sendEmail}>
                        <label for="name" className='label'>Name</label>
                        <input className='form-control' {...register("name", { required: true })} />
                        {errors.name && <span>Name is required</span>}<br />
                        <label for="email" className='label'>Email</label>
                        <input className='form-control' {...register("email", { required: true })} />
                        {emailValidation ? '' : <span style={{ color: 'red' }}>Email is required</span>}<br />
                        <label for="feedback" className='label'>Feedback</label>
                        <textarea className='form-control' {...register("message", { required: true })} />
                        {msgValidation ? '' : <span style={{ color: 'red' }}>This fiels is required</span>}<br />
                        <input type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
            <SideBer />
        </div>
    );
};

export default Contact;