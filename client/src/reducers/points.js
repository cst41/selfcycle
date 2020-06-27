import { GET_POINTS } from '../actions/types';

const initialState = {
    paper: null,
    metal: null,
    total: 0
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_POINTS:
            return {
                ...state,
                paper: payload.paper,
                metal: payload.metal,
                total: payload.total
            }
        default:
            return state;
    }
}