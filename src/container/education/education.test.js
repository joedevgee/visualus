import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import EducationContainer from './education';
import { beginFetchUniversity } from '../../action/fetchUniversity';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    loading: false,
    universityList: [
      {
        id: 1,
        name: 'First Unviersity',
        alias: 'FU'
      },
      {
        id: 2,
        name: 'Second University',
        alias: 'SU'
      },
      {
        id: 3,
        name: 'Third University',
        alias: 'TU'
      }
    ]
  });
  const wrapper = shallow(<EducationContainer store={store} />);
  return {
    store,
    wrapper
  };
};

describe('Education container', () => {
  it('Should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
