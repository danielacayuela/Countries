import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getCountriesById} from '../../Actions/index';
import CountryCard from './CountryCard';

export default function CountryDetail (props) {

    let countryId = props.match.params.id;

    const dispatch = useDispatch();
//llamo informacion puntual del pais por el id
    useEffect(() => {
        dispatch(getCountriesById(countryId));
    },[dispatch,countryId]);

    let country = useSelector(state => state.countryDetail);

    return(
        <div>
            <div>{
                country?
                //paso info a detalle por pais
                    <CountryCard country={country} activities={country.activities} key={country.id}/>
                    :<p>No country found</p>
            }</div>
        </div>
    );
};