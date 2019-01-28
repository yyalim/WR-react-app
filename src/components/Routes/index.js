import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import HomePage from '../HomePage'
import NewQuestionPage from '../NewQuestionPage'
import LeaderBoardPage from '../LeaderBoardPage'
import QuestionPage from '../QuestionPage'
import LoginPage from '../LoginPage'
import NotFoundPage from '../NotFoundPage'

const Routes = props => (
  <Switch>
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute path="/add" component={NewQuestionPage} />
    <PrivateRoute path="/leaderboard" component={LeaderBoardPage} />
    <PrivateRoute path="/question/:question_id" component={QuestionPage} />
    <Route path="/login" component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes