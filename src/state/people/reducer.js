import * as actionTypes from './actionTypes';

const initialState = {
    people: [],
    people_error: false,
    people_details: null,
    people_details_error: false,
    people_details_id: null
}

const fetchPeopleSuccess = (state, action) => {
    return {
        ...state,
        people: [...action.payload.people],
        people_error: false
    }
}

const fetchPeopleFail = (state, action) => {
    return {
        ...state,
        people_error: true
    }
}

const fetchPeopleDetailsSuccess = (state, action) => {
    return {
        ...state,
        people_details: action.payload.details,
        people_details_id: action.payload.details.id,
        people_details_error: false
    }
}

const fetchPeopleDetailsFail = (state, action) => {
    return {
        ...state,
        people_details_error: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POPULAR_PEOPLE_SUCCESS: return fetchPeopleSuccess(state, action)
        case actionTypes.FETCH_POPULAR_PEOPLE_FAIL: return fetchPeopleFail(state, action)
        case actionTypes.FETCH_PEOPLE_DETAILS_SUCCESS: return fetchPeopleDetailsSuccess(state, action)
        case actionTypes.FETCH_PEOPLE_DETAILS_FAIL: return fetchPeopleDetailsFail(state, action)
        default: return state;
    }
}

export default reducer;