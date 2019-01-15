import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from '../HomePage'
import NewQuestionPage from '../NewQuestionPage'
import LeaderBoardPage from '../LeaderBoardPage'
import QuestionPage from '../QuestionPage'
import LoginPage from '../LoginPage'

const Routes = props => (
  <Fragment>
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute path="/add" component={NewQuestionPage} />
    <PrivateRoute path="/leaderboard" component={LeaderBoardPage} />
    <PrivateRoute path="/question/:question_id" component={QuestionPage} />
    <Route path="/login" component={LoginPage} />
  </Fragment>
)

export default Routes