// @flow
import React from 'react';
import { List } from 'antd';
import type { University } from '../../type/university';

import './card.css';

type Props = {
  +university: University
};

const Card = ({ university }: Props) => {
  const Item = List.Item;
  const Meta = Item.Meta;
  return (
    <Item key={university.id}>
      <Meta title={university.name} />
      {university.alias}
    </Item>
  );
};

export default Card;
