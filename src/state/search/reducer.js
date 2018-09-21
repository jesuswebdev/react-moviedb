import * as actionTypes from './actionTypes';

const initialState = {
    query: '',
    loaded_pages: 0,
    total_pages: 0,
    total_results: 0,
    results: [],
    error: false,
    loading: false
};

const searchMovieStart = (state, action) => {
    return {
        ...state,
        query: action.payload.query,
        error: false,
        loading: true
    }
}

const searchMovieSuccess = (state, action) => {
    return {
        ...state,
        results: [...action.payload.results.results],
        error: false,
        loading: false,
        total_results: action.payload.results.total_results,
        total_pages: action.payload.results.total_pages,
        loaded_pages: action.payload.results.page
    }
}

const searchMovieFail = (state, action) => {
    return {
        ...state,
        error: true,
        loading: false
    }
}

const searchQueryInput = (state, action) => {
    return {
        ...state,
        query: action.payload.query
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_MOVIE_START: return searchMovieStart(state, action)
        case actionTypes.SEARCH_MOVIE_SUCCESS: return searchMovieSuccess(state, action)
        case actionTypes.SEARCH_MOVIE_FAIL: return searchMovieFail(state, action)
        case actionTypes.SEARCH_QUERY_INPUT: return searchQueryInput(state, action)
        default: return state;
    }
}

export default reducer;
