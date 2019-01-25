import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SHOW_USERS_LOADING = 'SHOW_USERS_LOADING'
export const HIDE_USERS_LOADING = 'HIDE_USERS_LOADING'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const showUsersLoading = () => ({
  type: SHOW_USERS_LOADING
})

const hideUsersLoading = () => ({
  type: HIDE_USERS_LOADING
})

export const handleGetUsers = () => dispatch => {
  dispatch(showUsersLoading())

  return getUsers()
    .then(users => {
      dispatch(receiveUsers(users))
      dispatch(hideUsersLoading())
    })
}