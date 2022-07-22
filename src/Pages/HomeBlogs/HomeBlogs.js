import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBlogs.css';

const HomeBlogs = ({ item }) => {
    const { _id, image, name, time, dec } = item;
    return (
        <Link className="link" to={`blogs/${_id}`}>
            <div className='post'>
                <img className='postImg' src={`data:image/jpg;base64,${image}`} alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">
                            Music
                        </span>
                        <span className="postCat">
                            Life
                        </span>
                    </div>
                    <span className="postTitle">
                        <Link className="link" to={`blogs/${_id}`}>
                            {name}
                        </Link>
                    </span>
                    <hr />
                    <span className="postDate">{time}</span>
                </div>
                <p className="postDesc">{dec}</p>
            </div>
        </Link>
    );
};

export default HomeBlogs;