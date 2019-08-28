import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

export const history = createBrowserHistory();
const sagaMiddleware=createSagaMiddleware();

const store = createStore(
    createRootReducer(history),
    compose(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleware
        )
    )
)

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
