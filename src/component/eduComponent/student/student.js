// @flow
import React from 'react';
import type { StudentDetail } from '../../../type/university';
import StudentSize from '../studentSize/studentSize';

import './student.css';

type Props = {
  student: StudentDetail
};

const Student = ({ student }: Props) => {
  const renderSize = () => (
    <StudentSize undergradSize={student.size} gradSize={student.gradStudents} />
  );
  return <div>{renderSize()}</div>;
};

export default Student;
