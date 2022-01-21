import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

/**
 * Configure store
 * 1. Initial state of the store
 */

const middleware = [thunk];

// let store;

// if (window.navigator.userAgent.includes('Chrome')) {
//   store = createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(...middleware),
//       window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__()
//     )
//   );
// } else {
//   store = createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(...middleware)
//   );
// }

export const store = createStore(rootReducer, applyMiddleware(...middleware));
