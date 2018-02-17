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

export type UniversityDetail = {
  completion: { [year: number]: number },
  cost: {
    inState: { [year: number]: number },
    outState: { [year: number]: number }
  },
  student: {
    size: { [year: number]: number },
    gradStudents: { [year: number]: number },
    menShare: { [year: number]: number },
    womenShare: { [year: number]: number },
    nonResidentAlien: { [year: number]: number },
    black: { [year: number]: number },
    asian: { [year: number]: number },
    white: { [year: number]: number },
    avgIncome: { [year: number]: number }
  },
  admission: {
    satScore: { [year: number]: number },
    rate: { [year: number]: number }
  },
  aid: {
    loanPrincipal: { [year: number]: number },
    numberOfStudentsOnLoan: { [year: number]: number }
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
