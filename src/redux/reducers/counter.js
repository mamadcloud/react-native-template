import { createReducer } from 'libs/createReducer';
import { COUNTER } from 'redux-context/constants';

const initialState = {
  number: 0,
};

export const counter = createReducer(state = initialState, {
  [COUNTER.UPDATE_COUNTER](state, action) {
    return Object.assign({}, state, { number: action.data });
  },
});