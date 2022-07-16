import React from 'react';
import SideBer from '../../components/SideBer/SideBer';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';

const Single = () => {
    return (
        <div className='single'>
            <SinglePost />
            <SideBer />
        </div>
    );
};

export default Single;