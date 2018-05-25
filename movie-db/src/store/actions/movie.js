import axios from "axios";
import * as actionTypes from "./actionTypes";



export const fetchMoviesStart = () => {
    return {
        type: actionTypes.FETCH_MOVIES_START
    }
}

export const fetchMoviesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        payload: data
    }
}

export const fetchMoviesFailure = (err) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILURE,
        payload: err
    }
}

export const fetchMovies = (term) => {
    return dispatch => {
        dispatch(fetchMoviesStart())
        axios.get(`http://www.omdbapi.com/?s=${term}&plot=full&apikey=thewdb`)
            .then(response => {
                console.log(response.data)
                dispatch(fetchMoviesSuccess(response.data.Search))
            })
            .catch(err => {
                console.log(err)
                dispatch(fetchMoviesFailure(err.response.data))
            })
    }
}

