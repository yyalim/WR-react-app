import { login, logout } from '../utils/api'
import ls from '../utils/localStorageHelper'

export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

const addAuthedUser = user => ({
  type: ADD_AUTHED_USER,
  user
})

const removeAuthedUser = () => ({
  type: REMOVE_AUTHED_USER
})

export const handleLogin = id => dispatch => {
  return login(id)
    .then((user) => {
      dispatch(addAuthedUser(user))
      ls.saveAuthedUserId(user.id)
    })
    .catch((error) => {
      // TODO: redirect to login page with error message. This never happen in
      // this application but in real app we need to create actions and reducer
      // to build validation and show error messages
      console.warn(error)
    })
}

export const handleLogout = () => dispatch => {
  return logout()
    .then(() => {
      dispatch(removeAuthedUser())
      ls.removeAuthedUserId()
    })
}