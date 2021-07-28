import * as actionTypes from "./actionTypes";

const initialState = {
  people: [],
  people_error: false,
  people_details: null,
  people_details_error: false,
  people_details_id: null,
  credits: [],
  credits_error: false
};

const fetchPeopleSuccess = (state, action) => {
  return {
    ...state,
    people: [...action.payload.people],
    people_error: false
  };
};

const fetchPeopleFail = (state, action) => {
  return {
    ...state,
    people_error: true
  };
};

const fetchPeopleDetailsSuccess = (state, action) => {
  return {
    ...state,
    people_details: action.payload.details,
    people_details_id: action.payload.details.id,
    people_details_error: false
  };
};

const fetchPeopleDetailsFail = (state, action) => {
  return {
    ...state,
    people_details_error: true
  };
};

const fetchPeopleCreditsSuccess = (state, action) => {
  return {
    ...state,
    credits: [...action.payload.credits],
    credits_error: false
  };
};

const fetchPeopleCreditsFail = (state, action) => {
  return {
    ...state,
    credits_error: true
  };
};

const clearPeopleCredits = (state, action) => {
  return {
    ...state,
    credits: []
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POPULAR_PEOPLE_SUCCESS:
      return fetchPeopleSuccess(state, action);
    case actionTypes.FETCH_POPULAR_PEOPLE_FAIL:
      return fetchPeopleFail(state, action);
    case actionTypes.FETCH_PEOPLE_DETAILS_SUCCESS:
      return fetchPeopleDetailsSuccess(state, action);
    case actionTypes.FETCH_PEOPLE_DETAILS_FAIL:
      return fetchPeopleDetailsFail(state, action);
    case actionTypes.FETCH_PEOPLE_CREDITS_SUCCESS:
      return fetchPeopleCreditsSuccess(state, action);
    case actionTypes.FETCH_PEOPLE_CREDITS_FAIL:
      return fetchPeopleCreditsFail(state, action);
    case actionTypes.CLEAR_PEOPLE_CREDITS:
      return clearPeopleCredits(state, action);
    default:
      return state;
  }
};

export default reducer;
