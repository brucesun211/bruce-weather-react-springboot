import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const initialState = {};



let store;
if (window.navigator.userAgent.includes("Chrome")) {

  store = createStore(
    rootReducer,
    initialState,

    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
} else {

  store = createStore(
    rootReducer,
    initialState
  );
}

export default store;