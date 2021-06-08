import React from 'react';

import {CountryDetailStyle} from './countryCardStyle';

export default function CountryCard ({country,activities}) {

    return (
        <CountryDetailStyle>
            <h2> Welcome to {country?.name}!</h2>
            <div>
                <img src={country?.flag} alt="flag"/>
                <div className='generalInfo'>
                    <h3>Code: {country?.id}</h3>
                    <h3>Capital: {country?.capital}</h3>
                    <h3>Subregion: {country?.subregion}</h3>
                    <h3>Region: {country?.region}</h3>
                    <h3>Area: {country?.area} square kilometers</h3>
                    <h3>Population: {country?.population} people</h3>
                </div>
                <div >
                    <div className='activity'>
                        <h3>Activities:</h3>
                    </div>
                    <div className='activities'>{
                        activities?
                            activities.map((activity)=>{
                                return(
                                <div className='cards'>
                                    <h5 className='name'>{activity.name}</h5>
                                    <div className='info'>
                                        <h5>Difficulty: {activity.difficulty}</h5>
                                        <h5>Time: {activity.time}</h5>
                                        <h5>Season: {activity.season}</h5>
                                    </div>
                                </div>
                                );
                            })
                            :<p>No activities found</p>
                    }</div>
                </div>
            </div>
        </CountryDetailStyle>
    );
};