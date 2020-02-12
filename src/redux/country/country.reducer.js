import countryActionTypes from './country.action.types';


const INITIAL_STATE = {
    isLoading: false,
    country: null,
    errors: null
}

const countryReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case countryActionTypes.fetch_country_start:
           return {...state,
            isLoading:true,
            country:null,
            errors: null}
           
        case countryActionTypes.fetch_country_success:
            return {...state,
                isLoading:false,
                country:action.payload,
                errors:null
            }
        
        case countryActionTypes.fetch_country_failed:
            return {
                ...state,
                isLoading:false,
                country:null,
                errors:action.payload
            }           
    
        default:
            return state;
    }
}

export default countryReducer;