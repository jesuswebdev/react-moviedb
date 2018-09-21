import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY } from '../../config';
import * as movieActions from './actions';

export function* fetchTrendingMoviesSaga(action) {
    try {
        let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        const response = yield call(axios.get, url);
        yield put(movieActions.fetchTrendingMoviesSuccess(response.data.results));
    } catch(e) {
        yield put(movieActions.fetchTrendingMoviesFail());
    }
}

export function* fetchMovieDetailsSaga(action) {
    try {
        let url = `https://api.themoviedb.org/3/movie/${action.payload.id}?api_key=${API_KEY}&language=en-US`;
        const response = yield call(axios.get, url);
        yield put(movieActions.fetchMovieDetailsSuccess(response.data))
    } catch(e) {
        yield put(movieActions.fetchMovieDetailsFail())
    }
}
