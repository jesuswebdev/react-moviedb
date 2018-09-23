import * as tvActions from './actionTypes';

const tvInitialState = {
    trending: [],
    trending_error: false,
    serie_details: null,
    serie_details_error: false
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

const fetchTvDetailsSuccess = (state, action) => {
    return {
        ...state,
        serie_details: action.payload.details,
        serie_details_error: false
    }
}

const fetchTvDetailsFail = (state, action) => {
    return {
        ...state,
        serie_details_error: true
    }
}

const reducer = (state = tvInitialState, action) => {
    switch (action.type) {
        case tvActions.FETCH_TRENDING_TV_SUCCESS: return fetchTvSuccess(state, action)
        case tvActions.FETCH_TRENDING_TV_FAIL: return fetchTvFail(state, action)
        case tvActions.FETCH_TV_DETAILS_SUCCESS: return fetchTvDetailsSuccess(state, action)
        case tvActions.FETCH_TV_DETAILS_FAIL: return fetchTvDetailsFail(state, action)
        default: return state
    }
}

export default reducer;
