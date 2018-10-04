import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as tvActions from './actions';
import { API_KEY } from '../../config';

export function* fetchTrendingTvSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`
        const {data: {results}} = yield call(axios.get, url);
        yield put(tvActions.fetchTrendingTvSuccess(results));
    } catch(e) {
        console.log(e);
        yield put(tvActions.fetchTrendingTvFail());
    }

}

export function* fetchTopTvSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
        const {data: {results}} = yield call(axios.get, url);
        yield put(tvActions.fetchTopTvSuccess(results));
    } catch(e) {
        yield put(tvActions.fetchTopTvFail())
    }
}

export function* fetchTvDetailsSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/tv/${action.payload.id}?api_key=${API_KEY}&language=en-US`;
        const {data} = yield call(axios.get, url);
        yield put(tvActions.fetchTvDetailsSuccess(data));
    } catch(e) {
        yield put(tvActions.fetchTvDetailsFail());
    }
}

export function* fetchTvCastSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/tv/${action.payload.id}/credits?api_key=${API_KEY}&language=en-US`;
        const {data} = yield call(axios.get, url);
        yield put(tvActions.fetchTvCastSuccess(data));
    } catch(e) {
        yield put(tvActions.fetchTvCastFail());
    }

}
