import { RECEIVE_QUESTIONS, RECEIVE_QUESTION, ANSWER_QUESTION } from '../actions/questions'

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
    case ANSWER_QUESTION:
      const { question, authedUser, answer } = action


      console.log(question)

      return {
        ...state,
        [question.id]: {
          ...question,
          [answer]: {
            votes: [...question[answer]['votes'], authedUser.id],
            ...question[answer]
          }
        }
      }
    default:
      return state
  }
}

export default questions