import React from 'react';
import {Link } from 'react-router-dom';

import {LandingStyle} from './landingStyle.jsx';


export default function LandingPage () {
    return(
        <LandingStyle>
            <div className='general'>
                <div>
                    <p>The experience begins!</p>
                </div>
                <div>
                <Link to={'/home'}>
                    <button>Find your next adventure</button>
                </Link>
                </div>
            </div>
        </LandingStyle>
    );
};