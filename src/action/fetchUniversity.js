// @flow
import type { UniversityActions, UniversityList } from '../type/university';

export const beginFetchUniversity = (
  input: string,
  page: Number,
  pageSize: Number
): UniversityActions => {
  return {
    type: 'FETCH_UNIVERSITY_BEGIN',
    input: input,
    page: page,
    pageSize: pageSize
  };
};

export const completeFetchUniversity = (
  result: UniversityList,
  meta: Object
): UniversityActions => {
  return { type: 'FETCH_UNIVERSITY_COMPLETE', result: result, meta: meta };
};

export const failFetchUniversity = (error: string): UniversityActions => {
  return { type: 'FETCH_UNIVERSITY_FAIL', error: error };
};
