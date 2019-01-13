import { showLoading, hideLoading } from 'react-redux-loading'
import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const handleGetUsers = () => dispatch => {
  dispatch(showLoading())

  return getUsers()
    .then(users => {
      dispatch(receiveUsers(users))
      dispatch(hideLoading())
    })
}