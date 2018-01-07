import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow, render } from 'enzyme';
import Education from './education';

describe('Education wrapper', () => {
  it('Education page wrapper should render without crashing', () => {
    shallow(<Education />);
  });
  it('Should match shallow snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Education />);
    expect(result).toMatchSnapshot();
  });
});
