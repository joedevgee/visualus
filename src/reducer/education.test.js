import reducer from './education';

describe('Education reducer', () => {
  it('Should return default state', () => {
    const expectedState = {
      loading: false,
      keyword: '',
      universityList: [],
      metaData: {
        total: 0,
        per_page: 20,
        page: 0
      }
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
  it('Should set the selectedId when user make the selection', () => {
    const action = {
      type: 'SET_SELECTED_UNIVERSITY',
      id: 123
    };
    const state = reducer(undefined, action);
    expect(state.selectedId).toEqual(action.id);
  });
  it('Should update selected university with detail in the university list', () => {
    const originalState = {
      universityList: [
        {
          id: 1,
          name: 'first'
        },
        {
          id: 2,
          name: 'second'
        }
      ]
    };
    const uDetail = {
      id: 2,
      detail: {
        info: 'detail info'
      }
    };
    const action = {
      type: 'FETCH_UNIVERSITY_DETAIL_COMPLETE',
      result: uDetail
    };
    const resultState = reducer(originalState, action);
    expect(resultState.universityList[1].detail.info).toEqual('detail info');
  });
});
