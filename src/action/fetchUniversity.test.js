import * as actions from './fetchUniversity';

describe('Fetch university actions', () => {
  it('should create an action to start fetch names', () => {
    const input = 'uc';
    const expectedAction = {
      type: 'FETCH_UNIVERSITY_BEGIN',
      input
    };
    expect(actions.beginFetchUniversity(input)).toEqual(expectedAction);
  });
  it('should create an action to complete fetching names', () => {
    const result = [
      {
        id: 1,
        name: 'University of California, Los Angelas',
        alias: 'UCLA'
      }
    ];
    const expectedAction = {
      type: 'FETCH_UNIVERSITY_COMPLETE',
      result
    };
    expect(actions.completeFetchUniversity(result)).toEqual(expectedAction);
  });
  it('should create an action to fail fetching names', () => {
    const error = 'error';
    const expectedAction = {
      type: 'FETCH_UNIVERSITY_FAIL',
      error
    };
    expect(actions.failFetchUniversity(error)).toEqual(expectedAction);
  });
});
