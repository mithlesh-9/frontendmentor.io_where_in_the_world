import { call, all} from 'redux-saga/effects';

import { countriesSagas } from './countries/countries.sagas';
import { darkmodeSagas } from './darkmode/darkmode.sagas';
import { countrySagas } from './country/country.sagas';


export default function* rootSaga() {
    yield all([
        call(countrySagas),
        call(countriesSagas),
        call(darkmodeSagas)
    ]);
}
