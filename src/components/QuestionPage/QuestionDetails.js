import React from 'react'
import { connect } from 'react-redux'
import { getQuestionDetails } from '../../selectors'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

const QuestionDetails = props => (
  props.question.isAnswered
    ? <AnsweredQuestion {...props} />
    : <UnansweredQuestion {...props} />
)

const mapStateToProps = (state, { questionId, ...ownProps }) => {
  const question = getQuestionDetails(state, questionId)
  const author = state.users[question.author]

  return { question, author, ...ownProps }
}

export default connect(mapStateToProps)(QuestionDetails)