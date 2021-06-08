import React from 'react';
import {Link} from 'react-router-dom';

import {CountryStyle} from './countryStyle.jsx';

export default function Country ({country}) {
  
    return(
        <CountryStyle>
            <div className='firstRow'>
                <img src={country.flag} alt="flag"/>
                <div className='names'>
                    <h2>{country.name}</h2>
                    <h3>{country.region}</h3>
                </div>
            </div>
            <Link to={`/countries/${country.id}`}>
                <button>Pick me!</button>
            </Link>
        </CountryStyle>
    );
};