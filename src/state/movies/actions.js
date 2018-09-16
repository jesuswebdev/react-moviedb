import * as actionTypes from './actionTypes';

export const fetchTrendingMovies = () => {
    return {
        type: actionTypes.REQUEST_FETCH_TRENDING_MOVIES
    }
}

export const fetchTrendingMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
        payload: {
            movies
        }
    }
}

export const fetchTrendingMoviesFail = () => {
    return {
        type: actionTypes.FETCH_TRENDING_MOVIES_FAIL
    }
}
