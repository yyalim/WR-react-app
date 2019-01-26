import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Avatar, Paper, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'

const styles = theme => ({
  paper: {
    width: '400px',
    height: '300px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  }
});

class LoginPage extends Component {
  render() {
    const { classes, isAuthed } = this.props
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (isAuthed) {
      return <Redirect to={from} />
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

const mapStateToProps = ({ authedUser }, props) => ({
  isAuthed: authedUser !== null,
  ...props
})

export default connect(mapStateToProps)(styledLoginPage)