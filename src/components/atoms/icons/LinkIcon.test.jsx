import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import LinkIcon from './LinkIcon';

describe('LinkIcon container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<LinkIcon/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})