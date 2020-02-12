import countriesActionTypes from './countries.action.types';


export const fetchCountriesStart = () => ({
    type: countriesActionTypes.fetch_countries_start
})

export const fetchCountriesSuccess = (countries) => ({
    type: countriesActionTypes.fetch_countries_success,
    payload: countries

})

export const fetchCountriesFailed = (errors) => ({
    type: countriesActionTypes.fetch_countries_failed,
    payload:errors
})







