import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBer from '../../components/SideBer/SideBer';
import './BlogMain.css';

const HomeMain = () => {
    return (
        <div className='homeMain'>
            <div className="outlet">
                <Outlet />
            </div>
            <SideBer />
        </div>
    );
};

export default HomeMain;