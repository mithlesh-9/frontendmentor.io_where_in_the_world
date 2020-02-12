import countriesActionTypes from './countries.action.types';


const INITIAL_STATE = {
    isLoading: false,
    countries: [],
    errors: null
}

const countriesReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case countriesActionTypes.fetch_countries_start:
           return {...state,
            isLoading:true,
            countries: [],
            errors: null}
           
        case countriesActionTypes.fetch_countries_success:
            return {...state,
                isLoading:false,
                countries:action.payload,
                errors:null
            }
        
        case countriesActionTypes.fetch_countries_failed:
            return {
                ...state,
                isLoading:false,
                countries:[],
                errors:action.payload
            }           
    
        default:
            return state;
    }
}

export default countriesReducer;