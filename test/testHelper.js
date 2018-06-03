import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";

import { mount, shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

export const mountComponent = (Component, props) => {
  const enzymeWrapper = mount(Component);

  enzymeWrapper.setProps({...props});

  return enzymeWrapper;
};

export const shallowRenderWithState = (Component, Instance) => {
  return shallow(Component).find(Instance).dive();
};

export const mockRef = (elementType) => {
  return {
    current: document.createElement(elementType)
  };
};