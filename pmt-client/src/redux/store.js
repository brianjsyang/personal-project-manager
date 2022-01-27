import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

/**
 * Configure store
 * Making use of Redux Dev Tool
 */

const middleware = [thunk];

const composed = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let store;

if (window.navigator.userAgent.includes('Chrome')) {
  store = createStore(rootReducer, composed);
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

export default store;
