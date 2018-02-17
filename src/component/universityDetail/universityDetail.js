// @flow
import React from 'react';
import type { University } from '../../type/university';

import './universityDetail.css';

type Props = {
  +university: University
};

const UniversityDetail = ({ university }: Props) => {
  return (
    <div>
      <h1>{university.name}</h1>
      <h2>{university.detail.student.size[2010]}</h2>
    </div>
  );
};

export default UniversityDetail;
