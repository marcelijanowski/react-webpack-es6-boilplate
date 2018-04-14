import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { routerReducer } from 'react-router-redux';

import { reducer as hackernewsReducer } from './hackernews/stories/reducer';
import { epic as hackernewsStoryEpic } from './hackernews/stories/epic';

export const rootReducer = combineReducers({
  routing: routerReducer,
  hackernewsStory: hackernewsReducer
});

export const rootEpic = combineEpics(
  hackernewsStoryEpic
);
