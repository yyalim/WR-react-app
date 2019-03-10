import { createSelector } from 'reselect'
import { questionIds, questionWithStatics } from '../utils/selectorHelpers'

const getAuthedUser = state => state.authedUser
const getQuestions = state => state.questions
const getUsers = state => state.users
const getQuestion = (state, questionId) => state.questions[questionId]

export const getAnsweredQuestionIds = createSelector(
  [getAuthedUser, getQuestions],
  (authedUser, questions) => questionIds({
    authedUser, questions, answered: true
  })
)

export const getUnansweredQuestionIds = createSelector(
  [getAuthedUser, getQuestions],
  (authedUser, questions) => questionIds({
    authedUser, questions, answered: false
  })
)

export const getAuthor = createSelector(
  [getUsers, getQuestion],
  (users, question) => users[question.author]
)

export const getQuestionDetails = createSelector(
  [getAuthedUser, getQuestion],
  (authedUser, question) => questionWithStatics({ authedUser, question })
)