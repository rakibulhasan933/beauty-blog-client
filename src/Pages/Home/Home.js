import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <div className="blogs">

                </div>
            </div>
        </div>
    );
};

export default Home;