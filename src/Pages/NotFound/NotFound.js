import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='container'>
            <div className="notFound">
                <div className="containPart">
                    <h3 >This Page Was Lost</h3>
                    <p>The Page You are looking for isn’t available. Try to
                        <br />
                        search again or use the Go Back button below.</p>
                    <Link className="link" to='/'>
                        <span> Go Back</span>
                    </Link>
                </div>
                <div className="imgPart">
                    <img src="https://storyhub-modern-agency-redq.vercel.app/static/3e89880fa3f03870db04c781ec892372/f26e3/404.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;