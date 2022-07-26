import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Write.css';

const Write = () => {
    const [tittle, setTittle] = useState('');
    const [dec, setDec] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const time = new Date();

    const { user } = useAuth() || {};

    const { displayName, photoURL } = user;
    // console.log('write', displayName, photoURL);

    const handleSubmit = e => {
        e.preventDefault();

        if (!image) {
            return;
        }
        const fromData = new FormData();
        fromData.append('name', displayName);
        fromData.append('photo', photoURL);
        fromData.append('tittle', tittle);
        fromData.append('dec', dec);
        fromData.append('image', image);
        fromData.append('time', time);

        fetch('https://quiet-atoll-26066.herokuapp.com/createBlogs', {
            method: 'POST',
            body: fromData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Blogs added in Successfully');
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://i.ibb.co/c620b89/pexels-tirachard-kumtanom-733856.jpg"
                alt="one woman writing"
            />
            <form onSubmit={handleSubmit} className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input id="fileInput"
                        type="file"
                        accept='image/jpg'
                        onChange={e => setImage(e.target.files[0])}
                        required

                        style={{ display: "none" }} />
                    <input
                        className="writeInput"
                        placeholder="Title"
                        required
                        onChange={e => setTittle(e.target.value)}
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story...."
                        required
                        onChange={e => setDec(e.target.value)}
                        type="text"
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
                {success && <p style={{ color: 'green' }}>{success}</p>}
            </form>

        </div>
    );
};

export default Write;