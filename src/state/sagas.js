import { takeLatest, all } from 'redux-saga/effects';

import * as movieActionTypes from './movies/actionTypes';
import * as searchActionTypes from './search/actionTypes';
import * as tvActionTypes from './tv/actionTypes';

import { fetchTrendingMoviesSaga, fetchMovieDetailsSaga, fetchMovieCastSaga, fetchTopMoviesSaga } from './movies/sagas';
import { searchMovieSaga } from './search/sagas';
import { fetchTrendingTvSaga } from './tv/saga';


function* watchMovies() {
    yield all([
        takeLatest(movieActionTypes.REQUEST_FETCH_TRENDING_MOVIES, fetchTrendingMoviesSaga)  ,
        takeLatest(movieActionTypes.REQUEST_FETCH_MOVIE_DETAILS, fetchMovieDetailsSaga),
        takeLatest(movieActionTypes.REQUEST_FETCH_MOVIE_CAST, fetchMovieCastSaga),
        takeLatest(movieActionTypes.REQUEST_FETCH_TOP_MOVIES, fetchTopMoviesSaga)
    ]);
}

function* watchTv() {
    yield all([
        takeLatest(tvActionTypes.REQUEST_FETCH_TRENDING_TV, fetchTrendingTvSaga)
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
        watchSearch(),
        watchTv()
    ]);
}
