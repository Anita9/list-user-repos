/* eslint-disable import/no-anonymous-default-export */
import { constants } from './constants';

export default (state={}, action) => {
  switch (action.type) {
    case constants.GET_USER_INFO:
      return action.payload;

      case constants.RESET_STATE:
        return {};
      
    default:
      return state;
  }
}