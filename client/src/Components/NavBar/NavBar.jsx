import React from "react";
import {Link } from "react-router-dom";

import {NavStyle} from './navStyle.jsx';

export default function NavBar () {

    return(
        <NavStyle>
            <h1>Hit the road!</h1>
            <div className='links'>
                <Link to={'/home'}>
                    <button>Home</button>
                </Link>
                <Link to={'/activity'}>
                    <button>Activity</button>
                </Link>
            </div>
        </NavStyle>
    );
};