import * as actions from './fetchPlaces';
import {
  FETCH_PLACES_BEGIN,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_FAIL
} from '../actionType/fetchPlacesActionType';

describe('Fetch places autocomplete', () => {
  it('should create an action to start fetching', () => {
    const payload = {
      input: 'bos',
      components: 'country:us',
      types: '(cities)'
    };
    const expectedAction = {
      type: FETCH_PLACES_BEGIN,
      payload
    };
    expect(actions.fetchBegin(payload)).toEqual(expectedAction);
  });
  it('should create an action to complete fetching', () => {
    const response = {
      predictions: [1, 2],
      status: 'OK'
    };
    const expectedAction = {
      type: FETCH_PLACES_COMPLETE,
      response
    };
    expect(actions.fetchComplete(response)).toEqual(expectedAction);
  });
  it('should create an action to fail fetching', () => {
    const error = 'Error';
    const expectedAction = {
      type: FETCH_PLACES_FAIL,
      error
    };
    expect(actions.fetchFail(error)).toEqual(expectedAction);
  });
});
