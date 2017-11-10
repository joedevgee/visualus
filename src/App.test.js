import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { lstat } from 'fs';

it('App renders without crashing', () => {
  shallow(<App />);
});
