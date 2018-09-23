import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as tvActions from './actions';
import { API_KEY } from '../../config';

export function* fetchTrendingTvSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}`
        const {data: {results}} = yield call(axios.get, url);
        console.log(results);
        yield put(tvActions.fetchTrendingTvSuccess(results))
    } catch(e) {
        yield put(tvActions.fetchTrendingTvFail());
    }

}
