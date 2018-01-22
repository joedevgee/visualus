import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import Education from './education';
import { beginFetchUniversity } from '../../action/fetchUniversity';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    Education: {
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
    }
  });
  store.dispatch = jest.fn();
  const wrapper = shallow(<Education store={store} />);
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
  it('Should dispatch begin fetch action', () => {
    const { wrapper, store } = setup();
    wrapper.props().onInputValueChange('test');
    expect(store.dispatch).toHaveBeenCalledWith(beginFetchUniversity('test'));
  });
});
