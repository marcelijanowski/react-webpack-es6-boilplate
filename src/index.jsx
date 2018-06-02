import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import {
  rootEpic, 
  rootReducer
} from './reducers';

import HomePage from './pages/home-page/home-page';

const history = createHistory();

const middleware = routerMiddleware(history);
const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  applyMiddleware(middleware, epicMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={HomePage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
)
