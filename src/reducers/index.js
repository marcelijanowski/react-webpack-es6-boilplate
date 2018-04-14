import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

export const rootReducer = combineReducers({
  routing: routerReducer
});

export const rootEpic = combineEpics();
