import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';

import { getHackernewsStoryEpic } from './epic';
import { type, actions } from './action';
import * as serviceHelper from '../../../utils/service-helper';

describe('Hackernews stories epic', () => {
  describe('getHackernewsStoryEpic', () => {
    it('should return success on request success',  async () => {
      const mock = require('../../../../data/hackernews/topstories.json');

      serviceHelper.getTopStories = jest.fn().mockImplementationOnce(() => Promise.resolve(mock));
        
      const action$ = ActionsObservable.of({
        type: type.GET_HACKERNEWS_STORIES_REQUEST
      });
      const expectedAction = [actions.getHackernewsStoriesRequestSuccess(mock)]
      await getHackernewsStoryEpic(action$)
        .toArray()
        .toPromise()
        .then(actualOutputActions => {
            expect(actualOutputActions).toEqual(expectedAction)
      });
    });
    it('should return failure on request failure', async () => {
      serviceHelper.getTopStories = jest.fn().mockImplementationOnce(() => Promise.reject(new Error('Some error occured')));
        const action$ = ActionsObservable.of({
          type: type.GET_HACKERNEWS_STORIES_REQUEST
        });
        const expectedAction = [actions.getHackernewsStoriesRequestFailure("Some error occured")]
        await getHackernewsStoryEpic(action$)
          .toArray()
          .toPromise()
          .then(actualOutputActions => {
             expect(actualOutputActions).toEqual(expectedAction)
        });
    });
    it('should cancel request when user cancel', async () => {
      const mock = require('../../../../data/hackernews/topstories.json');

      serviceHelper.getTopStories = jest.fn().mockImplementationOnce(() => Promise.resolve(mock));
        
      const action$ = ActionsObservable.of({
        type: type.GET_HACKERNEWS_STORIES_REQUEST
      }, {
        type: type.GET_HACKERNEWS_STORIES_REQUEST_CANCEL
      });

      const expectedAction = []
        await getHackernewsStoryEpic(action$)
          .toArray()
          .toPromise()
          .then(actualOutputActions => {
             expect(actualOutputActions).toEqual(expectedAction)
        });
    });
  });
});