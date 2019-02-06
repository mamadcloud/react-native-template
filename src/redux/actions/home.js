import { HOME } from 'redux-context/constants';

import app from '../../../app.json'; 

export function getAppName() {
  return (dispatch, getState) => {
    dispatch({
      type: HOME.GET_APP_NAME,
      data: app.name,
    })
  }
}