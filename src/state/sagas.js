import { takeLatest, all } from 'redux-saga/effects';

import * as movieActionTypes from './movies/actionTypes';

import { fetchTrendingMoviesSaga, fetchMovieDetailsSaga } from './movies/sagas';

export function* watchMovies() {
    yield all([
        takeLatest(movieActionTypes.REQUEST_FETCH_TRENDING_MOVIES, fetchTrendingMoviesSaga)  ,
        takeLatest(movieActionTypes.REQUEST_FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga) 
    ]);
}
