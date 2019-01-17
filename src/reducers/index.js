import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authedUser from './authedUser'
import loadingViews from './loadingViews'

const rootReducer = combineReducers({
  users,
  questions,
  authedUser,
  loadingViews
})

export default rootReducer