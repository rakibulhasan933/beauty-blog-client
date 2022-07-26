import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';
import Spinner from '../../components/Spinner/Spinner';

const Posts = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, SetLoading] = useState(false);

    useEffect(() => {
        SetLoading(true);
        fetch('https://quiet-atoll-26066.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                SetLoading(false);
            })
    }, [])
    return isLoading ? <Spinner /> : (
        <div className='posts'>
            {
                blogs.map(item =>
                    <Post key={item._id} item={item} ></Post>
                )
            }
        </div>
    );
};

export default Posts;