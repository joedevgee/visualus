import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import ConnectedCard, { Card } from './card';

describe('UniversityCard component with single data', () => {
  const university = {
    id: 1,
    name: 'Boston University',
    alias: 'BU',
    city: 'Boston',
    state: 'MA',
    website: 'www.bu.edu',
    admissionRate: 0.35,
    annualCost: 96000,
    studentSize: 1000
  };
  const selectUniversity = jest.fn();
  let wrapper;
  it('should render without crashing', () => {
    shallow(
      <Card university={university} selectUniversity={selectUniversity} />
    );
  });
  it('should match snapshot', () => {
    wrapper = shallow(
      <Card university={university} selectUniversity={selectUniversity} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('when clicked, selectUniversity should be called', () => {
    wrapper = shallow(
      <Card university={university} selectUniversity={selectUniversity} />
    );
    expect(selectUniversity.mock.calls.length).toBe(0);
    wrapper.simulate('click');
    expect(selectUniversity.mock.calls.length).toBe(1);
  });
  it('when clicked, should navigate to detail', () => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/education']}>
        <ConnectedCard
          university={university}
          selectUniversity={selectUniversity}
        />
      </MemoryRouter>
    );
    wrapper.simulate('click');
    const history = wrapper.find(Card).props().history;
    expect(history.location.pathname).toEqual(`/education/${university.id}`);
  });
});
