import { ADD_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser.js'

const authedUser = (state = null, action) => {
  switch(action.type) {
    case ADD_AUTHED_USER:
      return action.user
    case REMOVE_AUTHED_USER:
      return null
    default:
      return state
  }
}

export default authedUser