import reducer from './fetchUniversity';

describe('Fetch university reducer', () => {
  it('Should return default state', () => {
    const expectedState = {
      loading: false,
      universityList: []
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('Should return loading = true from begin fetching', () => {
    const action = {
      type: 'FETCH_UNIVERSITY_BEGIN',
      input: 'random'
    };
    const state = reducer(undefined, action);
    expect(state.loading).toEqual(true);
  });
  it('Should return state with university list after complete fetching', () => {
    const action = {
      type: 'FETCH_UNIVERSITY_COMPLETE',
      result: [
        {
          id: 1,
          name: 'University of California, Los Angelas',
          alias: 'UCLA'
        }
      ]
    };
    const state = reducer(undefined, action);
    const expectedState = {
      loading: false,
      universityList: [
        {
          id: 1,
          name: 'University of California, Los Angelas',
          alias: 'UCLA'
        }
      ]
    };
    expect(state).toEqual(expectedState);
  });
  it('Should return loading = false when fetch fail', () => {
    const action = {
      type: 'FETCH_UNIVERSITY_FAIL',
      error: 'error occured'
    };
    const state = reducer(undefined, action);
    expect(state.loading).toEqual(false);
  });
});
