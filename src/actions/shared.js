import { getUsersAndQuestions } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export const handleGetUsersAndQuestions = () => dispatch => (
  getUsersAndQuestions()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
)