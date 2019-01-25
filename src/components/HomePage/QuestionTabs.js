import React from 'react'
import { connect } from 'react-redux'
import { handleGetUsersAndQuestions } from '../../actions/shared'
import {
  getAnsweredQuestionIds,
  getUnansweredQuestionIds
} from '../../selectors'
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
    isLoading: true
  }

  handleChange = (event, value) => {
    this.setState({ value })
  };

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  componentDidMount() {
    const { handleGetUsersAndQuestions } = this.props

    const stopLoading = () => this.setState(() => ({ isLoading: false }))

    handleGetUsersAndQuestions()
      .then(stopLoading)
  }

  render() {
    const {
      classes,
      theme,
      questions,
      unAnsweredQuestionIds,
      answeredQuestionIds,
    } = this.props;

    const { isLoading } = this.state

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
  const { questions } = state

  return ({
    answeredQuestionIds: getAnsweredQuestionIds(state),
    unAnsweredQuestionIds: getUnansweredQuestionIds(state),
    questions,
    ...ownProps
  })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetUsersAndQuestions: () => dispatch(handleGetUsersAndQuestions())
})

const connectedQuestionTabs = connect(
  mapStateToProps, mapDispatchToProps
)(QuestionTabs)

export default withStyles(styles, { withTheme: true })(connectedQuestionTabs)