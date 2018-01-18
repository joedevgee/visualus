import { fork } from 'redux-saga/effects';
import watchFetchUniversity from './fetchUniversity';

function* rootSaga() {
  yield fork(watchFetchUniversity);
}

export default rootSaga;
