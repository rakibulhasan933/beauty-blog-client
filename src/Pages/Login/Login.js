import React from 'react';
import './Login.css';
import GoogleButton from 'react-google-button';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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