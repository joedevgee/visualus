import { call, put, takeLatest } from 'redux-saga/effects';
import watchSaga, { fetchPlaces } from './fetchPlaces';
import {
  FETCH_PLACES_FAIL,
  FETCH_PLACES_COMPLETE,
  FETCH_PLACES_BEGIN
} from '../actionType/fetchPlacesActionType';
import GooglePlaces from '../api/googlePlaces';

describe('Fetchplaces saga', () => {
  const action = {
    payload: {
      input: 'test'
    }
  };
  let output = null;
  it('Should watch for fetch request', () => {
    const generator = watchSaga();
    output = generator.next().value;
    expect(output).toEqual(
      takeLatest({
        FETCH_PLACES_BEGIN,
        fetchPlaces
      })
    );
  });
  it('Should call Google Places API', () => {
    const generator = fetchPlaces(action);
    output = generator.next().value;
    expect(output).toEqual(call(GooglePlaces.fetchPlaces, action.payload));
  });
  it('Should return a FETCH_PLACES_COMPLETE action after successful api call', () => {
    const generator = fetchPlaces(action);
    const data = {
      predictions: ['result1', ' result2'],
      status: true
    };
    generator.next();
    output = generator.next(data).value;
    const expectedResult = put({
      type: FETCH_PLACES_COMPLETE,
      data
    });
    expect(output).toEqual(expectedResult);
  });
  it('Should return a FETCH_PLACES_FAIL action', () => {
    const generator = fetchPlaces(action);
    generator.next();
    output = generator.throw('sth is wrong').value;
    const expectedResult = put({
      type: FETCH_PLACES_FAIL,
      error: 'sth is wrong'
    });
    expect(output).toEqual(expectedResult);
  });
});
