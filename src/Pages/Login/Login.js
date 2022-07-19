import React from 'react';
import './Login.css';
import GoogleButton from 'react-google-button'


const Login = () => {
    return (
        <div className='login'>
            <span className="loginTitle">Login in Google</span>
            <GoogleButton
                onClick={() => { console.log('Google button clicked') }}
            />
        </div>
    );
};

export default Login;