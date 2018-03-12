// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';
import type { University, Id } from '../../type/university';

import './card.css';

type Props = {
  +university: University,
  +selectUniversity: (id: Id) => void,
  history?: any
};

type IconTextProps = {
  +type: string,
  +text: string,
  +link?: string
};

export const Card = ({ university, history, selectUniversity }: Props) => {
  const Item = List.Item;
  const Meta = Item.Meta;
  /* istanbul ignore next */
  const IconText = ({ type, text, link }: IconTextProps) => (
    <span className={link ? 'linkAction' : 'noneLinkAction'}>
      <Icon type={type} className="iconText" style={{ marginRight: 8 }}>
        <p className="iconText-data">{text}</p>
      </Icon>
    </span>
  );
  /* istanbul ignore next */
  const renderActions = () => {
    const actionList = [];
    const floatFormatter = new window.Intl.NumberFormat('en-US', {
      style: 'percent',
      maximumFractionDigits: 0
    });
    const numberFormatter = new window.Intl.NumberFormat('en-US');
    const currencyFormatter = new window.Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
    if (university.city || university.state) {
      const location: string = `${university.city}, ${university.state}`;
      const homeType: string = 'home';
      actionList.push(<IconText type={homeType} text={location} />);
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
  const navigateToDetail = () => {
    selectUniversity(university.id);
    /* istanbul ignore else */
    if (history) {
      const formattedName = university.name.replace(/\s+/g, '-').toLowerCase();
      history.push(`${history.location.pathname}/${formattedName}`);
    }
  };
  return (
    <Item
      key={university.id}
      actions={renderActions()}
      onClick={navigateToDetail}
    >
      <Meta
        title={university.name}
        avatar={<Avatar>{university.alias}</Avatar>}
      />
    </Item>
  );
};

export default withRouter(Card);
