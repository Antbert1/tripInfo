import { combineReducers } from 'redux';
import { TRIP_INFO } from './actions';
const dataState = {
    tripInfo: {}
};

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case TRIP_INFO:
            state = Object.assign({}, state, { tripInfo: action.tripInfo });
            return state;
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    dataReducer,
});

export default rootReducer;