import { csrfFetch } from "./csrf";

const LOAD_ALL = 'vans/LOAD_ALL';
const LOAD_ONE = 'vans/LOAD_ONE';
const ADD_ONE = 'vans/ADD_ONE';
const DELETE_ONE = 'vans/DELETE_ONE';

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

const deleteOneVan = (vanId) => {
    return {
        type: DELETE_ONE,
        vanId
    }
}

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

export const postVan = ( payload ) => async dispatch => {
    const res = await csrfFetch(`/api/vans/host`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(payload)
   });

   const van = await res.json();
//    console.log("addVan THUNK", payload);
   await dispatch(addOneVan(van));
   return van;
}

export const editVan = (payload, id) => async(dispatch) => {
    const response = await csrfFetch(`/api/vans/${id}/host`, {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    });

    const van = await response.json();
    dispatch(addOneVan(van));
}

export const deleteVan = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/vans/${id}`, {
        method: "DELETE",
    });

    console.log("yo response:", response);

    if (response.ok) {
        const van = await response.json();
        await dispatch(deleteOneVan(van));
    }
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
        case DELETE_ONE: {
            return {
              ...state,
              [action.vanId]: {
                ...state[action.vanId],
                listOfVans: state[action.vanId].listOfVans.filter(
                  (van) => van.id !== action.vanId
                ),
              },
            };
          }
        default:
            return state;
    }
};

export default vansReducer;
