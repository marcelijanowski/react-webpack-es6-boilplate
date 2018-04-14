import React, { Component } from 'react'
import renderer from 'react-test-renderer';

import App from './AppContrainer';

describe('App container', () => {
  it('renders a snapshot', () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
})