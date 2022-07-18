import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBer from '../../components/SideBer/SideBer';
import './Posts.css';

const Posts = () => {
    return (
        <div className='posts'>
            <div className="postsMain">
                <Outlet />
            </div>
            <SideBer />
        </div>
    );
};

export default Posts;