import React from 'react';
import { storiesOf } from '@storybook/react';
import { List } from 'antd';
import Card from './card';

storiesOf('University List Card', module).add('Default Card', () => {
  const universityList = [
    {
      website: 'www.bc.edu',
      name: 'Boston College',
      state: 'MA',
      studentSize: 9491,
      admissionRate: 0.2851,
      id: 164924,
      annualCost: 62968,
      city: 'Chestnut Hill',
      alias: null
    },
    {
      website: 'www.bu.edu',
      name: 'Boston University',
      alias: 'BU|Boston U',
      state: 'MA',
      studentSize: 16456,
      admissionRate: 0.3262,
      id: 164988,
      annualCost: 63588,
      city: 'Boston'
    },
    {
      website: 'www.the-bac.edu',
      name: 'Boston Architectural College',
      alias: 'Boston Architectural Center',
      state: 'MA',
      studentSize: 365,
      id: 164872,
      annualCost: 37247,
      city: 'Boston',
      admissionRate: null
    },
    {
      website: 'www.daymarcollege.edu',
      name: 'Daymar College-New Boston',
      alias: 'Daymar College New Boston',
      state: 'OH',
      studentSize: 26,
      id: 205522,
      annualCost: 28565,
      city: 'New Boston',
      admissionRate: null
    },
    {
      website: 'www.cortiva.com',
      name: 'Cortiva Institute-Boston',
      alias: 'CI-MTI; CI-B',
      state: 'MA',
      studentSize: 154,
      id: 166975,
      city: 'Watertown',
      admissionRate: null,
      annualCost: null
    }
  ];
  return (
    <List
      itemLayout="horizontal"
      size="large"
      dataSource={universityList}
      renderItem={u => <Card university={u} />}
    />
  );
});
