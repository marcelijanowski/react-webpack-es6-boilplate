import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import HackernewsStoryRow from './HackernewsStoryRow';

describe('HackernewsStoryRow container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<HackernewsStoryRow/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})