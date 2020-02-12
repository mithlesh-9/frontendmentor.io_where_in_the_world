import countryActionTypes from './country.action.types';
import { takeLatest, put, call, all} from 'redux-saga/effects';
import { fetchCountrySuccess, fetchCountryFailed } from './country.actions';
import axios from 'axios';



export function* fetchcountry({payload}) {
    try {
        const country = yield axios.get(`https://restcountries.eu/rest/v2/alpha/${payload}`)
        yield put(fetchCountrySuccess(country.data))
    } catch(e) {
        console.log(e)
        yield put(fetchCountryFailed(e))
    }
}

export function* onFetchcountry() {
   yield takeLatest(countryActionTypes.fetch_country_start,fetchcountry)
}

export function* countrySagas() {
    yield all([
        call(onFetchcountry)
    ])
}