import { put, call } from 'redux-saga/effects';
import axios from 'axios';

import * as peopleActions from './actions';
import { API_KEY } from '../../config';

export function* fetchPopularPeopleSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const {data: {results}} = yield call(axios.get,url);
        yield put(peopleActions.fetchPeopleSuccess(results))
    } catch(e) {
        yield put(peopleActions.fetchPeopleFail())
    }
}

export function* fetchPeopleDetailsSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/person/${action.payload.id}?api_key=${API_KEY}&language=en-US`;
        const {data} = yield call(axios.get, url);
        yield put(peopleActions.fetchPeopleDetailsSuccess(data));
    } catch(e) {
        yield put(peopleActions.fetchPeopleDetailsFail());
    }
}

export function* fetchPeopleCreditsSaga(action) {
    try {
        const url = `https://api.themoviedb.org/3/person/${action.payload.id}/combined_credits?api_key=${API_KEY}&language=en-US`
        const {data: {cast}} = yield call(axios.get, url);
        yield put(peopleActions.fetchPeopleCreditsSuccess(cast));
    } catch(e) {
        yield put(peopleActions.fetchPeopleCreditsFail());
    }
}
