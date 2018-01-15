import * as actions from './fetchUniversity';
import * as actionTypes from '../actionType/fetchUniversityActionType';

describe('Fetch university actions', () => {
  it('should create an action to start fetch names', () => {
    const payload = {
      input: 'uc'
    };
    const expectedAction = {
      type: actionTypes.FETCH_UNIVERSITY_NAME_BEGIN,
      payload
    };
    expect(actions.fetchUniversityBegin(payload)).toEqual(expectedAction);
  });
  it('should create an action to complete fetching names', () => {
    const data = [
      {
        id: 1,
        name: 'University of California, Los Angelas',
        alias: 'UCLA'
      }
    ];
    const expectedAction = {
      type: actionTypes.FETCH_UNIVERSITY_NAME_COMPLETE,
      data
    };
    expect(actions.fetchUniversityComplete(data)).toEqual(expectedAction);
  });
  it('should create an action to fail fetching names', () => {
    const error = 'error';
    const expectedAction = {
      type: actionTypes.FETCH_UNIVERSITY_NAME_FAIL,
      error
    };
    expect(actions.fetchUniversityFail(error)).toEqual(expectedAction);
  });
});
