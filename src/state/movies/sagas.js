import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY } from '../../config';
import * as movieActions from './actions';

export function* fetchTrendingMoviesSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        const {data: {results} = {}} = yield call(axios.get, url);
        yield put(movieActions.fetchTrendingMoviesSuccess(results));
    } catch(e) {
        yield put(movieActions.fetchTrendingMoviesFail());
    }
}

export function* fetchMovieDetailsSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/movie/${action.payload.id}?api_key=${API_KEY}&language=en-US`;
        const {data} = yield call(axios.get, url);
        yield put(movieActions.fetchMovieDetailsSuccess(data))
    } catch(e) {
        yield put(movieActions.fetchMovieDetailsFail())
    }
}

export function* fetchMovieCastSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/movie/${action.payload.movie_id}/credits?api_key=${API_KEY}`;
        const {data: {cast} = {}} = yield call(axios.get, url);
        yield put(movieActions.fetchMovieCastSuccess(cast));
    } catch(e) {
        yield put(movieActions.fetcMovieCastFail());
    }
}
