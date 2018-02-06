// @flow

// State
export type Id = number;
export type Name = string;
export type Alias = string;
export type City = string;
export type State = string;
export type Website = string;
export type AdmissionRate = number;
export type AnnualCost = number;
export type StudentSize = number;
export type Loading = boolean;

export type University = {
  +id: Id,
  +name: Name,
  +alias: Alias,
  +city: City,
  +state: State,
  +website: Website,
  +admissionRate: AdmissionRate,
  +annualCost: AnnualCost,
  +studentSize: StudentSize
};

export type UniversityList = Array<University>;

export type UniversityListState = {
  +universityList: UniversityList,
  +loading: Loading,
  +selectedId?: Id
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
type SetSelectedUniversity = {
  type: 'SET_SELECTED_UNIVERSITY',
  id: Id
};

export type UniversityActions =
  | BeginFetchUniversity
  | CompleteFetchUniversity
  | FailFetchUniversity
  | SetSelectedUniversity;
