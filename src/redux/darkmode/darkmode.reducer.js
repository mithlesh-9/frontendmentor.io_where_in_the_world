import darkmodeActionType from './darkmode.action.type';

const INITIAL_STATE = {
    darkmode: false
}

const darkmodeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case darkmodeActionType.darkmode_true:
            return {...state,darkmode:true}
        
        case darkmodeActionType.darkmode_false:
            return {...state,darkmode:false}

    
        default:
            return state;
    }
}


export default darkmodeReducer;