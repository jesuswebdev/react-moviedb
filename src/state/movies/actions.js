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

export const fetchMovieDetails = (id) => {
    return {
        type: actionTypes.REQUEST_FETCH_MOVIE_DETAILS,
        payload: {
            id
        }
    }
}

export const fetchMovieDetailsSuccess = (movieDetails) => {
    return {
        type: actionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
        payload: {
            movieDetails
        }
    }
}

export const fetchMovieDetailsFail = () => {
    return {
        type: actionTypes.FETCH_MOVIE_DETAILS_FAIL
    }
}
