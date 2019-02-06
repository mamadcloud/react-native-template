import { createReducer } from 'libs/createReducer';
import { HOME } from 'redux-context/constants';

const initialState = {
  name: null,
};

export const home = createReducer(state = initialState, {
  [HOME.GET_APP_NAME](state, action) {
    return Object.assign({}, state, { name: action.data });
  },
});