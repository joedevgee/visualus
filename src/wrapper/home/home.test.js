import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Home from './home';

describe('Home wrapper', () => {
  it('Home page wrapper renders without crashing', () => {
    shallow(<Home />);
  });
  it('Should match shallow snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Home />);
    expect(result).toMatchSnapshot();
  });
});
