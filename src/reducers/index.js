import { combineReducers } from 'redux'
import users from './users'
import { loadingBarReducer } from 'react-redux-loading'

const rootReducer = combineReducers({
  users,
  loadingBar: loadingBarReducer
})

export default rootReducer