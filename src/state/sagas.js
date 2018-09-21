import { takeLatest, all } from 'redux-saga/effects';

import * as movieActionTypes from './movies/actionTypes';
import * as searchActionTypes from './search/actionTypes';

import { fetchTrendingMoviesSaga, fetchMovieDetailsSaga } from './movies/sagas';
import { searchMovieSaga } from './search/sagas';


function* watchMovies() {
    yield all([
        takeLatest(movieActionTypes.REQUEST_FETCH_TRENDING_MOVIES, fetchTrendingMoviesSaga)  ,
        takeLatest(movieActionTypes.REQUEST_FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga) 
    ]);
}

function* watchSearch() {
    yield all([
        takeLatest(searchActionTypes.REQUEST_SEARCH_MOVIE, searchMovieSaga)
    ]);
}

export default function* rootSaga() {
    yield all([
        watchMovies(),
        watchSearch()
    ]);
}
