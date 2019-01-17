import { login, logout } from '../utils/api'
import ls from '../utils/localStorageHelper'

export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'
export const SHOW_LOGIN_LOADING = 'SHOW_LOGIN_LOADING'
export const HIDE_LOGIN_LOADING = 'HIDE_LOGIN_LOADING'

const addAuthedUser = user => ({
  type: ADD_AUTHED_USER,
  user
})

const removeAuthedUser = () => ({
  type: REMOVE_AUTHED_USER
})

const showLoginLoading = () => ({
  type: SHOW_LOGIN_LOADING
})

const hideLoginLoading = () => ({
  type: HIDE_LOGIN_LOADING
})

export const handleLogin = id => dispatch => {
  dispatch(showLoginLoading())
  return login(id)
    .then((user) => {
      dispatch(addAuthedUser(user))
      ls.saveAuthedUserId(user.id)
      dispatch(hideLoginLoading())
    })
    .catch((error) => {
      // TODO: redirect to login page with error message. This never happen in
      // this application but in real app we need to create actions and reducer
      // to build validation and show error messages
      console.warn(error)
      dispatch(hideLoginLoading())
    })
}

export const handleLogout = () => dispatch => {
  dispatch(showLoginLoading())
  return logout()
    .then(() => {
      dispatch(removeAuthedUser())
      ls.removeAuthedUserId()
      dispatch(hideLoginLoading())
    })
}