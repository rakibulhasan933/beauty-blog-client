import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Posts from '../Posts/Posts';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Link className="link" to='/blogs'>
                <Posts />
            </Link>
        </div>
    );
};

export default Home;