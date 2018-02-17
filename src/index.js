import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware, { END } from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducer';
import Root from './container/root/root';
import rootSaga from './saga';
import registerServiceWorker from './registerServiceWorker';

const configureStore = preLoadedState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preLoadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
};

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
