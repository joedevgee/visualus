import React from 'react';
import { shallow } from 'enzyme';
import University from './university';

describe('University component', () => {
  it('Should render without crashing', () => {
    shallow(<University />);
  });
});
