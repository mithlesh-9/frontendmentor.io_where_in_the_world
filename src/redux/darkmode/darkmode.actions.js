import darkmodeActionType from './darkmode.action.type';

export const darkmode = () => ({
    type: darkmodeActionType.darkmode
})

export const darkmodeOff = () => ({
    type: darkmodeActionType.darkmode_off
})

export const setDarkmode = () => ({
    type: darkmodeActionType.darkmode_true
})

export const setDarkmodeOff = () => ({
    type: darkmodeActionType.darkmode_false
})