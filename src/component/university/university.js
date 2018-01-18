// @flow
import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';

import type { UniversityList } from '../../type/university';

import './university.css';

export type Props = {
  loading: boolean,
  valueList: UniversityList,
  onInputValueChange: (input: string) => void
};

const University = ({ loading, valueList, onInputValueChange }: Props) => {
  function renderSearchField() {
    const dataSource = valueList.map(v => v.name);
    return (
      <AutoComplete
        className="search-autocomplete"
        size="large"
        dataSource={dataSource}
        onChange={onInputValueChange}
      >
        <Input
          className="search-input"
          placeholder="Search by name. e.g. UCLA"
          prefix={<Icon type="search" className="search-prefix-icon" />}
        />
      </AutoComplete>
    );
  }

  return (
    <div>
      <h1>University</h1>
      {renderSearchField()}
    </div>
  );
};

export default University;
