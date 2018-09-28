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

export const fetchMovieCast = (id) => {
    return {
        type: actionTypes.REQUEST_FETCH_MOVIE_CAST,
        payload: {
            movie_id: id
        }
    }
}

export const fetchMovieCastSuccess = (cast) => {
    return {
        type: actionTypes.FETCH_MOVIE_CAST_SUCCESS,
        payload: {
            cast
        }
    }
}

export const fetcMovieCastFail = () => {
    return {
        type: actionTypes.FETCH_MOVIE_CAST_FAIL
    }
}

export const showFullCast = () => {
    return {
        type: actionTypes.SHOW_FULL_CAST
    }
}

export const fetchTopMovies = () => {
    return {
        type: actionTypes.REQUEST_FETCH_TOP_MOVIES
    }
}

export const fetchTopMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_TOP_MOVIES_SUCCESS,
        payload: {
            movies
        }
    }
}

export const fetchTopMoviesFail = () => {
    return {
        type: actionTypes.FETCH_TOP_MOVIES_FAIL
    }
}

export const selectTab = (tab) => {
    return {
        type: actionTypes.SELECT_TAB,
        payload: tab
    }
}
