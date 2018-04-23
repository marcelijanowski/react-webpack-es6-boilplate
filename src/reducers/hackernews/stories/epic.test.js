import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import { ActionsObservable } from 'redux-observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/toArray';

import { getHackernewsStoryEpic } from './epic';
import { type, actions } from './action';



describe('Hackernews stories epic', () => {
  describe('getHackernewsStoryEpic', () => {
    beforeEach(() => {
    });

    afterEach(() => {
      nock.cleanAll();
    });
    it('should return success on request success',  async () => {
      const mock = require('../../../../data/hackernews/topstories.json');

      nock(__ROOT_API__)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/topstories.json')
        .reply(200, mock);
        
        const action$ = ActionsObservable.of(
          {type: type.GET_HACKERNEWS_STORIES_REQUEST}
        );
        const expectedAction = [actions.getHackernewsStoriesRequestSuccess(mock)]
        await getHackernewsStoryEpic(action$)
          .toArray()
          .toPromise()
          .then(actualOutputActions => {
             expect(actualOutputActions).toEqual(expectedAction)
        });
    });
    it('should return failure on request failure', async () => {
      nock(__ROOT_API__)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/topstories.json')
        .reply(404);
        
        const action$ = ActionsObservable.of(
          {type: type.GET_HACKERNEWS_STORIES_REQUEST}
        );
        const expectedAction = [actions.getHackernewsStoriesRequestFailure("Some error occured")]
        await getHackernewsStoryEpic(action$)
          .toArray()
          .toPromise()
          .then(actualOutputActions => {
             expect(actualOutputActions).toEqual(expectedAction)
        });
    });
    xit('should cancel request when user cancel', async () => {

    });
  });
});