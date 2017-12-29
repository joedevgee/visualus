import { fork } from 'redux-saga/effects';
import rootSaga from './index';
import fetchPlacesSaga from './fetchPlaces';

describe('Root Saga', () => {
  const generator = rootSaga();
  it('Should watch for fetchplaces saga', () => {
    expect(generator.next().value).toEqual(fork(fetchPlacesSaga));
  });
});
