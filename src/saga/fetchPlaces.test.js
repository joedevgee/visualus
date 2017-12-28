import sinon from 'sinon';
import { call } from 'redux-saga/effects';
import GooglePlaces from '../api/googlePlaces';
import watchSaga, { fetchPlaces } from './fetchPlaces';

describe('Fetchplaces saga', () => {
  it('Should call Google Places API', () => {
    const action = {
      payload: {
        input: 'test'
      }
    };
    const generator = fetchPlaces(action);
    expect(generator.next().value).toEqual(
      call(GooglePlaces.fetchPlaces, action.payload)
    );
  });
});
