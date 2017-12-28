import reducer from './fetchPlaces';
import {
  FETCH_PLACES_BEGIN,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_FAIL
} from '../actionType/fetchPlacesActionType';

describe('fetch places reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      predictions: [],
      isLoading: false,
      status: '',
      error: ''
    };
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('should return not loading from begin fetching', () => {
    const expectedState = {
      predictions: [],
      isLoading: true,
      status: '',
      error: ''
    };
    const newState = reducer(undefined, {
      type: FETCH_PLACES_BEGIN,
      payload: 'payload'
    });
    expect(newState).toEqual(expectedState);
  });
  it('should return updated state from successful fetching', () => {
    const expectedState = {
      predictions: [1, 2, 3],
      isLoading: false,
      status: 'ok',
      error: ''
    };
    const newState = reducer(undefined, {
      type: FETCH_PLACES_COMPLETE,
      response: {
        predictions: [1, 2, 3],
        isLoading: false,
        status: 'ok'
      }
    });
    expect(newState).toEqual(expectedState);
  });
  it('should return updated state from failed fetching', () => {
    const expectedState = {
      predictions: [],
      isLoading: false,
      status: '',
      error: 'Error occured'
    };
    const newState = reducer(undefined, {
      type: FETCH_PLACES_FAIL,
      error: 'Error occured'
    });
    expect(newState).toEqual(expectedState);
  });
});
