import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import { favorites } from '.reducers/favorites'

import { zamatoReducer, mapReducer, userReducer, errorReducer } from '../reducers';

const reducers = combineReducers({
    zamatoFromStore: zamatoReducer,
    mapFromStore: mapReducer,
    user: userReducer,
    errors: errorReducer,
    // favorites: favorites
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducers, initialState, compose( applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;