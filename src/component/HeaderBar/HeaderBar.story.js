import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderBar from './HeaderBar';

storiesOf('HeaderBar', module)
  .add('Default header', () => <HeaderBar />)
  .add('CUstom title', () => <HeaderBar title="Custom Title" />);
