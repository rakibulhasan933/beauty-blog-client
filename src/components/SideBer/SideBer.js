import React from 'react';
import { Link } from 'react-router-dom';
import './SideBer.css';

const SideBer = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTittle">ABOUT ME</span>
                <img
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p>
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTittle">CATEGORIES</span>
                <ul className="sidebarList">
                    <Link className="link" to="/">
                        <li className="sidebarListItem">Life</li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="sidebarListItem">Music</li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="sidebarListItem">Sport</li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="sidebarListItem"> Style</li>
                    </Link>
                    <Link className="link" to="/">
                        <li className="sidebarListItem">Tech</li>
                    </Link>
                    <Link className="link " to="/">
                        <li className="sidebarListItem">Cinema</li>
                    </Link>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTittle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
};

export default SideBer;