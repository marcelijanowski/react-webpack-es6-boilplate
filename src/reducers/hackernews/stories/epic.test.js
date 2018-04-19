import { getHackernewsStoryEpic } from  './epic';

import * as service from '../../../service/hackernews/hackernews-service';

describe('Hackernews stories epic', () => {
  beforeEach(() => {
    service.get = jest.fn();
  });
  describe('getHackernewsStoryEpic', () => {
    it('should return success on request success', async () => {

    });
    it('should return failure on request failure', async () => {

    });
    it('should cancel request when user cancel', async () => {

    });
  });
});