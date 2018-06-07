import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import HackerNewsStory from './HackernewsStory';

describe('HackerNewsStory container', () => {
  it('renders a snapshot when not props are set', () => {
    const item = {
      id: 1
    }
    const tree = renderer.create(<HackerNewsStory item={item}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('render a snapshot when props are set and page is loading', () => {
    const item = {
      id: 1
    }
    const tree = renderer.create(<HackerNewsStory item={item} />);
  });
})