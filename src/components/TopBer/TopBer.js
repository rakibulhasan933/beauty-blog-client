import React from 'react';
import { Link } from 'react-router-dom';
import './TopBer.css';
import useAuth from '../../hooks/useAuth';

const TopBer = () => {
    const { user, logout } = useAuth() || {};
    console.log('navbar', user);
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
                    <Link className="link" to='/blogs'>
                        <li className="topListItem">BLOGS</li>
                    </Link>
                    {user.email && <Link className="link" to='/write'>
                        <li className="topListItem">WRITE</li>
                    </Link>}
                </ul>
            </div>
            <div className="topRight">
                {user.email && <button className='buttonLogout' onClick={logout} >LOGOUT</button>}
                {user.email ? (
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={user.photoURL}
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