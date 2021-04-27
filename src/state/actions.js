import { constants } from './constants';
import axios from 'axios';

export const getUserInfo = (username) => async (dispatch) => {
  await axios.get( `https://api.github.com/users/${username}`)
  .then(response => {
    dispatch({
      type: constants.GET_USER_INFO,
      payload: response.data,
      status: response.status
    })
  })
  .catch(error => {
    console.error(error);
  })
}

export const resetState = () => (dispatch) => {
  dispatch({
    type: constants.RESET_STATE
  })
}

export const getuserRepos = (username) => async (dispatch) => {
  await axios.get(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    dispatch({
      type: constants.GET_USER_REPOS,
      payload: response.data
    })
  })
  .catch(error => {
    console.error(error);
  })
}