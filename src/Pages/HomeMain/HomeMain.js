import React from 'react';
import Header from '../../components/Header/Header';
import SideBer from '../../components/SideBer/SideBer';
import Home from '../Home/Home';
import './HomeMain.css';

const HomeMain = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <Home />
                <SideBer />
            </div>
        </div>
    );
};

export default HomeMain;