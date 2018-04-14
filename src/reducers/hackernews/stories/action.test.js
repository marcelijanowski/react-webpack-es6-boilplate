import {
  actions,
  type
} from './action';
describe('Hackernews stories action', () => {
  describe('get stories', () => {
    it('should return proper action for GET_HACKERNEWS_STORIES_REQUEST', () => {
      expect(actions.getHackernewsStoriesRequest()).toEqual({
        type: type.GET_HACKERNEWS_STORIES_REQUEST
      });
    });
    it('should return proper action for GET_HACKERNEWS_STORIES_REQUEST_CANCEL', () => {
      expect(actions.getHackernewsStoriesRequestCancel()).toEqual({
        type: type.GET_HACKERNEWS_STORIES_REQUEST_CANCEL
      });
    });
    it('should return proper action for GET_HACKERNEWS_STORIES_SUCCESS', () => {
      const stories = [{
        data: 'data'
      }];
      expect(actions.getHackernewsStoriesRequestSuccess(stories)).toEqual({
        payload: stories,
        type: type.GET_HACKERNEWS_STORIES_SUCCESS
      });
    });
    it('should return proper action for GET_HACKERNEWS_STORIES_FAILURE', () => {
      const error = {
        errorCode: 304,
        errorMessage: 'error'
      };
      expect(actions.getHackernewsStoriesRequestFailure(error)).toEqual({
        payload: error,
        type: type.GET_HACKERNEWS_STORIES_FAILURE
      });
    });
  })
});