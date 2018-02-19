// @flow
import type { UniversityList, University, Id } from '../type/university';

export const getSelectedUniversity = (
  list: UniversityList,
  selectedId?: Id
) => {
  if (selectedId) {
    return list.find((u: University) => u.id === selectedId);
  } else {
    return null;
  }
};
