import { getQuestions } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SHOW_QUESTIONS_LOADING = 'SHOW_QUESTIONS_LOADING'
export const HIDE_QUESTIONS_LOADING = 'HIDE_QUESTIONS_LOADING'

const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})

const showQuestionsLoading = () => ({
  type: SHOW_QUESTIONS_LOADING
})

const hideQuestionsLoading = () => ({
  type: HIDE_QUESTIONS_LOADING
})

export const handleGetQuestions = () => dispatch => {
  dispatch(showQuestionsLoading())
  return getQuestions()
    .then(questions => {
      dispatch(receiveQuestions(questions))
      dispatch(hideQuestionsLoading())
    })
}
