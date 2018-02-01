import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('UniversityCard component with single data', () => {
  const university = {
    id: 1,
    name: 'Boston University',
    alias: 'BU',
    city: 'Boston',
    state: 'MA',
    website: 'www.bu.edu',
    admissionRate: 0.35,
    annualCost: 96000,
    studentSize: 1000
  };
  let wrapper;
  it('should render without crashing', () => {
    shallow(<Card university={university} />);
  });
  it('should match snapshot', () => {
    wrapper = shallow(<Card university={university} />);
    expect(wrapper).toMatchSnapshot();
  });
});
