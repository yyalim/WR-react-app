import React from 'react'
import { connect } from 'react-redux'
import { handleGetQuestions } from '../../actions/questions'
import {
  getAnsweredQuestionIds,
  getUnansweredQuestionIds
} from '../../selectors'
import { QUESTIONS_LOADING } from '../../reducers/loadingViews';
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import LoadingIndicator from '../Shared/LoadingIndicator'
import QuestionList from '../QuestionList'

function TabContainer({ children, dir }) {
  return (
    <div dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </div>
  )
}

const styles = theme => ({
  root: {
    width: '800px'
  },
})

class QuestionTabs extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetQuestions())
  }

  render() {
    const {
      classes,
      theme,
      questions,
      unAnsweredQuestionIds,
      answeredQuestionIds,
      isLoading
    } = this.props;

    if(isLoading) {
      return <LoadingIndicator />
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Unanswered Questions" />
            <Tab label="Answered Questions" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <QuestionList
              questions={questions}
              questionIds={unAnsweredQuestionIds}
            />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <QuestionList
              questions={questions}
              questionIds={answeredQuestionIds}
            />
          </TabContainer>
        </SwipeableViews>
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

const connectedQuestionTabs = connect(mapStateToProps)(QuestionTabs)

export default withStyles(styles, { withTheme: true })(connectedQuestionTabs)