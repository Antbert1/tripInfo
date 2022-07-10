import { combineReducers } from 'redux';
import { TRIP_INFO, ERROR } from './actions';
const dataState = {
    tripInfo: {},
    error: ""
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case TRIP_INFO:
            state = Object.assign({}, state, { tripInfo: action.tripInfo });
            return state;
        case ERROR:
            state = Object.assign({}, state, { error: action.error });
            return state;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;