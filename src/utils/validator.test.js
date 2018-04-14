import { validateStatusCode } from './validation';

describe('Validator utilify', () => {
  it('should return true when response status is 200', () => {
    expect(validateStatusCode({status: 200})).toBe(true);
  });
  it('should return true when response status is between 200 and 300', () => {
    expect(validateStatusCode({status: 202})).toBe(true);
  });
  it('should return false where status is 300', () => {
    expect(validateStatusCode({state: 300})).toBe(false);
  });
  it('should return false for status greater than 300', () => {
    expect(validateStatusCode({status: 301})).toBe(false);
  });
});