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
    const { handleGetQuestionAndAuthor, questionId, history } = this.props

    handleGetQuestionAndAuthor(questionId)
      .then(stopLoading.bind(this))
      .catch(error => {
        // if question does not exists, redirect to NotFoundPage
        error.status === 404 && history.push(`/404`)
      })
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