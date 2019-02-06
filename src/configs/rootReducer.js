import { combineReducers } from 'redux';

import * as homeReducers from 'redux-context/reducers/home';
import * as counterReducers from 'redux-context/reducers/counter';

const reducerMap = Object.assign({}, 
  homeReducers,
  counterReducers
);

export default combineReducers(reducerMap);