import { RECEIVE_QUESTIONS, RECEIVE_QUESTION } from '../actions/questions'

const questions = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case RECEIVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}

export default questions