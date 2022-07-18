import React from 'react';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import SideBer from '../../components/SideBer/SideBer';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <Post />
                <SideBer />
            </div>
        </>
    );
};

export default Home;