import {
  SHOW_LOGIN_LOADING,
  HIDE_LOGIN_LOADING
} from '../actions/authedUser'

import {
  SHOW_USERS_LOADING,
  HIDE_USERS_LOADING
} from '../actions/users'

import {
  SHOW_QUESTIONS_LOADING,
  HIDE_QUESTIONS_LOADING
} from '../actions/questions'

export const LOGIN_LOADING = 'LOGIN_LOADING'
export const USERS_LOADING = 'USERS_LOADING'
export const QUESTIONS_LOADING = 'QUESTIONS_LOADING'

const loadingViews = (state = [], action) => {
  switch(action.type) {
    case SHOW_LOGIN_LOADING:
      return [
        ...state,
        LOGIN_LOADING
      ]
    case HIDE_LOGIN_LOADING:
      return state.filter(view => view !== LOGIN_LOADING)
    case SHOW_USERS_LOADING:
      return [
        ...state,
        USERS_LOADING
      ]
    case HIDE_USERS_LOADING:
      return state.filter(view => view !== USERS_LOADING)
    case SHOW_QUESTIONS_LOADING:
      return [
        ...state,
        QUESTIONS_LOADING
      ]
    case HIDE_QUESTIONS_LOADING:
      return state.filter(view => view !== QUESTIONS_LOADING)
    default:
      return state
  }
}

export default loadingViews