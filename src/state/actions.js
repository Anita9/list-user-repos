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
    dispatch({
      type: constants.GET_USER_INFO,
      payload: error.response.status
    })
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
    if(response.data.length === 0) {
      console.log('entered if')
      dispatch({
        type: constants.GET_USER_REPOS,
        payload: null
      })
    }
    else {
      dispatch({
        type: constants.GET_USER_REPOS,
        payload: response.data
      })
    }
  })
  .catch(error => {
    dispatch({
      type: constants.GET_USER_REPOS,
      payload: error && error.response.status
    })
  })
}