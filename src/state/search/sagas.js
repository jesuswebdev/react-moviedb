import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as searchActions from './actions';
import { API_KEY } from '../../config';

export function* searchSaga(action) {
    
    try {
        yield put(searchActions.searchStart(action.payload));
        const url = `https://api.themoviedb.org/3/search/${action.payload.option}?api_key=${API_KEY}&language=en-US&query=${action.payload.query}&page=${action.payload.nextPage}${action.payload.option === 'movie' ? '&include_adult=false': ''}`;
        const { data } = yield call(axios.get, url);
        yield put(searchActions.searchSuccess(data))
    } catch(e) {
        yield put(searchActions.searchFail());
    }
}
