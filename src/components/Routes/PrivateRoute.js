import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthed
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )}/>
)

const mapStateToProps = ({ authedUser }, props) => ({
  isAuthed: authedUser !== null,
  ...props
})

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute)

export default withRouter(ConnectedPrivateRoute)