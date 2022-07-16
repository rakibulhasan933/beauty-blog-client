import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import SideBer from '../../components/SideBer/SideBer';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <Posts />
                <SideBer />
            </div>
        </>
    );
};

export default Home;