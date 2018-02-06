// @flow

import type { Id, UniversityActions } from '../type/university';

export const setSelectUniversity = (id: Id): UniversityActions => {
  return {
    type: 'SET_SELECTED_UNIVERSITY',
    id: id
  };
};
