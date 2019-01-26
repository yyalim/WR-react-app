import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import authedUser from './authedUser'

const rootReducer = combineReducers({
  users,
  questions,
  authedUser,
})

export default rootReducer