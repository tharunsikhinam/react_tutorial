import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";
import './index.css';
import App from './App';
import AppRouter from "./AppRouter"
// initialize store before rendering application
// load state from localStroage if it exists
let initialState ={ }
if(localStorage.getItem("state")!=null){
    initialState = JSON.parse(localStorage.getItem("state"))
}
var store = configureStore(initialState)
store.subscribe(()=>{
    console.log("STORE CHANGED")
    const serializableState = JSON.stringify(store.getState());
    localStorage.setItem('state',serializableState);
});

function refreshState(){
     localStorage.removeItem("state")
}

ReactDOM.render(
    <Provider store={store}>
        <AppRouter store={store}/>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

