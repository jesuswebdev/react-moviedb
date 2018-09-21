import * as actionTypes from './actionTypes';

export const requestSearchMovie = (query, nextPage) => {
    return {
        type: actionTypes.REQUEST_SEARCH_MOVIE,
        payload: {
            query,
            nextPage
        }
    }
}

export const searchMovieStart = (query) => {
    return {
        type: actionTypes.SEARCH_MOVIE_START,
        payload: {
            query
        }
    }
}

export const searchMovieSuccess = (results) => {
    return {
        type: actionTypes.SEARCH_MOVIE_SUCCESS,
        payload: {
            results
        }
    }
}

export const searchMovieFail = () => {
    return {
        type: actionTypes.SEARCH_MOVIE_FAIL
    }
}

export const searchQueryInput = (query) => {
    return {
        type: actionTypes.SEARCH_QUERY_INPUT,
        payload: {
            query
        }
    }
}

