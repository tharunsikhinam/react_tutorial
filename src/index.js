import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import './index.css';
import App from './App';
import AppRouter from "./AppRouter"
// initialize store before rendering application
// load state from localStroage if it exists
var store = configureStore({key: "VALUE"})
ReactDOM.render(
    <Provider store={store}>
        <AppRouter store={store}/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

