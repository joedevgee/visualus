// @flow

// State
export type Id = number;
export type Name = string;
export type Alias = string;
export type Loading = boolean;

export type University = {
  +id: Id,
  +name: Name,
  +alias: Alias
};

export type UniversityList = Array<University>;

export type UniversityListState = {
  +universityList: UniversityList,
  +loading: Loading
};

// Action

type BeginFetchUniversity = {
  type: 'FETCH_UNIVERSITY_BEGIN',
  input: string
};
type CompleteFetchUniversity = {
  type: 'FETCH_UNIVERSITY_COMPLETE',
  result: UniversityList
};
type FailFetchUniversity = {
  type: 'FETCH_UNIVERSITY_FAIL',
  error: string
};

export type UniversityActions =
  | BeginFetchUniversity
  | CompleteFetchUniversity
  | FailFetchUniversity;
