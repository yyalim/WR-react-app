import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

export const handleGetUsers = () => dispatch => {
  return getUsers()
    .then(users => {
      dispatch(receiveUsers(users))
    })
}