// @flow

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import type { Store } from '../../type';
import App from '../../App';

type Props = {
  store: Store
};

const Root = (props: Props) => (
  <Provider store={props.store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Root;
