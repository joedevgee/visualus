import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import University from './university';

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
    metaData: {
      total: 0,
      per_page: 20,
      page: 0
    },
    onInputValueChange: jest.fn(),
    onPageChange: jest.fn(),
    onUniversitySelected: jest.fn()
  };
  const props = { ...defaultProps, ...setupProps };
  const wrapper = shallow(
    <University
      loading={props.loading}
      valueList={props.valueList}
      metaData={props.metaData}
      onInputValueChange={props.onInputValueChange}
      onPageChange={props.onPageChange}
      onUniversitySelected={props.onUniversitySelected}
    />
  );
  const enzymeWrapper = mount(
    <MemoryRouter>
      <University {...props} />
    </MemoryRouter>
  );
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
  it('Should fire onInputValueChange when entered search value', () => {
    const { enzymeWrapper, props } = setup();
    const input = enzymeWrapper.find('Search');
    expect(props.onInputValueChange).not.toHaveBeenCalled();
    input.props().onSearch('test');
    expect(props.onInputValueChange).toHaveBeenCalledTimes(1);
  });
});
