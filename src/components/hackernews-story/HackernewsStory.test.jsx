import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import HackerNewsStory from './HackernewsStory';

describe('HackerNewsStory container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<HackerNewsStory/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})