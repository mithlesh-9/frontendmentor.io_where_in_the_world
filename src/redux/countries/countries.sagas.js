import countriesActionTypes from './countries.action.types';
import { takeLatest, put, call, all} from 'redux-saga/effects';
import { fetchCountriesSuccess, fetchCountriesFailed } from './countries.actions';
import axios from 'axios';

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all';

export function* fetchCountries() {
    try {
        const countries = yield axios.get(COUNTRIES_URL)
        yield put(fetchCountriesSuccess(countries.data))
    } catch(e) {
        console.log(e)
        yield put(fetchCountriesFailed(e))
    }
}

export function* onFetchCountries() {
   yield takeLatest(countriesActionTypes.fetch_countries_start,fetchCountries)
}



export function* countriesSagas() {
    yield all([
        call(onFetchCountries)
    ])
}