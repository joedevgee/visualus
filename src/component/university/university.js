// @flow
import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';

import './university.css';

const University = () => {
  function renderSearchField() {
    return (
      <AutoComplete className="search-autocomplete" size="large">
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
