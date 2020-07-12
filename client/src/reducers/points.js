import { GET_POINTS, UPDATE_POINTS } from '../actions/types';

const initialState = {
    paper: null,
    metal: null,
    total: 0,
    points: 0
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_POINTS:
            return {
                ...state,
                paper: payload.paper,
                metal: payload.metal,
                total: payload.total,
                points: payload.points
            }
        case UPDATE_POINTS:
            return {
                ...state,
                points: state.total
            }
        default:
            return state;
    }
}