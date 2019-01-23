import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getAnsweredQuestionIds,
  getUnansweredQuestionIds
} from '../../selectors'
import { handleGetQuestions } from '../../actions/questions'
import { QUESTIONS_LOADING } from '../../reducers/loadingViews';
import LoadingIndicator from '../Shared/LoadingIndicator'

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetQuestions())
  }

  render() {
    const { isLoading } = this.props

    if(isLoading) {
      return <LoadingIndicator />
    }

    return (
      <div>
        HomePage
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { questions, loadingViews } = state

  return ({
    answeredQuestionIds: getAnsweredQuestionIds(state),
    unAnsweredQuestionIds: getUnansweredQuestionIds(state),
    questions,
    isLoading: loadingViews.includes(QUESTIONS_LOADING),
    ...ownProps
  })
}

export default connect(mapStateToProps)(HomePage)