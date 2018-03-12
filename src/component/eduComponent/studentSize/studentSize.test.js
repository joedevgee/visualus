import React from 'react';
import { shallow } from 'enzyme';
import { Switch } from 'antd';
import StudentSize from './studentSize';

describe('VIsualization for student size', () => {
  let wrapper;
  const defaultProps = {
    undergradSize: {
      '2005': 1
    },
    gradSize: {
      '2005': 1
    }
  };
  it('should render withou crashing', () => {
    shallow(<StudentSize {...defaultProps} />);
  });
  it('Should only render switch when both undergrad and grad data is present', () => {
    const emptyGrad = {
      undergradSize: {
        '2005': 1
      },
      gradSize: {}
    };
    wrapper = shallow(<StudentSize {...emptyGrad} />);
    expect(wrapper.find(Switch)).toHaveLength(0);
  });
  it('should switch to show gradsize', () => {
    wrapper = shallow(<StudentSize {...defaultProps} />);
    wrapper.find(Switch).simulate('change', false);
    expect(wrapper.state('showUndergrad')).toBeFalsy();
  });
});
