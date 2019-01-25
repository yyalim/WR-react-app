export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SHOW_QUESTIONS_LOADING = 'SHOW_QUESTIONS_LOADING'
export const HIDE_QUESTIONS_LOADING = 'HIDE_QUESTIONS_LOADING'

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})
