// Returns answered or unanswered questions of authed user by answered property
export const questionIds = ({ authedUser, questions, answered }) => {
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

export const questionWithStatics = ({ authedUser, question }) => {
  const authedUserId = authedUser.id
  const optionOneVoters = question.optionOne.votes
  const optionTwoVoters = question.optionTwo.votes
  const voters = [...optionOneVoters, ...optionTwoVoters]
  const isAnswered = voters.includes(authedUserId)

  const optionOneCount = question.optionOne.votes.length
  const optionTwoCount = question.optionTwo.votes.length
  const totalVotes = voters.length

  const optionOnePercentage = (optionOneCount / totalVotes) * 100
  const optionTwoPercentage = 100 - optionOnePercentage

  question.optionOne = {
    ...question.optionOne,
    votersCount: optionOneCount,
    percentage: optionOnePercentage,
    isAuthedUserChoice: optionOneVoters.includes(authedUserId)
  }

  question.optionTwo = {
    ...question.optionTwo,
    votersCount: optionTwoCount,
    percentage: optionTwoPercentage,
    isAuthedUserChoice: optionTwoVoters.includes(authedUserId)
  }

  return {
    ...question,
    isAnswered,
    totalVotes
  }
}

export const scoreboard = users => {
  const userIds = Object.keys(users)

  return userIds.map(userId => {
    const user = users[userId]
    const answersCount = Object.keys(user.answers).length
    const questionsCount = user.questions.length
    const totalPoints = answersCount + questionsCount

    return {
      ...user,
      score: {
        answersCount,
        questionsCount,
        totalPoints
      }
    }
  }).sort((a, b) => (
    b.score.totalPoints - a.score.totalPoints
  ))
}
