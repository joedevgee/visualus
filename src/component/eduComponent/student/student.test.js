import React from 'react';
import { shallow } from 'enzyme';
import Student from './student';

describe('Student Component', () => {
  const defaultStudentDetail = {
    size: {
      '2005': 1
    },
    gradStudents: {
      '2005': 1
    }
  };
  it('should render without crashing', () => {
    shallow(<Student student={defaultStudentDetail} />);
  });
});
