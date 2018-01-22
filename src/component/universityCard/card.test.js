import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('UniversityCard component', () => {
  const university = {
    id: 1,
    name: 'Boston University',
    alias: 'BU'
  };
  it('should render without crashing', () => {
    shallow(<Card university={university} />);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<Card university={university} />);
    expect(wrapper).toMatchSnapshot();
  });
});
