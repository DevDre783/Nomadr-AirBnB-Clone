import { csrfFetch } from "./csrf";

const LOAD_ALL = 'vans/LOAD_ALL';

const loadAll = (listOfVans) => {
    return {
        type: LOAD_ALL,
        listOfVans
    }
};

export const getAllVans = () => async (dispatch) => {
    const response = await csrfFetch('/api/vans');
    if(response.ok) {
        const vans = await response.json();
        dispatch(loadAll(vans));
    }
};

const initialState = {
    listOfVans: []
};

const vansReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL: {
            const allVans = [];
            action.listOfVans.forEach(van => {
                allVans[van.id] = van
            });
            return {
                ...state,
                ...allVans,
                listOfVans: action.listOfVans
            }
        }
        default:
            return state
    }
};

export default vansReducer;
