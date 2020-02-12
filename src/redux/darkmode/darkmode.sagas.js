import { takeLatest, all, call, put} from 'redux-saga/effects';

import { setDarkmode,setDarkmodeOff } from './darkmode.actions';
import darkmodeActionType from  './darkmode.action.type';

export function* onSetDarkmode() {
    try {
        yield put(setDarkmode())
    } catch(e) {
        console.log(e)
    }
}


export function* OnDarkmode() {
    yield takeLatest(darkmodeActionType.darkmode,onSetDarkmode)
}

export function* onSetDarkmodeOff() {
    try {
        yield put(setDarkmodeOff())
    } catch(e) {
        console.log(e)
    }
}


export function* OnDarkmodeOff() {
    yield takeLatest(darkmodeActionType.darkmode_off,onSetDarkmodeOff)
}

export function* darkmodeSagas() {
    yield all([
        call(onSetDarkmode),
        call(onSetDarkmodeOff)])
}