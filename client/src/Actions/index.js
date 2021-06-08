import axios from 'axios'

const url = 'http://localhost:3001'

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_ID = 'GET_COUNTRIES_BY_ID';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_MORE_THA_ONE_COUNTRIES_BY_ID = 'GET_MORE_THA_ONE_COUNTRIES_BY_ID';

export function getCountries () {
    return async function (dispatch) {
        const req= await axios.get(`${url}/countries`);
        const countriesData = req.data.map((country) => {
            return {
                id: country.id,
                name:country.name,
                flag: country.flag,
                region: country.region,
                population: country.population,
                activities: country.activities
            };
        })
    dispatch({type:GET_COUNTRIES, payload:countriesData});
    };
}

export function getCountriesById (id) {
    return async function (dispatch) {
        const req= await axios.get(`${url}/countries/${id}`);
            const foundedCountry = {
            id: req.data.id,
            name:req.data.name,
            flag: req.data.flag,
            region: req.data.region,
            capital: req.data.capital,
            subregion:req.data.subregion,
            area: req.data.area,
            population: req.data.population,
            activities: req.data.activities
        };
        dispatch({type:GET_COUNTRIES_BY_ID, payload:foundedCountry});
    };
}

export function getCountriesByName (name) {
    return async function (dispatch) {
        const req= await axios.get(`${url}/countries?name=${name}`);
        const countriesData = req.data.map((country) => {
            return {
                name: country.name,
                id: country.id,
                flag: country.flag,
                region: country.region,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                activities: country.activities
            };
        });
        dispatch({type:GET_COUNTRIES_BY_NAME, payload:countriesData});
    };
}

export function postActivity (activity) {
    return async function () {
         await axios.post(`${url}/activity`, activity );
    };  
}
