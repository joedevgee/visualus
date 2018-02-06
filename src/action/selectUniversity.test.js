import { setSelectUniversity } from './selectUniversity';

describe('Set selected university action', () => {
  it('should create an action to set the selected university id', () => {
    const id = 123456;
    const expectedAction = {
      type: 'SET_SELECTED_UNIVERSITY',
      id: id
    };
    expect(setSelectUniversity(id)).toEqual(expectedAction);
  });
});
