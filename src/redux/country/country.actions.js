import countryActionTypes from './country.action.types';


export const fetchCountryStart = countryName => ({
    type: countryActionTypes.fetch_country_start,
    payload: countryName
})

export const fetchCountrySuccess = (country) => ({
    type: countryActionTypes.fetch_country_success,
    payload: country

})

export const fetchCountryFailed = (errors) => ({
    type: countryActionTypes.fetch_country_failed,
    payload:errors
})


