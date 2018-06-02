import { validateStatusCode } from '../../utils/validation';

export const get = async (url) => {
  let response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!validateStatusCode(response)) {
    const res = await response.json();
    throw new Error(res.errorMessage);
  }
  return response.json();
};
export const post = async (data) => {
  const { url } = data;
  delete data.url;
  const params = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  let response = await fetch(url, params);
  if (!validateStatusCode(response)) {
    const res = await response.json();
    throw new Error(res.errorMessage);
  }
  
  return response.json();
};
export const put = async (data) => {
  const { url } = data;
  delete data.url;
  const params = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  let response = await fetch(url, params);
  if (!validateStatusCode(response)) {
    const res = await response.json();
    throw new Error(res.errorMessage);
  }
  
  return response.json();
};
export const del = async (url) => {
  const params = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  let response = await fetch(url, params);
  if (!validateStatusCode(response)) {
    const res = await response.json();
    throw new Error(res.errorMessage);
  }
  return response.status;
};