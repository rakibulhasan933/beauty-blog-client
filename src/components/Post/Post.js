import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ item }) => {
    return (
        <div>
            <div className='post'>
                <img className='postImg' src={item.img} alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">
                            <Link className="link" to="/">
                                Music
                            </Link>
                        </span>
                        <span className="postCat">
                            <Link className="link" to="/">
                                Life
                            </Link>
                        </span>
                    </div>
                    <span className="postTitle">
                        <Link to="/" className="link">
                            {item.name}
                        </Link>
                    </span>
                    <hr />
                    <span className="postDate">{item.time}</span>
                </div>
                <p className="postDesc">{item.dec}</p>
            </div>
        </div>
    );
};

export default Post;