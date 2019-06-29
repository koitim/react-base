import * as types from '../actions/actionTypes';

export default function devReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_DEV:
            //            debugger;
            return [...state, Object.assign({}, action.dev)];
        case types.LOAD_DEVS_SUCCESS:
            return action.devs
        default:
            return state;
    }
}