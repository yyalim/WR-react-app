import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleGetUsers } from '../../actions/users'
import { Avatar, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import LoadingIndicator from '../Shared/LoadingIndicator'

const styles = theme => ({
  paper: {
    width: '400px',
    margin: '0 auto',
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  emptyPaper: {
    minHeight: '400px'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  }
});

class LoginPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetUsers())
  }

  render() {
    const { classes, isAuthed, isUsersLoaded } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isAuthed) {
      return <Redirect to={from} />
    }

    if(isUsersLoaded) {
      return (
        <Paper className={[classes.paper, classes.emptyPaper]}>
          <LoadingIndicator />
        </Paper>
      )
    }

    return (
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
      </Paper>
    )
  }
}

const styledLoginPage = withStyles(styles)(LoginPage)

const mapStateToProps = ({ users, authedUser }, props) => ({
  isUsersLoaded: Object.keys(users).length === 0,
  isAuthed: authedUser !== null,
  ...props
})

export default connect(mapStateToProps)(styledLoginPage)