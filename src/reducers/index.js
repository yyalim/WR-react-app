import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import loadingViews from './loadingViews'

const rootReducer = combineReducers({
  users,
  authedUser,
  loadingViews
})

export default rootReducer