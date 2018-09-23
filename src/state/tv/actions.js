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
