import * as movieActions from './actionTypes';

const trendingMoviesInitialState = {
    trending: [],
    error: false
};

const reducer = (state = trendingMoviesInitialState, action) => {
    switch (action.type) {
        case movieActions.REQUEST_FETCH_TRENDING_MOVIES: {
            console.log('woot',state);
            return state;
        }

        case movieActions.FETCH_TRENDING_MOVIES_SUCCESS: {
            return {
                ...state,
                trending: [...action.payload.movies]
            }
        }

        case movieActions.FETCH_TRENDING_MOVIES_FAIL: {
            return state;
        }

        default: return state;
    }
}

export default reducer;
