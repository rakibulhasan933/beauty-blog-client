import React from 'react';
import { Link } from 'react-router-dom';
import './SideBer.css';

const SideBer = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTittle">ABOUT ME</span>
                <img
                    src="https://i.ibb.co/JpF1nSV/31671553-2062830170707480-6027634644545961984-n.jpg"
                    alt=""
                />
                <p>
                    I am a hardworking, confident, enthusiastic Web developer and I want to utilize my knowledge and
                    personal skills in Web Development.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTittle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem"> Style</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTittle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <Link className="link" to="/">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </Link>
                    <Link className="link" to="/">
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </Link>
                    <Link className="link" to="/">
                        <i className="sidebarIcon fab fa-pinterest-square"></i>
                    </Link>
                    <Link className="link" to="/">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SideBer;