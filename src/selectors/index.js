import { createSelector } from 'reselect'

const getAuthedUser = state => state.authedUser
const getQuestions = state => state.questions
const getUsers = state => state.users
const getQuestion = (state, questionId) => state.questions[questionId]

// Returns answered or unanswered questions of authed user by answered property
const questionIds = ({ authedUser, questions, answered }) => {
  const authedUserId = authedUser.id
  const questionIds = Object.keys(questions)

  return questionIds
    // filter answered or unanswered questions
    .filter(questionId => {
      const question = questions[questionId]
      const optionOneVoters = question.optionOne.votes
      const optionTwoVoters = question.optionTwo.votes
      const voters = [...optionOneVoters, ...optionTwoVoters]

      return answered
        ? voters.includes(authedUserId)
        : !voters.includes(authedUserId)
    })
    // order by timestamp, descending
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
}

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