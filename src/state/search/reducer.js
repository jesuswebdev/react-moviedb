import * as actionTypes from "./actionTypes";

const initialState = {
  query: "",
  loaded_pages: 0,
  total_pages: 0,
  total_results: 0,
  results: [],
  error: false,
  loading: false,
  selected_option: "movie",
  finished_searching: false
};

const searchStart = (state, action) => {
  return {
    ...state,
    query: action.payload.query,
    selected_option: action.payload.option,
    error: false,
    loading: true,
    results: [],
    finished_searching: false
  };
};

const searchSuccess = (state, action) => {
  return {
    ...state,
    results: [...action.payload.results.results],
    error: false,
    loading: false,
    total_results: action.payload.results.total_results,
    total_pages: action.payload.results.total_pages,
    loaded_pages: action.payload.results.page,
    finished_searching: true
  };
};

const searchFail = (state, action) => {
  return {
    ...state,
    error: true,
    loading: false,
    finished_searching: true
  };
};

const searchQueryInput = (state, action) => {
  return {
    ...state,
    query: action.payload.query
  };
};

const selectOption = (state, action) => {
  if (state.selected_option === action.payload.option) {
    return state;
  }

  return {
    ...state,
    selected_option: action.payload.option
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      return searchStart(state, action);
    case actionTypes.SEARCH_SUCCESS:
      return searchSuccess(state, action);
    case actionTypes.SEARCH_FAIL:
      return searchFail(state, action);
    case actionTypes.SEARCH_QUERY_INPUT:
      return searchQueryInput(state, action);
    case actionTypes.SELECT_OPTION:
      return selectOption(state, action);
    default:
      return state;
  }
};

export default reducer;
