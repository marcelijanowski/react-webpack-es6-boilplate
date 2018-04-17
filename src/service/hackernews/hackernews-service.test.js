import {
  getRequest
} from './hackernews-service';
import nock from 'nock'
import * as story from '../../../data/hackernews/story.json';

describe('Hackernews service ', () => {
  beforeEach(() => {
    nock.disableNetConnect();
  });
  afterEach(() => {
    nock.cleanAll();
  });
  describe('get request', () => {
    it('should return proper version on success call', async () => {
      const mock = require('../../../data/hackernews/story.json');
      nock(__ROOT_API__)
        .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
        .get('/item/21.json')
        .reply(200, mock);

      const response = await getRequest('/item/21.json');
      expect(response).toEqual(mock);
    });
    it('should return error code on wrong call', async() => {
        nock(__ROOT_API__)
          .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
          .get('/item/2.json')
          .reply(404, null);

      try {
        await getRequest('/item/2.json');
      } catch (error) {
        await expect(error).toEqual(new Error("Some error occured"));
      }
    });
  });


});


