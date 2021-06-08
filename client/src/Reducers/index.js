import {GET_COUNTRIES,GET_COUNTRIES_BY_ID,GET_COUNTRIES_BY_NAME} from '../Actions/index'

const initialState = {
    countries: [],
    countryDetail: {}
};

export function reducer (state=initialState,action) {
    switch(action.type) {
        case GET_COUNTRIES: 
            return {
                ...state,
                countries: action.payload
            };
        case GET_COUNTRIES_BY_ID: 
            return {
                ...state,
                countryDetail: action.payload
            };
        case GET_COUNTRIES_BY_NAME: 
            return {
                ...state,
                countries: action.payload
            };
        default:
            return state;
    };
}