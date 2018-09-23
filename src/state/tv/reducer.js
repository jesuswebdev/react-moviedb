import * as tvActions from './actionTypes';

const tvInitialState = {
    trending: [],
    trending_error: false
}

const fetchTvSuccess = (state, action) => {
    return {
        ...state,
        trending: [...action.payload.series],
        trending_error: false
    }
}

const fetchTvFail = (state, action) => {
    return {
        ...state,
        trending_error: true
    }
}

const reducer = (state = tvInitialState, action) => {
    switch (action.type) {
        case tvActions.FETCH_TRENDING_TV_SUCCESS: return fetchTvSuccess(state, action)
        case tvActions.FETCH_TRENDING_TV_FAIL: return fetchTvFail(state, action)
        default: return state
    }
}

export default reducer;
