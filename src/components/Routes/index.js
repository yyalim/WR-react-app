import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import HomePage from '../HomePage'
import NewQuestionPage from '../NewQuestionPage'
import LeaderBoardPage from '../LeaderBoardPage'
import QuestionPage from '../QuestionPage'
import LoginPage from '../LoginPage'

const Routes = props => (
  <Fragment>
    <Route exact path="/" component={HomePage} />
    <Route path="/add" component={NewQuestionPage} />
    <Route path="/leaderboard" component={LeaderBoardPage} />
    <Route path="/question/:question_id" component={QuestionPage} />
    <Route path="/login" component={LoginPage} />
  </Fragment>
)

export default Routes