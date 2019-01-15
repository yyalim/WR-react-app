import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import LoginPage from '../LoginPage'

const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthed
      ? <Component {...props} />
      : <LoginPage />
  )}/>
)

const mapStateToProps = ({ authedUserId }, props) => ({
  isAuthed: authedUserId !== null,
  ...props
})

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default withRouter(ConnectedPrivateRoute)