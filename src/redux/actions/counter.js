import { COUNTER } from 'redux-context/constants';

export function updateCounter(additional) {
  return (dispatch, getState) => {
    let number = getState().counter.number || 0;
    dispatch({
      type: COUNTER.UPDATE_COUNTER,
      data: number + additional,
    })
  }
}