import * as tvActions from "./actionTypes";

const tvInitialState = {
  trending: [],
  trending_error: false,
  top: [],
  top_error: false,
  serie_details: null,
  serie_details_error: false,
  cast: [],
  is_full_cast: null,
  cast_id: null,
  cast_error: false,
  selected_tab: "trending"
};

const fetchTrendingTvSuccess = (state, action) => {
  return {
    ...state,
    trending: [...action.payload.series],
    trending_error: false
  };
};

const fetchTrendingTvFail = (state, action) => {
  return {
    ...state,
    trending_error: true
  };
};

const fetchTopTvSuccess = (state, action) => {
  return {
    ...state,
    top: action.payload.series,
    top_error: false
  };
};

const fetchTopTvFail = (state, action) => {
  return {
    ...state,
    top_error: true
  };
};

const fetchTvDetailsSuccess = (state, action) => {
  return {
    ...state,
    serie_details: action.payload.details,
    serie_details_error: false
  };
};

const fetchTvDetailsFail = (state, action) => {
  return {
    ...state,
    serie_details_error: true
  };
};

const fetchTvCastSuccess = (state, action) => {
  return {
    ...state,
    cast: action.payload.cast,
    is_full_cast: action.payload.cast.length > 10 ? false : true,
    cast_id: action.payload.id,
    cast_error: false
  };
};

const fetchTvCastFail = (state, action) => {
  return {
    ...state,
    cast_error: true
  };
};

const onClickShowFullCast = (state, action) => {
  return {
    ...state,
    is_full_cast: true
  };
};

const clearTvCast = (state, action) => {
  return {
    ...state,
    cast: []
  };
};

const selectTab = (state, action) => {
  if (state.selected_tab === action.payload) {
    return state;
  }

  return {
    ...state,
    selected_tab: action.payload
  };
};

const reducer = (state = tvInitialState, action) => {
  switch (action.type) {
    case tvActions.FETCH_TRENDING_TV_SUCCESS:
      return fetchTrendingTvSuccess(state, action);
    case tvActions.FETCH_TRENDING_TV_FAIL:
      return fetchTrendingTvFail(state, action);
    case tvActions.FETCH_TOP_TV_SUCCESS:
      return fetchTopTvSuccess(state, action);
    case tvActions.FETCH_TOP_TV_FAIL:
      return fetchTopTvFail(state, action);
    case tvActions.FETCH_TV_DETAILS_SUCCESS:
      return fetchTvDetailsSuccess(state, action);
    case tvActions.FETCH_TV_DETAILS_FAIL:
      return fetchTvDetailsFail(state, action);
    case tvActions.FETCH_TV_CAST_SUCCESS:
      return fetchTvCastSuccess(state, action);
    case tvActions.FETCH_TV_CAST_FAIL:
      return fetchTvCastFail(state, action);
    case tvActions.ON_CLICK_SHOW_FULL_CAST:
      return onClickShowFullCast(state, action);
    case tvActions.CLEAR_TV_CAST:
      return clearTvCast(state, action);
    case tvActions.SELECT_TAB:
      return selectTab(state, action);
    default:
      return state;
  }
};

export default reducer;
