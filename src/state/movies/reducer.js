import * as moviesActions from './actionTypes';

const moviesInitialState = {
    trending: [],
    trending_error: false,
    movie_details: null,
    movie_details_error: false
};

const reducer = (state = moviesInitialState, action) => {
    switch (action.type) {
        case moviesActions.FETCH_TRENDING_MOVIES_SUCCESS: {
            return {
                ...state,
                trending: [...action.payload.movies],
                trending_error: false
            }
        }

        case moviesActions.FETCH_TRENDING_MOVIES_FAIL: {
            return {
                ...state,
                trending_error: true
            }
        }

        case moviesActions.FETCH_MOVIE_DETAILS_SUCCESS: {
            return {
                ...state,
                movie_details: action.payload.movieDetails,
                movie_details_error: false
            }
        }

        case moviesActions.FETCH_MOVIE_DETAILS_FAIL: {
            return {
                ...state,
                movie_details_error: true
            }
        }

        default: return state;
    }
}

export default reducer;
