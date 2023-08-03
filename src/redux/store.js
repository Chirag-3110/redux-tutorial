import { createStore,applyMiddleware } from "redux";
import rootreducer from "./reducers";
import createSagaMiddleware from 'redux-saga'

import rootSaga from "./saga/rootsaga";

const sagaMiddleware = createSagaMiddleware()

const store=createStore(rootreducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
export default store;