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
});
