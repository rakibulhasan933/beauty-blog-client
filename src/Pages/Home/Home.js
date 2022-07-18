import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Posts />
        </div>
    );
};

export default Home;