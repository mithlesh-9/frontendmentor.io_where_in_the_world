import { combineReducers } from  'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import countriesReducer from './countries/countries.reducer';
import darkmodeReducer from './darkmode/darkmode.reducer';
import countryReducer from './country/country.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['country','darkmode']
}

const rootReducer = combineReducers({
    countries: countriesReducer,
    country: countryReducer,
    darkmode: darkmodeReducer
});


export default persistReducer(persistConfig,rootReducer);