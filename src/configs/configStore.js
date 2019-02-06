import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

function configStore(initialState) {
  const store = initialState ? createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  ) : createStore(
    rootReducer,
    applyMiddleware(thunk)
  );

  return store;
}

export default configStore;