import React from 'react';
import { shallow } from 'enzyme';
import UniversityDetail from './universityDetail';

describe('UniversityDetail component', () => {
  const university = {
    id: 1,
    detail: {
      student: {
        size: {
          '2010': 1
        }
      }
    }
  };
  let wrapper;
  it('should render without crashing', () => {
    shallow(<UniversityDetail university={university} />);
  });
  it('should render no detail message when u detail is not available', () => {
    const u = {
      id: 1
    };
    wrapper = shallow(<UniversityDetail university={u} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render StudentSize when detail is availabel', () => {
    wrapper = shallow(<UniversityDetail university={university} />);
    expect(wrapper).toMatchSnapshot();
  });
});
