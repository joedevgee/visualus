import { fork } from 'redux-saga/effects';
import rootSaga from './index';
import fetchUniversity from './fetchUniversity';

describe('Root Saga', () => {
  const generator = rootSaga();
  it('Should watch for fetchplaces saga', () => {
    expect(generator.next().value).toEqual(fork(fetchUniversity));
  });
});
