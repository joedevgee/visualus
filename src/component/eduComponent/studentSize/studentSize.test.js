import React from 'react';
import { shallow } from 'enzyme';
import StudentSize from './studentSize';

describe('VIsualization for student size', () => {
  const defaultDetail = {
    student: {
      size: {
        '2005': 1
      }
    }
  };
  it('should render withou crashing', () => {
    shallow(<StudentSize detail={defaultDetail} />);
  });
});
