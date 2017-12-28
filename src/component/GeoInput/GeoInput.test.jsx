import React from 'react';
import { shallow } from 'enzyme';
import Geoinput from './GeoInput';

describe('Geoinput', () => {
  it('should render without crashing', () => {
    shallow(<Geoinput />);
  });
});
