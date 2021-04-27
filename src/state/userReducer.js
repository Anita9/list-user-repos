/* eslint-disable import/no-anonymous-default-export */
import { constants } from './constants';

// const initialState = {
//   userInfo: {},
//   userApiStatus: null,
//   userRepos: [],
//   reposApiStatus: null
// }

export default (state={}, action) => {
  switch (action.type) {
    case constants.GET_USER_INFO:
      return action.payload;
    case constants.GET_USER_REPOS:
      state.userRepos = action.payload;
      state.reposApiStatus = action.status;
      return state;
    default:
      return state;
  }
}