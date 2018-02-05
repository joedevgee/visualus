import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import Home from './wrapper/home/home';
import Education from './wrapper/education/education';

describe('App', () => {
  const store = configureStore();
  it('Should renders without crashing', () => {
    shallow(<App />);
  });
  it('Matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<App />);
    expect(result).toMatchSnapshot();
  });
  it('should render home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    expect(wrapper.find(Education)).toHaveLength(0);
  });
});
