// @flow
import React from 'react';
import type { University } from '../../type/university';

import './universityDetail.css';

type Props = {
  +university: University
};

const UniversityDetail = ({ university }: Props) => {
  return <h1>{university.name}</h1>;
};

export default UniversityDetail;
