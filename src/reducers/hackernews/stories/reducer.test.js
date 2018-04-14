import { reducer } from './reducer';
import { type as hackernewsType} from './action';

describe('Hackernews stories reducer', () => {
  describe(' GET', () => {
    it('should return default values', () => {
      expect(reducer.isFetching(null,{})).toEqual(null);
      expect(reducer.error(null,{})).toEqual(null);
      expect(reducer.stories(null,{})).toEqual(null);      
    });
    it('should return proper values for request', () => {
      const type = hackernewsType.GET_HACKERNEWS_STORIES_REQUEST
      
      expect(reducer.isFetching(null, { type })).toEqual(true);
      expect(reducer.error(null, { type })).toEqual(null);
      expect(reducer.stories(null, { type })).toEqual(null);
    });
    it('should return proper value for cancel', () => {
      const type = hackernewsType.GET_HACKERNEWS_STORIES_REQUEST_CANCEL;
      
      expect(reducer.isFetching(null, { type })).toEqual(false);
      expect(reducer.error(null, { type })).toEqual(null);
      expect(reducer.stories(null, { type })).toEqual(null);
    });
    it('should return proper value for success', () => {
      const type = hackernewsType.GET_HACKERNEWS_STORIES_SUCCESS;
      const payload = [{data: 'story'}];

      expect(reducer.isFetching(null, { type, payload })).toEqual(false);
      expect(reducer.error(null, { type, payload })).toEqual(null);
      expect(reducer.stories(null, { type, payload })).toEqual(payload);
    });
    it('should return proper values for error', () => {
      const type = hackernewsType.GET_HACKERNEWS_STORIES_FAILURE;
      const payload = {
        errorCode: 123,
        errorMessage: 'error message'
      };

      expect(reducer.isFetching(null, { type, payload })).toEqual(false);
      expect(reducer.error(null, { type, payload })).toEqual(payload);
      expect(reducer.stories(null, { type, payload })).toEqual(null);
    });
  });
  
});