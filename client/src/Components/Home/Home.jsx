import React, {useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getCountries, getCountriesByName} from '../../Actions/index';
import Country from '../Country/Country';
import Filters from '../Filters/Filters';
import Sort from '../Filters/Sort';
import SearchBar from '../SearchBar/SearchBar';
import {arrayPaisesPorActividad} from '../Functions/functions';
import {HomeStyle} from './homeStyle.jsx';

export function Home () {
    
    const countries = useSelector((state)=>state.countries);

    const [cards,setCards] = useState([]);
    const [name,setName] = useState('');
    const [regions,setRegions]=useState('');
    const [activities,setActivities]=useState('');
    const [sort,setSort]=useState('');
    const [page, setPage] =useState(0);
    const [search,setSearch] = useState('');
    
    const dispatch = useDispatch();
//si tengo nombre en query traigo coincidencias, sino traigo todo los paises
     useEffect(() => {
        if(search)dispatch(getCountriesByName(search));
        else dispatch(getCountries());
    },[search]);
//seteo las cartas con los paises que haya traido
    useEffect(()=>{
        setCards(countries);
    },[countries]);

    useEffect(()=>{
        let filtered=countries;
        if(regions !== "") { 
            filtered=filtered.filter(country=> country.region === regions);
           };
        if(activities !== "") {
            filtered=arrayPaisesPorActividad(filtered,"activities","name",activities);
            };
        if(sort){
            switch (sort) {
                case "asc":
                    filtered= filtered.sort((a, b) => {return a.name > b.name ? 1 : -1 });
                    break;
                case "desc":
                    filtered= filtered.sort((a, b) => { return a.name < b.name ? 1 : -1 });
                    break;
                case "LowerHigher": 
                    filtered= filtered.sort((a, b) => { return a.population - b.population });
                    break;
                case "HigherLower":
                    filtered= filtered.sort((a, b) => { return b.population - a.population });
                    break;
                default:
                    console.log('FINAL', filtered[0]);
                    break;
            };
        }; 
        setCards([...filtered]);
    },[regions,activities,sort]);

    function handleFilterChange (name,value){
        if(name === "regions"){setRegions(value)};
        if(name === "activities"){setActivities(value)};
    };
        
    function handlePageNext (){
        let max=Math.ceil(cards.length/10-1)
        if(max<0) {max=1};
        if(page<(max)) {setPage(page+1)};
    };

    function handlePagePrev () {
        if(page>0) {setPage(page-1)};
    };

    return(
        <HomeStyle>
            <div className='searchbar'>
                <SearchBar onChange={(value) => {setName(value)}}/>
                <button onClick={()=> {setSearch(name)}}>Search</button>
            </div>
            <div classname='filters'>
                <div>
                        <Sort  onChange={(value) => {setSort(value)}} onClick={(e) => {setPage(0)}}/>
                </div>
                <div>
                        <Filters  onChange={handleFilterChange} onClick={(e) => {setPage(0)}}/> 
                </div>
            </div>
            <div className='cards'>{
                cards.length>0?
                    cards.slice(page*10,page*10+10).map((country) => {
                        return <Country country={country}  key={country.id}/>
                    })
                    :<p className='btn'>Sorry! No country found, but you have a lot of other options:) Search for another country or change your filter options.</p>
            }</div>
            <div>
                <div className='pagination'>
                    <button value="prev" onClick={handlePagePrev}>prev</button>
                    <button>{page+1}</button>
                    <button value="next" onClick={handlePageNext}>next</button>
                </div>
            </div>  
        </HomeStyle>
    );
};




