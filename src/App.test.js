import React from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('App', () => {
  it('Should renders without crashing', () => {
    shallow(<App />);
  });
  it('Matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    expect(result).toMatchSnapshot();
  });
});
