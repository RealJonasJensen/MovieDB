import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchMovies = (term) => dispatch => {
    dispatch(fetchMoviesStart())
    axios.get(`http://www.omdbapi.com/?s=${term}&plot=full&apikey=thewdb`)
        .then(response => dispatch(fetchMoviesSuccess(response.data.Search)))
        .catch(err => dispatch(fetchMoviesFailure(err)))
}

export const fetchMoviesStart = () => {
    return {
        type: actionTypes.FETCH_MOVIES_START,
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export const fetchMoviesFailure = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILURE,
        payload: error
    }
}