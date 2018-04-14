import { combineReducers } from 'redux';

import { type as hackernewsStoryType } from './action';

export const reducer = {
  isFetching: (state = false, action) => {
    switch (action.type) {
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_REQUEST:
        return true;
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_REQUEST_CANCEL:
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_SUCCESS:
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_FAILURE:
        return false;
      default:
        return state;
    }
  },
  error: (state = null, action) => {
    switch (action.type) {
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_FAILURE:
        return action.payload;
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_REQUEST_CANCEL:
        return null;
      default:
        return state;
    }
  },
  stories: (state = null, action) => {
    switch (action.type) {
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_SUCCESS:
        return action.payload;
      case hackernewsStoryType.GET_HACKERNEWS_STORIES_REQUEST_CANCEL:
        return null;
      default:
        return state;
    }
  }
}
export default combineReducers(reducer);
