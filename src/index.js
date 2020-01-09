import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import store from "./redux/state";



export let rerenderAllApp = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderAllApp(store);
store.subscribe(rerenderAllApp);

// store._rerenderAllApp(store.getState());
// store._subscribe(rerenderAllApp);

serviceWorker.unregister();
