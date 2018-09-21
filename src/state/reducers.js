import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';
import searchReducer from './search/reducer';

let reducers = {
    movies: movieReducer,
    search: searchReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
