import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware, { END } from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducer';
import Root from './container/root/root';
import rootSaga from './saga';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const configureStore = preLoadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
