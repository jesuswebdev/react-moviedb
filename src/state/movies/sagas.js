import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import { API_KEY } from '../../config';
import * as movieActions from './actions';

export function* fetchTrendingMoviesSaga(action) {

    try {
        // https://api.themoviedb.org/3/trending/movie/week?api_key=67138ea12a8946bd6f6af2e1b5203547
        let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        const response = yield call(axios.get, url);
        console.log(response);
        yield put(movieActions.fetchTrendingMoviesSuccess(response.data.results));
    } catch(e) {
        yield put(movieActions.fetchTrendingMoviesFail());
    }
}
