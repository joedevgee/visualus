// @flow
import React from 'react';
import Student from '../eduComponent/student/student';
import type { University } from '../../type/university';

import './universityDetail.css';

type Props = {
  +university: University
};

const UniversityDetail = ({ university }: Props) => {
  const renderStudentContent = () => {
    if (university.detail && university.detail.student) {
      return <Student student={university.detail.student} />;
    } else {
      return <h2>No detail yet</h2>;
    }
  };
  return (
    <div>
      <h1>{university.name}</h1>
      {renderStudentContent()}
    </div>
  );
};

export default UniversityDetail;
