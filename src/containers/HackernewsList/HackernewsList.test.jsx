import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import { HackernewsList } from './HackernewsList';
import { mockRef, mountComponent } from '../../../test/testHelper';

describe('HackernewsList container', () => {
  let getHackernewsStoriesRequest;
  beforeEach(() => {
    getHackernewsStoriesRequest = jasmine.createSpy('getHackernewsStoriesRequest');
  });
  it('renders a snapshot', () => {
    const tree = renderer.create(<HackernewsList 
      type="topStory"
      getHackernewsStoriesRequest={getHackernewsStoriesRequest}
      hackernewsStory={{
        error: null,
        isFetching: false,
        stories: [{
          id: 1
        }]
      }}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})