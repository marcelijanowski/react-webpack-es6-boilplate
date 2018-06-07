import React, { PureComponent } from 'react'
import renderer from 'react-test-renderer';

import Loader from './Loader';
import { mockRef, mountComponent } from '../../../../test/testHelper';

describe('HackernewsList container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<Loader text="Data is loading..." />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})