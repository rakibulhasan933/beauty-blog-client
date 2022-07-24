import React from 'react';
import './Login.css';
import GoogleButton from 'react-google-button';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const { singInUsingInGoogle, setUser } = useAuth() || {};
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        singInUsingInGoogle()
            .then((result) => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
    };
    return (
        <div className='login'>
            <span className="loginTitle">Login in <span className='google'>Google</span></span>
            <GoogleButton
                onClick={handleGoogleLogin}
            />
        </div>
    );
};

export default Login;