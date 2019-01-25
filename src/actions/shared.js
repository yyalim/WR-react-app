import { getUsersAndQuestions, getQuestionAndAuthor } from '../utils/api'
import { receiveQuestions, receiveQuestion } from './questions'
import { receiveUsers, receiveUser } from './users'

export const handleGetUsersAndQuestions = () => dispatch => (
  getUsersAndQuestions()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
)

export const handleGetQuestionAndAuthor = id => dispatch => (
  getQuestionAndAuthor(id)
    .then(({ question, author }) => {
      dispatch(receiveQuestion(question))
      dispatch(receiveUser(author))
    })
)