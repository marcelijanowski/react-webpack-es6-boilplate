import {
  getTopStories,
  getNewStories,
  getBestStories,
  getStory
} from './service-helper';

import * as service from  '../service/httpClient/httpClient';

describe('Service helper', () => {
  it('should call getTopStories with proper params', async () => {
    service.get = jest.fn().mockImplementationOnce(() => Promise.resolve({}));

    expect(await getTopStories()).toEqual({});
    expect(service.get).toBeCalledWith(`${__ROOT_API__}/topstories.json`);
  });
  it('should call getNewStories with proper params', async () => {
    service.get = jest.fn().mockImplementationOnce(() => Promise.resolve({}));

    expect(await getNewStories()).toEqual({});
    expect(service.get).toBeCalledWith(`${__ROOT_API__}/newstories.json`);
  });
  it('should call getBestStories with proper params', async () => {
    service.get = jest.fn().mockImplementationOnce(() => Promise.resolve({}));

    expect(await getBestStories()).toEqual({});
    expect(service.get).toBeCalledWith(`${__ROOT_API__}/beststories.json`);
  });
  it('should call getStory with proper params', async () => {
    service.get = jest.fn().mockImplementationOnce(() => Promise.resolve({}));

    expect(await getStory(1)).toEqual({});
    expect(service.get).toBeCalledWith(`${__ROOT_API__}/item/1.json`);
  }); 
});