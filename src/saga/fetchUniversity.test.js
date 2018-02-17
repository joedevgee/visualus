import { call, put, takeLatest } from 'redux-saga/effects';
import watchFetchUniversity, {
  fetchUniversity,
  fetchUniversityDetail
} from './fetchUniversity';
import { universityList, universityDetail } from '../api/eduData';

describe('FetchUniversity saga', () => {
  const action = { input: 'uc' };
  let output = null;
  it('Should watch for fetch university request', () => {
    const generator = watchFetchUniversity();
    output = generator.next().value;
    expect(output).toEqual([
      takeLatest('FETCH_UNIVERSITY_BEGIN', fetchUniversity),
      takeLatest('SET_SELECTED_UNIVERSITY', fetchUniversityDetail)
    ]);
  });
  it('Should call education API when fetching u-list', () => {
    const generator = fetchUniversity(action);
    output = generator.next().value;
    expect(output).toEqual(call(universityList, action.input));
  });
  it('Should return a FETCH_UNIVERSITY_COMPLETE action after success api call', () => {
    const generator = fetchUniversity(action);
    const result = [
      {
        id: 1,
        name: 'name',
        alias: 'alias'
      }
    ];
    generator.next();
    output = generator.next(result).value;
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_COMPLETE',
      result
    });
    expect(output).toEqual(expectedResult);
  });
  it('Should return a fetch_university_name_fail action after api get error response', () => {
    const generator = fetchUniversity(action);
    generator.next();
    output = generator.throw('API returned error').value;
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_FAIL',
      error: 'API returned error'
    });
    expect(output).toEqual(expectedResult);
  });
});

describe('FetchUniversityDetail Sage', () => {
  const action = { id: 1 };
  let output = null;
  let generator = null;
  it('should call EDU API when fetching university detail', () => {
    generator = fetchUniversityDetail(action);
    output = generator.next().value;
    expect(output).toEqual(call(universityDetail, action.id));
  });
  it('should return a fetch university detail complete action after success api call', () => {
    generator = fetchUniversityDetail(action);
    const result = {
      data: 'some data'
    };
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_DETAIL_COMPLETE',
      result: result
    });
    generator.next();
    output = generator.next(result).value;
    expect(output).toEqual(expectedResult);
  });
  it('should return a fetch university detail fail action after api returned error', () => {
    generator = fetchUniversityDetail(action);
    generator.next();
    output = generator.throw('API returned error').value;
    const expectedResult = put({
      type: 'FETCH_UNIVERSITY_DETAIL_FAIL',
      error: 'API returned error'
    });
    expect(output).toEqual(expectedResult);
  });
});
