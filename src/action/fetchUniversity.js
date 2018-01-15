// @flow

import {
  FETCH_UNIVERSITY_NAME_BEGIN,
  FETCH_UNIVERSITY_NAME_COMPLETE,
  FETCH_UNIVERSITY_NAME_FAIL
} from '../actionType/fetchUniversityActionType';

type BeginFetchUniversityNames = {
  type: string,
  payload: {
    input: string
  }
};
type CompleteFetchUniversityNames = {
  type: string,
  data: Array<{
    id: number,
    name: string,
    alias: string
  }>
};
type FailFetchUniversity = {
  type: string,
  error: string
};

export type fetchUniversityAction =
  | BeginFetchUniversityNames
  | CompleteFetchUniversityNames
  | FailFetchUniversity;

export function fetchUniversityBegin(payload: {
  input: string
}): BeginFetchUniversityNames {
  return {
    type: FETCH_UNIVERSITY_NAME_BEGIN,
    payload
  };
}

export function fetchUniversityComplete(
  data: Array<{
    id: number,
    name: string,
    alias: string
  }>
): CompleteFetchUniversityNames {
  return {
    type: FETCH_UNIVERSITY_NAME_COMPLETE,
    data
  };
}

export function fetchUniversityFail(error: string): FailFetchUniversity {
  return {
    type: FETCH_UNIVERSITY_NAME_FAIL,
    error
  };
}
