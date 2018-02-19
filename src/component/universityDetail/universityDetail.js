// @flow
import React from 'react';
import StudentSize from '../eduComponent/studentSize/studentSize';
import type { University } from '../../type/university';

import './universityDetail.css';

type Props = {
  +university: University
};

const UniversityDetail = ({ university }: Props) => {
  const renderOptionalContent = () => {
    if (university.detail) {
      return <StudentSize detail={university.detail} />;
    } else {
      return <h2>No detail yet</h2>;
    }
  };
  return (
    <div>
      <h1>{university.name}</h1>
      {renderOptionalContent()}
    </div>
  );
};

export default UniversityDetail;
