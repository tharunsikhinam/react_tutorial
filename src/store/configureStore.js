import {createStore, applyMiddleware,compose} from 'redux';
import { combineReducers } from 'redux'

import reduxImutableStateVariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk';
import {createLogger}from 'redux-logger';
import userReducer from "../reducers/userReducers"
import appReducer from "../reducers/appReducers"
import { composeWithDevTools } from 'redux-devtools-extension';

// combine reducers

const allReducers = combineReducers({
   users: userReducer,
   app: appReducer,
});


//takes in two parameters to create store, one is initial state.. here you can set some state values that you want
//pre built into the store
//one can add middlewares as well . done using applymiddleware (mw1(), mw2()..)

// acces environment variables using process.env.<variable-name>
// in dev mode
export default function configureStore(initialState)
{
    return createStore( allReducers, initialState, composeWithDevTools(applyMiddleware(thunk,createLogger(),
        reduxImutableStateVariant())));
}

// in prod mode
export function configureStoreProd(intitialState){
    return createStore( userReducer, intitialState, compose(applyMiddleware(thunk,createLogger(),
        reduxImutableStateVariant())));
}