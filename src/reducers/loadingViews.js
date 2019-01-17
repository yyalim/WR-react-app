import {
  SHOW_LOGIN_LOADING,
  HIDE_LOGIN_LOADING
} from '../actions/authedUser'

import {
  SHOW_USERS_LOADING,
  HIDE_USERS_LOADING
} from '../actions/users'

export const LOGIN_LOADING = 'LOGIN_LOADING'
export const USERS_LOADING = 'USERS_LOADING'

const loadingViews = (state = [], action) => {
  switch(action.type) {
    case SHOW_LOGIN_LOADING:
      return [
        ...state,
        LOGIN_LOADING
      ]
    case HIDE_LOGIN_LOADING:
      return [
        state.filter(view => view !== LOGIN_LOADING ),
      ]
    case SHOW_USERS_LOADING:
      return [
        ...state,
        USERS_LOADING
      ]
    case HIDE_USERS_LOADING:
      return [
        state.filter(view => view !== USERS_LOADING ),
      ]
    default:
      return state
  }
}

export default loadingViews