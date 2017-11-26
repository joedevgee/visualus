import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduxApp from './reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reduxApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
