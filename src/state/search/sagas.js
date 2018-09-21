import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as searchActions from './actions';
import { API_KEY } from '../../config';

export function* searchMovieSaga(action) {
    
    try {
        yield put(searchActions.searchMovieStart(action.payload.query));
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${action.payload.query}&page=${action.payload.nextPage}&include_adult=false`;
        const { data } = yield call(axios.get, url);
        yield put(searchActions.searchMovieSuccess(data))
    } catch(e) {
        yield put(searchActions.searchMovieFail());
    }
}
