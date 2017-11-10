import React from 'react';
import { shallow } from 'enzyme';
import HeaderBar from './HeaderBar';

it('HeaderBar renders without crashing', () => {
  shallow(<HeaderBar />);
});
