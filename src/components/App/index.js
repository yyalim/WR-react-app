import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import { LOGIN_LOADING } from '../../reducers/loadingViews'
import ls from '../../utils/localStorageHelper'
import { CssBaseline } from '@material-ui/core'
import Navbar from '../Navbar'
import Routes from '../Routes'
import LoadingIndicator from '../Shared/LoadingIndicator'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 8
  }
})

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const authedUserId = ls.getAuthedUserId()

    authedUserId !== null && dispatch(handleLogin(authedUserId))
  }

  render() {
    const { isLoading, classes } = this.props

    if(isLoading) {
      return <LoadingIndicator />
    }

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Navbar />
          <main className={classes.main}>
            <Routes />
          </main>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser, loadingViews }, ...props) => ({
  authedUser,
  isLoading: loadingViews.includes(LOGIN_LOADING),
  ...props
})

const connectedApp = connect(mapStateToProps)(App)

export default withStyles(styles)(connectedApp)