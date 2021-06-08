import React from 'react';
import {useSelector} from 'react-redux';

import {iterateActivities} from '../Functions/functions';

export default function Filters ({onChange,onClick}){
//traigo countries para hacer los filtros 
   const countries = useSelector((state)=>state.countries);
//Regions filter
   let copyCountries =countries;
   let regions = copyCountries.map((country)=>country.region);
//quito valores repetidos
   let filteredRegions= [...new Set(regions)]; 
//Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.

//Activities
    let activities = copyCountries.map((country)=>country.activities);
    //traigo un arreglo de objetos de las actividades con la funcion
    let allActivities = iterateActivities(activities);
    let activitiesName = allActivities.map((activity)=>activity.name);
    let filteredActivities= [...new Set(activitiesName)]; 

    return ( 
        <div className='regionactivity'>
            <select name="regions" id="regions" onChange={(e) => {onChange(e.target.name,e.target.value)}} onClick={(e) => {onClick()}}>
                <option value="">Check regions!</option>
                {
                    filteredRegions.length>0?
                        filteredRegions.sort(function(a,b) {return a > b ? 1 : -1 }).map((region)=>{
                            return <option value={region}>{region}</option>
                            })
                    : <p>No regions</p>
                }
            </select>
            <select name="activities" id="activities" onChange={(e) => {onChange(e.target.name,e.target.value)}} onClick={(e) => {onClick()}}>
                <option value="">Check activities!</option>
                {
                    filteredActivities.length>0?
                        filteredActivities.sort(function(a,b) {return a > b ? 1 : -1 }).map((activity)=>{
                            return <option value={activity}>{activity}</option>
                            })
                        : <p>No regions</p>
                }
            </select>
        </div>
    );
};