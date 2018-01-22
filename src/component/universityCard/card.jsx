// @flow
import React from 'react';
import { List } from 'antd';
import type { University } from '../../type/university';

import './card.css';

type Props = {
  university: University
};

const Card = ({ university }: Props) => {
  const Item = List.Item;
  return (
    <Item key={university.id}>
      <Item.Meta title={university.name} />
      {university.alias}
    </Item>
  );
};

export default Card;
