import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

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

const addQuestion = question => ({
  type: ADD_QUESTION,
  question
})

// params = { question, authedUser, answer }
// this thunk action updates users, questions, authedUser
export const handleSaveQuestionAnswer = (params) => dispatch => {
  return saveQuestionAnswer(params)
    .then(() => {
      dispatch(answerQuestion(params))
    })
}

export const handleSaveQuestion = question => dispatch => {
  return saveQuestion(question)
    .then(question => dispatch(addQuestion(question)))
}