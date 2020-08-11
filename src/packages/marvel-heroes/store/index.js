import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import { createWrapper } from 'next-redux-wrapper'

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga)

export default store;
