import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import { stopLoading } from '../../utils/helpers'
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
  state = {
    isLoading: true
  }

  componentDidMount() {
    const { handleLogin } = this.props
    const authedUserId = ls.getAuthedUserId()

    authedUserId !== null
      ? handleLogin(authedUserId).then(stopLoading.bind(this))
      : stopLoading.apply(this)
  }

  render() {
    const { classes } = this.props
    const { isLoading } = this.state

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
  ...props
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogin: id => dispatch(handleLogin(id))
})

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default withStyles(styles)(connectedApp)