import { get } from '../service/httpClient/httpClient';

export const getTopStories = async () => await get(`${__ROOT_API__}/topstories.json`);
export const getNewStories = async () => await get(`${__ROOT_API__}/newstories.json`);
export const getBestStories = async () => await get(`${__ROOT_API__}/beststories.json`);
export const getStory = async (item) => await get(`${__ROOT_API__}/item/${item}.json`);