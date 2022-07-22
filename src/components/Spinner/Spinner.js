import React from 'react';
import { Fade } from 'react-reveal';
import './Spinner.css'

const Spinner = () => {
    return (
        <div>
            <Fade left cascade>
                <h3 className='load'>Loading...</h3>
            </Fade>
        </div>
    );
};

export default Spinner;