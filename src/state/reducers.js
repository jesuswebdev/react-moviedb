import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';
import searchReducer from './search/reducer';
import tvReducer from './tv/reducer';

let reducers = {
    movies: movieReducer,
    search: searchReducer,
    tv: tvReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
