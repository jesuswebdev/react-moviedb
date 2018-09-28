import { combineReducers } from 'redux';
import movieReducer from './movies/reducer';
import searchReducer from './search/reducer';
import tvReducer from './tv/reducer';
import peopleReducer from './people/reducer';

let reducers = {
    movies: movieReducer,
    search: searchReducer,
    tv: tvReducer,
    people: peopleReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
