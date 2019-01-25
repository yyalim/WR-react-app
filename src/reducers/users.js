import { RECEIVE_USERS, RECEIVE_USER } from '../actions/users'

const users = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case RECEIVE_USER:
      return {
        ...state,
        [action.user.id]: action.user
      }
    default:
      return state
  }
}

export default users