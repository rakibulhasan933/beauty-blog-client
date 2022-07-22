import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/blogs/${id}`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [id]);

    const { name, tittle, time, image, dec } = blogs;
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src={`data:image/jpg;base64,${image}`}
                    alt=""
                />
                <h1 className="singlePostTitle">
                    {tittle}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            {name}
                        </b>
                    </span>
                    <span>{time}day ago</span>
                </div>
                <p className="singlePostDesc">
                    {dec}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;