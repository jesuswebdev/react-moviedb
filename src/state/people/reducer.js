import * as actionTypes from './actionTypes';

const initialState = {
    people: [],
    people_error: false,
    people_details: null,
    people_details_error: false,
    people_details_id: null
}

const fetchPeopleSuccess = (state, action) => {
    console.log(action);
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POPULAR_PEOPLE_SUCCESS: return fetchPeopleSuccess(state, action)
        case actionTypes.FETCH_POPULAR_PEOPLE_FAIL: return fetchPeopleFail(state, action)
        default: return state;
    }
}

export default reducer;
