import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import ErrorMessage from './ErrorMessage';
import { mockRef, mountComponent } from '../../../../test/testHelper';

describe('HackernewsList container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<ErrorMessage text="There are some problems with loading stories..." />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})