// @flow
import React from 'react';
import { List, Avatar, Icon } from 'antd';
import type { University } from '../../type/university';

import './card.css';

type Props = {
  +university: University
};

const Card = ({ university }: Props) => {
  const Item = List.Item;
  const Meta = Item.Meta;
  const renderActions = () => {
    const actionList = [];
    const IconText = ({ type, text, link }) => (
      <span className={link ? 'linkAction' : null}>
        <Icon type={type} className="iconText" style={{ marginRight: 8 }}>
          <p className="iconText-data">{text}</p>
        </Icon>
      </span>
    );
    const floatFormatter = new Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 0
    });
    const numberFormatter = new Intl.NumberFormat('en-US');
    const currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
    if (university.city || university.state) {
      const location = `${university.city}, ${university.state}`;
      actionList.push(<IconText type="home" text={location} />);
    }

    if (university.admissionRate) {
      const rate = floatFormatter.format(university.admissionRate);
      actionList.push(<IconText type="usergroup-add" text={rate} />);
    }
    if (university.annualCost) {
      const cost = currencyFormatter.format(university.annualCost);
      actionList.push(<IconText type="shopping-cart" text={cost} />);
    }
    if (university.studentSize) {
      const size = numberFormatter.format(university.studentSize);
      actionList.push(<IconText type="user" text={size} />);
    }
    if (university.website) {
      actionList.push(
        <IconText
          type="global"
          text={university.website}
          link={university.website}
        />
      );
    }
    return actionList;
  };
  return (
    <Item key={university.id} actions={renderActions()}>
      <Meta
        title={university.name}
        avatar={<Avatar>{university.alias}</Avatar>}
      />
    </Item>
  );
};

export default Card;
