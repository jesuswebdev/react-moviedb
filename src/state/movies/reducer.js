import * as moviesActions from './actionTypes';

const moviesInitialState = {
    trending: [],
    trending_error: false,
    top: [],
    top_error: false,
    movie_details: null,
    current_movie_details_id: null,
    movie_details_error: false,
    movie_cast: [],
    show_full_cast: false,
    movie_cast_error: false
};

const fetchTrendingMoviesSuccess = (state, action) => {
    return {
        ...state,
        trending: [...action.payload.movies],
        trending_error: false
    }
}

const fetchTrendingMoviesFail = (state, action) => {
    return {
        ...state,
        trending_error: true
    }
}

const fetchMovieDetailsSuccess = (state, action) => {
    return {
        ...state,
        movie_details: action.payload.movieDetails,
        current_movie_details_id: action.payload.movieDetails.id,
        movie_details_error: false
    }
}

const fetchMovieDetailsFail = (state, action) => {
    return {
        ...state,
        movie_details_error: true
    }
}

const fetchMovieCastSuccess = (state, action) => {
    return {
        ...state,
        movie_cast: action.payload.cast,
        show_full_cast: false,
        movie_cast_error: false
    }
}

const fetchMovieCastFail = (state, action) => {
    return {
        ...state,
        movie_cast_error: true
    }
}

const showFullCast = (state, action) => {
    return {
        ...state,
        show_full_cast: true
    }
}

const reducer = (state = moviesInitialState, action) => {
    switch (action.type) {
        case moviesActions.FETCH_TRENDING_MOVIES_SUCCESS: return fetchTrendingMoviesSuccess(state,action)
        case moviesActions.FETCH_TRENDING_MOVIES_FAIL: return fetchTrendingMoviesFail(state, action)
        case moviesActions.FETCH_MOVIE_DETAILS_SUCCESS: return fetchMovieDetailsSuccess(state, action)
        case moviesActions.FETCH_MOVIE_DETAILS_FAIL: return fetchMovieDetailsFail(state, action)
        case moviesActions.FETCH_MOVIE_CAST_SUCCESS: return fetchMovieCastSuccess(state, action)
        case moviesActions.FETCH_MOVIE_CAST_FAIL: return fetchMovieCastFail(state, action)
        case moviesActions.SHOW_FULL_CAST: return showFullCast(state, action)
        default: return state;
    }
}

export default reducer;
