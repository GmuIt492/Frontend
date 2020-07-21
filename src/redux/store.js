import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//util/reducer redux
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import uiReducer from './reducers/uiReducer';

//initialize
const initialState = {};
const middleware = [thunk];
console.log(middleware);

//combine reducer files
const reducers = combineReducers({
    user: userReducer,
    data: dataReducer,
    UI: uiReducer
});

//create store: requires redux devtools!!
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const store = createStore(
    reducers,
    initialState,
    composeSetup(applyMiddleware(...middleware))
);

export default store;