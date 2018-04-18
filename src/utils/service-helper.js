import { getRequest } from '../service/hackernews/hackernews-service';

export const getTopStories = async () => await getRequest('/topstories.json');
export const getNewStories = async () => await getRequest('/newstories.json');
export const getBestStories = async () => await getRequest('/beststories.json');
export const getStory = async (item) => await getRequest(`/item/${item}.json`);