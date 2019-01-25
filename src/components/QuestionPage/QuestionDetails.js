import React from 'react'
import { connect } from 'react-redux'
import { getQuestionDetails } from '../../selectors'

const QuestionDetails = props => <div>Question Details</div>

const mapStateToProps = (state, ownProps) => {
  const { questionId } = ownProps

  return {
    question: getQuestionDetails(state, questionId),
    ...ownProps
  }
}

export default connect(mapStateToProps)(QuestionDetails)