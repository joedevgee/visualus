import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './card';

storiesOf('University List Card', module).add('Default Card', () => {
  const university = {
    id: 1,
    name: 'Boston University',
    alias: 'BU'
  };
  return <Card university={university} />;
});
