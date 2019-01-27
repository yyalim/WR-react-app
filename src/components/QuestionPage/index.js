import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetQuestionAndAuthor } from '../../actions/shared'
import { stopLoading } from '../../utils/helpers'
import QuestionDetails from './QuestionDetails'
import Wait from '../Shared/Wait'

class QuestionPage extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    const { handleGetQuestionAndAuthor, questionId } = this.props

    handleGetQuestionAndAuthor(questionId)
      .then(stopLoading.bind(this))
      .catch(err => console.log(err))
  }

  render() {
    const { questionId } = this.props
    const { isLoading } = this.state

    return (
      <Wait isWaiting={isLoading}>
        <QuestionDetails questionId={questionId} />
      </Wait>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match } = ownProps
  const id = match.params.question_id

  return ({
    questionId: id,
    ...ownProps
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetQuestionAndAuthor: id => dispatch(handleGetQuestionAndAuthor(id)),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage)