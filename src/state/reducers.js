import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';

let reducers = {
    movies: movieReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
