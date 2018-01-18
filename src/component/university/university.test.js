import React from 'react';
import { shallow } from 'enzyme';
import University from './university';

const setup = (setupProps = {}) => {
  const defaultProps = {
    loading: false,
    valueList: [],
    onInputValueChange: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <University
      loading={props.loading}
      valueList={props.valueList}
      onInputValueChange={props.onInputValueChange}
    />
  );
  return {
    props,
    wrapper
  };
};

describe('University component', () => {
  it('Should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
