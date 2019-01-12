import { getUsers } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

export const handleGetUsers = () => dispatch => (
  getUsers().then(users => { dispatch(receiveUsers(users)) })
)