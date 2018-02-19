// @flow
import React from 'react';
import type { UniversityDetail } from '../../../type/university';
import { Chart, Geom, Axis, Tooltip } from 'bizcharts';

import './studentSize.css';

type Props = {
  +detail: UniversityDetail
};

const StudentSize = ({ detail }: Props) => {
  const renderDataViz = () => {
    const sizeData = [];
    Object.keys(detail.student.size).forEach(year => {
      const size = detail.student.size[year];
      sizeData.push({
        year: year,
        size: size
      });
    });
    const cols = {
      year: { alias: 'year' },
      size: { alias: 'student size' }
    };
    return (
      <Chart height={400} data={sizeData} scale={cols} forceFit>
        <Axis
          name="year"
          title={null}
          tickLine={null}
          line={{ stroke: '#E6E6E6' }}
        />
        <Axis
          name="student size"
          line={false}
          tickLine={null}
          grid={null}
          title={null}
        />
        <Tooltip />
        <Geom
          type="line"
          position="year*size"
          size={1}
          color="l (270) 0:rgba(255, 146, 255, 1) .5:rgba(100, 268, 255, 1) 1:rgba(215, 0, 255, 1)"
          shape="smooth"
          style={{
            shadowColor: 'l (270) 0:rgba(21, 146, 255, 0)',
            shadowBlur: 60,
            shadowOffsetY: 6
          }}
        />
      </Chart>
    );
  };
  return (
    <div>
      <h1>student detail size section</h1>
      {detail.student && detail.student.size && renderDataViz()}
    </div>
  );
};

export default StudentSize;
