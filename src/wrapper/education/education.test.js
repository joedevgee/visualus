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
    metaData: {
      total: 0,
      per_page: 20,
      page: 0
    },
    universityList: [],
    onPageChange: jest.fn(),
    onInputValueChange: jest.fn()
  };
  let wrapper;
  it('should render universityList component', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/education']}>
        <Education
          loading={defaultProps.loading}
          universityList={defaultProps.universityList}
          metaData={defaultProps.metaData}
          onInputValueChange={defaultProps.onInputValueChange}
          onPageChange={defaultProps.onPageChange}
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
          metaData={defaultProps.metaData}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(University)).toHaveLength(0);
    expect(wrapper.find(UniversityDetail)).toHaveLength(0);
  });
  it('should render universitydetail component when selected', () => {
    const uList = [
      {
        id: 1,
        name: 'Test University',
        alias: 'Test Alias',
        city: 'Test city',
        state: 'Test state',
        website: 'Test website',
        admissionRate: 0,
        annualCost: 0,
        studentSize: 0,
        detail: {
          student: {
            size: {
              '2010': 1
            }
          }
        }
      }
    ];
    wrapper = mount(
      <MemoryRouter initialEntries={['/education/123']}>
        <Education
          loading={defaultProps.loading}
          universityList={uList}
          onInputValueChange={defaultProps.onInputValueChange}
          selectedUniversityId={1}
          metaData={defaultProps.metaData}
        />
      </MemoryRouter>
    );
    expect(wrapper.find(University)).toHaveLength(0);
    expect(wrapper.find(UniversityDetail)).toHaveLength(1);
  });
});
