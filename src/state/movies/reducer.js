import * as moviesActions from './actionTypes';

const moviesInitialState = {
    trending: [],
    trending_error: false,
    top: [],
    top_error: false,
    playing: [],
    playing_error: false,
    movie_details: null,
    current_movie_details_id: null,
    movie_details_error: false,
    movie_cast: [],
    show_full_cast: false,
    movie_cast_error: false,
    selectedTab: 'trending'
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

const clearMovieCast = (state, action) => {
    return {
        ...state,
        movie_cast: []
    }
}

const showFullCast = (state, action) => {
    return {
        ...state,
        show_full_cast: true
    }
}

const fetchTopMoviesSuccess = (state, action) => {
    return {
        ...state,
        top: [...action.payload.movies],
        top_error: false
    }
}

const fetchTopMoviesFail = (state, action) => {
    return {
        ...state,
        top_error: true
    }
}

const fetchPlayingMoviesSuccess = (state, action) => {
    return {
        ...state,
        playing: [...action.payload.movies],
        playing_error: false
    }
}

const fetchPlayingMoviesFail = (state, action) => {
    return {
        ...state,
        playing_error: true
    }
}

const selectTab = (state, action) => {

    if (state.selectedTab === action.payload) {
        return state;
    }

    return {
        ...state,
        selectedTab: action.payload
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
        case moviesActions.CLEAR_MOVIE_CAST: return clearMovieCast(state, action)
        case moviesActions.FETCH_TOP_MOVIES_SUCCESS: return fetchTopMoviesSuccess(state, action)
        case moviesActions.FETCH_TOP_MOVIES_FAIL: return fetchTopMoviesFail(state, action)
        case moviesActions.FETCH_PLAYING_MOVIES_SUCCESS: return fetchPlayingMoviesSuccess(state, action)
        case moviesActions.FETCH_PLAYING_MOVIES_FAIL: return fetchPlayingMoviesFail(state, action)
        case moviesActions.SELECT_TAB: return selectTab(state, action)
        default: return state;
    }
}

export default reducer;
