import React from 'react';
import { Link } from 'react-router-dom';
import './TopBer.css';

const TopBer = () => {
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
                    <Link className='link' to='/about'>
                        <li className="topListItem">ABOUT</li>
                    </Link>
                    <Link className="link" to='/contact'>
                        <li className="topListItem">CONTACT</li>
                    </Link>
                    <Link className="link" to='/write'>
                        <li className="topListItem">WRITE</li>
                    </Link>
                    <Link className="link" to='/login'>
                        <li className="topListItem">LOGIN</li>
                    </Link>
                    <Link className="link" to='/register'>
                        <li className="topListItem">REGISTER</li>
                    </Link>
                </ul>
            </div>
            <div className="topRight">
                <ul className="topList">
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                        />
                    </Link>
                </ul>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBer;