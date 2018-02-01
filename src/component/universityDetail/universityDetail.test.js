import React from 'react';
import { shallow } from 'enzyme';
import UniversityDetail from './universityDetail';

describe('UniversityDetail component', () => {
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
    shallow(<UniversityDetail university={university} />);
  });
});
