// @flow
import React from 'react';
import { Input, Row, Col, List, Pagination } from 'antd';

import type {
  UniversityList,
  University as UniversityType,
  Id
} from '../../type/university';
import Card from '../universityCard/card';

import './university.css';

export type Props = {
  +loading: boolean,
  +metaData: Object,
  +valueList: UniversityList,
  +onInputValueChange: (input: string) => void,
  +onUniversitySelected: (id: Id) => void,
  +onPageChange: (page: Number, pageSize: Number) => void
};

const University = ({
  loading,
  metaData,
  valueList,
  onPageChange,
  onInputValueChange,
  onUniversitySelected
}: Props) => {
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
          <Card
            university={university}
            selectUniversity={onUniversitySelected}
          />
        )}
      />
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        size="small"
        total={metaData.total}
        pageSize={metaData.per_page}
        current={metaData.page + 1}
        onChange={onPageChange}
        showTotal={total => `Total ${total} items`}
      />
    );
  };

  return (
    <div>
      {renderSearchField()}
      {renderUniversityList()}
      {renderPagination()}
    </div>
  );
};

export default University;
