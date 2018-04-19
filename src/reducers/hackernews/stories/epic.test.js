import { getHackernewsStoryEpic } from  './epic';
import nock from 'nock';

import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { default as storiesEpic } from './epic';
import { type, actions } from './action';

const epicMiddleware = createEpicMiddleware(storiesEpic);
const mockStore = configureMockStore([epicMiddleware]);

describe('Hackernews stories epic', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });
  afterEach(() => {
    nock.cleanAll();
    epicMiddleware.replaceEpic(storiesEpic);
  });

  describe('getHackernewsStoryEpic', () => {
    it('should return success on request success', async () => {
      store.dispatch({
        type: type.GET_HACKERNEWS_STORIES_REQUEST
      });
    });
    it('should return failure on request failure', async () => {

    });
    it('should cancel request when user cancel', async () => {

    });
  });
});