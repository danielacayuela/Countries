import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import{getCountries, postActivity} from '../../Actions/index';
import {getIds} from '../Functions/functions';
import {ActivityStyle} from './activityStyle.jsx';

export default function Activity () {

//traigo los paises para tener la lista de opciones de paises
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
    },[dispatch]);

    const countries = useSelector((state)=>state.countries);

    const [input,setInput] = useState ({
        name: '',
        difficulty: 0,
        time: 0,
        season: '',
        countries: []
    });

//setear el estado dependiendo de las opciones seleccionadas
    function handleChange (e) {
        setInput({...input,
        [e.target.name] : e.target.value})
    };

//agrupar ids de los paises seleccionados, usando la función getIds para hacerlo en un array
    function handleIds (e) {
        e.preventDefault();
        let ids = e.target.options;
            setInput({
                ...input,
                countries: getIds(ids)
            });
    };

//postear datos ingresados y resetear opciones
    function handleOnSubmit (e) {
        e.preventDefault();
        dispatch(postActivity(input));
        setInput({...input,
            name: '',
            difficulty: 0,
            time: 0,
            season: '' })
        document.getElementById("miForm").reset();
    }

    return(
        <ActivityStyle>
            <form id="miForm" onSubmit={handleOnSubmit}>
                <h1>Let's create new memories!</h1>
                <div className='name'>
                    <label>Name:</label>
                    <input type='text' name='name' placeholder='Type activity...' onChange={handleChange} value={input.name} required/>
                </div>
                <div className='difficulty'>
                    <label for='difficulty'>Difficulty:</label>
                    <select name="difficulty" onChange={handleChange} value={input.difficulty} required>
                        <option value="">Choose difficulty</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='time'>
                    <label for='time'>Time(hours aprox.):</label>
                    <select name='time' onChange={handleChange} value={input.time} required>
                        <option value="">Choose time</option>
                        <option value="1">1 or less</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>                            <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10"> 10 or more</option>
                    </select>
                </div>
                <div className='season'>
                    <label for='seasons'>Season:</label>
                    <select type='text' id="seasons" name='season' onChange={handleChange} value={input.season} required>
                        <option value="">Choose season</option> 
                        <option value="autumn">Autumn</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                    </select>
                </div>
                <div className='countriesname'>
                    <label>Countries:</label>
                </div>
                <div className='countries'>
                    <select multiple name="countries" id="countries" onChange={handleIds} required >{
                        countries.length>0?
                            countries.sort(function(a,b) {return a.name > b.name ? 1 : -1 }).map((country)=>{
                                return <option value={country.id}>{country.name}</option>
                                })
                            :<p>No options</p>
                    }</select>
                    <p>You can choose more than two countries by pressing Ctrl+options</p>
                </div>
                <button type='submit'>Let the magic begin!</button>
            </form>
        </ActivityStyle>
    )
};


