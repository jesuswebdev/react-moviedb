import * as tvActionTypes from './actionTypes';

export const fetchTrendingTv = () => {
    return {
        type: tvActionTypes.REQUEST_FETCH_TRENDING_TV
    }
}

export const fetchTrendingTvSuccess = (series) => {
    return {
        type: tvActionTypes.FETCH_TRENDING_TV_SUCCESS,
        payload: {
            series
        }
    }
}

export const fetchTrendingTvFail = () => {
    return {
        type: tvActionTypes.FETCH_TRENDING_TV_FAIL
    }
}

export const fetchTvDetails = (id) => {
    return {
        type: tvActionTypes.REQUEST_FETCH_TV_DETAILS,
        payload: {
            id
        }
    }
}

export const fetchTvDetailsSuccess = (details) => {
    return {
        type: tvActionTypes.FETCH_TV_DETAILS_SUCCESS,
        payload: {
            details
        }
    }
}

export const fetchTvDetailsFail = () => {
    return {
        type: tvActionTypes.FETCH_TV_DETAILS_FAIL
    }
}
