import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">Hacking & Technology Learning Tips</span>
                <span className="headerTitleLg">BLOGS</span>
            </div>
            <img
                className="headerImg"
                src="https://i.ibb.co/LJQ4ys4/pexels-tima-miroshnichenko-5380589.jpg"
                alt="code"
            />
        </div>
    );
};

export default Header;