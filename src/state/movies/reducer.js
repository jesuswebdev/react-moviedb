import * as moviesActions from './actionTypes';

const moviesInitialState = {
    trending: [],
    trending_error: false,
    movie_details: null,
    current_movie_details_id: null,
    movie_details_error: false
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

const reducer = (state = moviesInitialState, action) => {
    switch (action.type) {
        case moviesActions.FETCH_TRENDING_MOVIES_SUCCESS: return fetchTrendingMoviesSuccess(state,action)
        case moviesActions.FETCH_TRENDING_MOVIES_FAIL: return fetchTrendingMoviesFail(state, action)
        case moviesActions.FETCH_MOVIE_DETAILS_SUCCESS: return fetchMovieDetailsSuccess(state, action)
        case moviesActions.FETCH_MOVIE_DETAILS_FAIL: return fetchMovieDetailsFail(state, action)
        default: return state;
    }
}

export default reducer;
