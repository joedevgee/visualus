import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import Education from './education';
import { beginFetchUniversity } from '../../action/fetchUniversity';
import { setSelectUniversity } from '../../action/selectUniversity';

const setup = (setupProps = {}) => {
  const store = configureStore()({
    Education: {
      loading: false,
      metaData: {
        total: 0,
        per_page: 20,
        page: 0
      },
      keyword: '',

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
    expect(store.dispatch).toHaveBeenCalledWith(
      beginFetchUniversity('test', 0, 20)
    );
  });
  it('Should dispatch set select university action', () => {
    const { wrapper, store } = setup();
    wrapper.props().onUniversitySelected(1);
    expect(store.dispatch).toHaveBeenCalledWith(setSelectUniversity(1));
  });
});
