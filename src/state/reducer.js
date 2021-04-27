/* eslint-disable import/no-anonymous-default-export */
import { constants } from './constants';

export default (state=[], action) => {
  switch (action.type) {
    case constants.GET_USER_INFO:
      state.userInfo = action.payload;
      state.userApiStatus = action.status;
      return state;
    default:
      return state;
  }
}