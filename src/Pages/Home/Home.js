import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import SideBer from '../../components/SideBer/SideBer';
import Spinner from '../../components/Spinner/Spinner';
import HomeBlogs from '../HomeBlogs/HomeBlogs';
import './Home.css';

const Home = () => {
    const [isLoading, SetLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        SetLoading(true);
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data.slice(0, 6));
                SetLoading(false);
            });
    }, [])

    return isLoading ? <Spinner /> : (
        <div>
            <Header />
            <div className="home">
                <div className="blogs">
                    {
                        blogs.map(item => <HomeBlogs key={item._id} item={item} />)
                    }
                </div>
                <SideBer />
            </div>
        </div>
    );
};

export default Home;