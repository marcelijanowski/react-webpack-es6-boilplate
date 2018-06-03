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
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})