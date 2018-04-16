import {
  getStory,
  getTopStories
} from './hackernews-service';
import nock from 'nock'
import * as story from '../../../data/hackernews/story.json';

describe('Hackernews service ', () => {
  beforeEach(() => {
    // nock.disableNetConnect();
  });
  afterEach(() => {
    nock.cleanAll();
    nock.restore();
  })
  describe('get story', () => {
    it('should return proper version on success call', async() => {
      const story = nock(__ROOT_API__)
                        

      const respose = await getStory(123);
      // expect(respose).toEqual({});
    });
    // it('should return error code on wrong call', async() => {
    //   nock('https://hacker-news.firebaseio.com/v0')
    //     .get('/item/.json')
    //     .reply(400,{});
      
    //   const respose = await getStory(400);
      
    //   expect(respose).toThrowError({});
    // });
  });


})