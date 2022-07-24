import React from 'react';
import './Login.css';
import GoogleButton from 'react-google-button';



const Login = () => {

    return (
        <div className='login'>
            <span className="loginTitle">Login in <span className='google'>Google</span></span>
            <GoogleButton
                onClick={() => signInWithGoogle()}
            />
        </div>
    );
};

export default Login;