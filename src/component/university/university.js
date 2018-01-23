// @flow
import React from 'react';
import { Input, Row, Col, List } from 'antd';

import type {
  UniversityList,
  University as UniversityType
} from '../../type/university';
import Card from '../universityCard/card';

import './university.css';

export type Props = {
  +loading: boolean,
  +valueList: UniversityList,
  +onInputValueChange: (input: string) => void
};

const University = ({ loading, valueList, onInputValueChange }: Props) => {
  const renderSearchField = () => {
    const Search = Input.Search;
    return (
      <Row>
        <Col
          sm={{ span: 24, offset: 0 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 16, offset: 4 }}
          xl={{ span: 14, offset: 5 }}
        >
          <Search
            placeholder="Search by name. e.g. Boston University"
            onSearch={(value: string) => onInputValueChange(value)}
            enterButton
          />
        </Col>
      </Row>
    );
  };

  const renderUniversityList = () => {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={valueList}
        renderItem={(university: UniversityType) => (
          <Card university={university} />
        )}
      />
    );
  };

  return (
    <div>
      {renderSearchField()}
      {renderUniversityList()}
    </div>
  );
};

export default University;
