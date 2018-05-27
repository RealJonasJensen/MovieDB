import * as actionTypes from "../actions/actionTypes";

const initialState = {
    movies: null,
    errors: null,
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MOVIES_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload
            }

        default: return state;
    }
}

export default reducer;