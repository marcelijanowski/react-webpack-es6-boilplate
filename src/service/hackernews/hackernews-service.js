import 'whatwg-fetch';
import { validateStatusCode } from '../../utils/validation';

export async function getTopStories() {

  const endpoint = '/topstories.json';

  const response = fetch(__ROOT_API__ + endpoint);
  if (!validateStatusCode(response)) {
    throw new Error(response.status); 
  }
  return response.json();
}

export async function getStory(storyId) {
  const endpoint = `/item/${storyId}.json`;

  const response = fetch(__ROOT_API__ + endpoint);
  
  if (!validateStatusCode(response)) {
    throw new Error(response.status); 
  }
  return response.json();
}
