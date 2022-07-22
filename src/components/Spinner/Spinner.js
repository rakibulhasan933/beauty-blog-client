import React from 'react';
import { Fade } from 'react-reveal';
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <Fade left cascade>
                <h1 className='load'>Loading...</h1>
            </Fade>
        </div>
    );
};

export default Spinner;