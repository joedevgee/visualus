import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSage from './saga';
import reduxApp from './reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reduxApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
