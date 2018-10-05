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

export const fetchTopTv = () => {
    return {
        type: tvActionTypes.REQUEST_FETCH_TOP_TV
    }
}

export const fetchTopTvSuccess = (series) => {
    return {
        type: tvActionTypes.FETCH_TOP_TV_SUCCESS,
        payload: {
            series
        }
    }
}

export const fetchTopTvFail = () => {
    return {
        type: tvActionTypes.FETCH_TOP_TV_FAIL
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

export const fetchTvCast = (id) => {
    return {
        type: tvActionTypes.REQUEST_FETCH_TV_CAST,
        payload: {
            id
        }
    }
}

export const fetchTvCastSuccess = (data) => {
    return {
        type: tvActionTypes.FETCH_TV_CAST_SUCCESS,
        payload: {
            cast: data.cast,
            id: data.id
        }
    }
}

export const fetchTvCastFail = () => {
    return {
        type: tvActionTypes.FETCH_TV_CAST_FAIL
    }
}

export const onClickShowFullCast = () => {
    return {
        type: tvActionTypes.ON_CLICK_SHOW_FULL_CAST
    }
}

export const clearTvCast = () => {
    return {
        type: tvActionTypes.CLEAR_TV_CAST
    }
}

export const selectTab = (tab) => {
    return {
        type: tvActionTypes.SELECT_TAB,
        payload: tab
    }
}
