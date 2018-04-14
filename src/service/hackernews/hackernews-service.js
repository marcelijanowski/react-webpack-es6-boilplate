import 'whatwg-fetch';
import { validateStatusCode } from '../../utils/validation';

export async function getStories(type) {

  const enpoint = '/topstories';

  const result = fetch(__ROOT_API__ + endpoint);
  if (!validateStatusCode(response)) {
    throw new Error(response.status); 
  }
  return response.json();
}
