import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY } from '../../../config';
import * as movieActions from '../actions';
import * as movieActionTypes from '../actionTypes';

function* fetchTrendingMoviesSaga(action) {

    try {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        const response = yield call(axios.get, url);
        console.log(response);
        yield put(movieActions.fetchTrendingMoviesSuccess(response.data.results));
    } catch(e) {
        yield put(movieActions.fetchTrendingMoviesFail());
    }
}

function* moviesSaga() {
    yield takeLatest(movieActionTypes.REQUEST_FETCH_TRENDING_MOVIES, fetchTrendingMoviesSaga);
}

export {
    moviesSaga
};
