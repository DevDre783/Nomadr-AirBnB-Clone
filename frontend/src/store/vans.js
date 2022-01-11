import { csrfFetch } from "./csrf";

const LOAD_ALL = 'vans/LOAD_ALL';
const LOAD_ONE = 'vans/LOAD_ONE';
const ADD_ONE = 'vans/ADD_ONE';

const loadAll = (listOfVans) => {
    return {
        type: LOAD_ALL,
        listOfVans
    }
};

const loadOne = (van) => {
    return {
        type: LOAD_ONE,
        van
    }
};

const addOneVan = (van) => {
    return {
        type: ADD_ONE,
        van
    }
};

export const getAllVans = () => async (dispatch) => {
    const response = await csrfFetch('/api/vans');
    if (response.ok) {
        const vans = await response.json();
        dispatch(loadAll(vans));
    }
};

export const getOneVan = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/vans/${id}`);
    if (response.ok) {
        const van = await response.json();
        dispatch(loadOne(van));
    }
};

export const postVan = ( van ) => async dispatch => {
    const res = await csrfFetch(`/api/host`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(van)
   });
   if (!res.ok) {
       let error = await res.json();
       return error;
   }

   const payload = await res.json();
   console.log("addVan THUNK", payload);
   await dispatch(addOneVan(payload));

   return payload;
}

const initialState = {
    listOfVans: []
};

const vansReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case LOAD_ONE: {
            if (state[action.van.vanId]) {
                const newState = {
                    ...state,
                    [action.van.vanId]: action.van
                };

                return newState
            }
            return {
                ...state,
                [action.van.id]: {
                    ...state[action.van.id],
                    ...action.van
                }
            }
        }
        case ADD_ONE: {
            if (!state[action.van.id]) {
                const newState = {
                    ...state,
                    [action.van.id]: action.van
                };
                const vanList = newState.listOfVans.map(id => newState[id]);
                vanList.push(action.van);
                newState.listOfVans = action.listOfVans;
                return newState;
            }
            return {
                ...state,
                [action.van.id]: {
                    ...state[action.van.id],
                    ...action.van
                }
            }
        }
        default:
            return state
    }
};

export default vansReducer;
