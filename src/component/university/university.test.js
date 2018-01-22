import React from 'react';
import { shallow, mount } from 'enzyme';
import University from './university';
import { wrap } from 'module';

const setup = (setupProps = {}) => {
  const defaultProps = {
    loading: false,
    valueList: [
      {
        id: 1,
        name: 'Boston University',
        alias: 'BU'
      }
    ],
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
  const enzymeWrapper = mount(<University {...props} />);
  return {
    props,
    wrapper,
    enzymeWrapper
  };
};

describe('University component', () => {
  it('Should render without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('Should fire onInputValueChange', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('AutoComplete');
    expect(props.onInputValueChange).not.toHaveBeenCalled();
    input.props().onChange('test');
    expect(props.onInputValueChange).toHaveBeenCalledTimes(1);
  });
});
