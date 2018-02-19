import { call, takeLatest, put } from 'redux-saga/effects';
import { universityList, universityDetail } from '../api/eduData';

export function* fetchUniversity(action) {
  try {
    const result = yield call(universityList, action.input);
    yield put({ type: 'FETCH_UNIVERSITY_COMPLETE', result: result });
  } catch (error) {
    yield put({ type: 'FETCH_UNIVERSITY_FAIL', error: error });
  }
}

export function* fetchUniversityDetail(action) {
  try {
    const result = yield call(universityDetail, action.id);
    yield put({ type: 'FETCH_UNIVERSITY_DETAIL_COMPLETE', result: result });
  } catch (error) {
    yield put({ type: 'FETCH_UNIVERSITY_DETAIL_FAIL', error: error });
  }
}

export default function* watchFetchUniversity() {
  yield [
    takeLatest('FETCH_UNIVERSITY_BEGIN', fetchUniversity),
    takeLatest('SET_SELECTED_UNIVERSITY', fetchUniversityDetail)
  ];
}
