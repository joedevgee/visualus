import React from 'react';
import { shallow, mount } from 'enzyme';
import { StaticRouter, MemoryRouter, BrowserRouter } from 'react-router-dom';
import Education from './education';
import University from '../../component/university/university';
import UniversityDetail from '../../component/universityDetail/universityDetail';
import universityDetail from '../../component/universityDetail/universityDetail';

describe('Education wrapper', () => {
  const defaultProps = {
    loading: false,
    universityList: [],
    onInputValueChange: jest.fn(),
    onUniversitySelected: jest.fn()
  };
  let wrapper;
  it('should render universityList component', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/education']}>
        <Education
          loading={defaultProps.loading}
          universityList={defaultProps.universityList}
          onInputValueChange={defaultProps.onInputValueChange}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(University)).toHaveLength(1);
    expect(wrapper.find(universityDetail)).toHaveLength(0);
  });
  it('should not render universitydetail component when there is no selected', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/education/detail']}>
        <Education
          loading={defaultProps.loading}
          universityList={defaultProps.universityList}
          onInputValueChange={defaultProps.onInputValueChange}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(University)).toHaveLength(0);
    expect(wrapper.find(UniversityDetail)).toHaveLength(0);
  });
  it('should not render universitydetail component when selected', () => {
    const selectedU = {};
    wrapper = mount(
      <MemoryRouter initialEntries={['/education/detail']}>
        <Education
          loading={defaultProps.loading}
          universityList={defaultProps.universityList}
          onInputValueChange={defaultProps.onInputValueChange}
          selectedUniversity={selectedU}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(University)).toHaveLength(0);
    expect(wrapper.find(UniversityDetail)).toHaveLength(1);
  });
});
