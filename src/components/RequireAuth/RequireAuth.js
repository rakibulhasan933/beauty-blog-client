import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(Auth);
    const location = useLocation();

    if (loading) {
        return <Spinner />
    }

    if (!user) {
        <Navigate to='/login' state={{ location }} replace></Navigate>
    }

    return children;
};

export default RequireAuth;