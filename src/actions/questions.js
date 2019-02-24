import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question
})

const answerQuestion = ({ question, authedUser, answer }) => ({
  type: ANSWER_QUESTION,
  question,
  answer,
  authedUser
})

// params = { question, authedUser, answer }
// this thunk action updates users, questions, authedUser
export const handleSaveQuestionAnswer = (params) => dispatch => {
  return saveQuestionAnswer(params)
    .then(() => {
      dispatch(answerQuestion(params))
    })
}