import {
  getTopStories,
  getNewStories,
  getBestStories,
  getStory
} from './service-helper';

import * as service from '../service/hackernews/hackernews-service';

describe('Service helper', () => {
  beforeEach(() => {
    service.getRequest = jest.fn();
  });
  it('should call getTopStories with proper params', async () => {
    await getTopStories();
    expect(service.getRequest).toBeCalledWith('/topstories.json');
  });
  it('should call getNewStories with proper params', async () => {
    await getNewStories();
    expect(service.getRequest).toBeCalledWith('/newstories.json');
  });
  it('should call getBestStories with proper params', async () => {
    await getBestStories();
    expect(service.getRequest).toBeCalledWith('/beststories.json');
  });
  it('should call getStory with proper params', async () => {
    await getStory(1);
    expect(service.getRequest).toBeCalledWith('/item/1.json');
  }); 
});