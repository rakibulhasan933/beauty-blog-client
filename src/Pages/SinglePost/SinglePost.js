import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import './SinglePost.css';

const SinglePost = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://quiet-atoll-26066.herokuapp.com/blogs/${id}`)
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
    }, [id]);

    const { name, tittle, time, image, photo, dec } = blogs;
    console.log('blog', blogs);

    return isLoading ? <Spinner /> : (
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
                    <span className='creatorInfo'>
                        <img className='CreateImg' src={photo} alt="" />
                        <b className="singlePostAuthor">
                            {name}
                        </b>
                    </span>
                    <span>{time}</span>
                </div>
                <p className="singlePostDesc">
                    {dec}
                </p>
            </div>
        </div>
    );
};

export default SinglePost;