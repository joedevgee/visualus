import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Root from './root';

describe('Router root', () => {
  const mockStore = configureStore();
  const store = mockStore({}, {});
  it('renders without crashing', () => {
    shallow(<Root store={store} />);
  });
});
