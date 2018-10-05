import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faFire, faHome, faTv, faFilm, faUser, faSearch, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

import rootReducer from './state/reducers';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

library.add(faStar, faFire, faHome, faTv, faFilm, faUser, faSearch, faTicketAlt);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
