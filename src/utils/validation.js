export function validateStatusCode(response) {
  if (response.status >= 200 && response.status < 300) {
    return true;
  } else {
    return false;
  }
}