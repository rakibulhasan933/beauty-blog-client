import React from 'react';
import { Link } from 'react-router-dom';
import './TopBer.css';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const TopBer = () => {
    const [user] = useSignInWithGoogle(auth);
    console.log(user);

    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <Link className='link' to='/'>
                        <li className="topListItem">HOME </li>
                    </Link>
                    <Link className="link" to='/contact'>
                        <li className="topListItem">CONTACT</li>
                    </Link>
                    {user && <Link className="link" to='/write'>
                        <li className="topListItem">WRITE</li>
                    </Link>}
                </ul>
            </div>
            <div className="topRight">
                {user && <button className='buttonLogout' onClick={logout} >LOGOUT</button>}
                {user ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={photoURL}
                            alt="man"
                        />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                    </ul>
                )}
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBer;