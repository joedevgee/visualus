import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';

describe('Header', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
