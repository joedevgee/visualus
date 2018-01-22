// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { UniversityListState, UniversityActions } from './university';

export type ReduxInitAction = { type: '@@INIT' };
export type State = {
  Education: UniversityListState
};
export type Action = UniversityActions;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;
