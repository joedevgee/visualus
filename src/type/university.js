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
export type StudentDetail = {
  size: { [year: string]: number },
  gradStudents: { [year: string]: number },
  menShare: { [year: string]: number },
  womenShare: { [year: string]: number },
  nonResidentAlien: { [year: string]: number },
  black: { [year: string]: number },
  asian: { [year: string]: number },
  white: { [year: string]: number },
  avgIncome: { [year: string]: number }
};

export type UniversityDetail = {
  completion: { [year: string]: number },
  cost: {
    inState: { [year: string]: number },
    outState: { [year: string]: number }
  },
  student: StudentDetail,
  admission: {
    satScore: { [year: string]: number },
    rate: { [year: string]: number }
  },
  aid: {
    loanPrincipal: { [year: string]: number },
    numberOfStudentsOnLoan: { [year: string]: number }
  }
};

export type University = {
  +id: Id,
  +name: Name,
  +alias: Alias,
  +city: City,
  +state: State,
  +website: Website,
  +admissionRate: AdmissionRate,
  +annualCost: AnnualCost,
  +studentSize: StudentSize,
  +detail: UniversityDetail
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
type CompleteFetchUniversityDetail = {
  type: 'FETCH_UNIVERSITY_DETAIL_COMPLETE',
  result: {
    id: Id,
    detail: UniversityDetail
  }
};
type FailFetchUniversityDetail = {
  type: 'FETCH_UNIVERSITY_DETAIL_FAIL',
  error: string
};

export type UniversityActions =
  | BeginFetchUniversity
  | CompleteFetchUniversity
  | FailFetchUniversity
  | SetSelectedUniversity
  | CompleteFetchUniversityDetail
  | FailFetchUniversityDetail;
