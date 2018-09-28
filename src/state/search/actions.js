import * as actionTypes from './actionTypes';

export const requestSearch = (query, option, nextPage) => {
    return {
        type: actionTypes.REQUEST_SEARCH,
        payload: {
            query,
            option,
            nextPage
        }
    }
}

export const searchStart = (search) => {
    return {
        type: actionTypes.SEARCH_START,
        payload: {
            query: search.query,
            option: search.option
        }
    }
}

export const searchSuccess = (results) => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        payload: {
            results
        }
    }
}

export const searchFail = () => {
    return {
        type: actionTypes.SEARCH_FAIL
    }
}

export const searchQueryInput = (query) => {
    return {
        type: actionTypes.SEARCH_QUERY_INPUT,
        payload: {
            query
        }
    }
}

export const selectOption = (option) => {
    return {
        type: actionTypes.SELECT_OPTION,
        payload: {
            option
        }
    }
}

