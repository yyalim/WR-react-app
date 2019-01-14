import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'

const rootReducer = combineReducers({
  users,
  authedUserId: authedUser,
  loadingBar: loadingBarReducer
})

export default rootReducer