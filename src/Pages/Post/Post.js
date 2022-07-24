import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ item }) => {
    const { _id, image, tittle, time, dec } = item;
    return (
        <div>
            <Link className="link" to={`${_id}`}>
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
                            <Link className="link" to={`${_id}`}>
                                {tittle}
                            </Link>
                        </span>
                        <hr />
                        <span className="postDate">{time}</span>
                    </div>
                    <p className="postDesc">{dec}</p>
                </div>
            </Link>
        </div>
    );
};

export default Post;