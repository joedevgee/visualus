import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Education from './education';
import University from '../../component/university/university';
import UniversityDetail from '../../component/universityDetail/universityDetail';

describe('Education wrapper', () => {
  const defaultProps = {
    loading: false,
    universityList: [],
    onInputValueChange: jest.fn()
  };
  let wrapper;
  it('default should render universityList component', () => {
    wrapper = shallow(
      <MemoryRouter>
        <Education
          loading={defaultProps.loading}
          universityList={defaultProps.universityList}
          onInputValueChange={defaultProps.onInputValueChange}
        />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
