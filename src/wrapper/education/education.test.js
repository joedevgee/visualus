import React from 'react';
import { shallow } from 'enzyme';
import Education from './education';

const setup = (setupProps = {}) => {
  const defaultProps = {
    loading: false,
    universityList: [],
    onInputValueChange: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <Education
      loading={props.loading}
      universityList={props.universityList}
      onInputValueChange={props.onInputValueChange}
    />
  );
  return {
    props,
    wrapper
  };
};

describe('Education wrapper', () => {
  it('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
