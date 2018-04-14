const GET_HACKERNEWS_STORIES_REQUEST = '@hackernews-stories/GET_HACKERNEWS_STORIES_REQUEST';
const getHackernewsStoriesRequest = () => ({
  type: GET_HACKERNEWS_STORIES_REQUEST
});

const GET_HACKERNEWS_STORIES_REQUEST_CANCEL = '@hackernews-stories/GET_HACKERNEWS_STORIES_REQUEST_CANCEL';
const getHackernewsStoriesRequestCancel = () => ({
  type: GET_HACKERNEWS_STORIES_REQUEST_CANCEL
});

const GET_HACKERNEWS_STORIES_SUCCESS = '@hackernews-stories/GET_HACKERNEWS_STORIES_SUCCESS';
const getHackernewsStoriesRequestSuccess = (payload) => ({
  type: GET_HACKERNEWS_STORIES_SUCCESS,
  payload
});

const GET_HACKERNEWS_STORIES_FAILURE = '@hackernews-stories/GET_HACKERNEWS_STORIES_FAILURE';
const getHackernewsStoriesRequestFailure = (payload) => ({
  type: GET_HACKERNEWS_STORIES_FAILURE,
  payload
});

export const actions = {
  getHackernewsStoriesRequest,
  getHackernewsStoriesRequestCancel,
  getHackernewsStoriesRequestSuccess,
  getHackernewsStoriesRequestFailure
}

export const type = {
  GET_HACKERNEWS_STORIES_REQUEST,
  GET_HACKERNEWS_STORIES_REQUEST_CANCEL,
  GET_HACKERNEWS_STORIES_SUCCESS,
  GET_HACKERNEWS_STORIES_FAILURE
};