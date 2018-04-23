import 'whatwg-fetch';

import { validateStatusCode } from '../../utils/validation';

export async function getRequest(url) {
  
  const response = await fetch(__ROOT_API__ + url);
  
  if (!validateStatusCode(response)) {
    throw new Error('Some error occured'); 
  }
  
  return await response.json();
};
