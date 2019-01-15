import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import ls from '../../utils/localStorageHelper'
import { CssBaseline } from '@material-ui/core'
import LoadingBar from 'react-redux-loading'
import Navbar from '../Navbar'
import Routes from '../Routes'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const authedUserId = ls.getAuthedUserId()

    authedUserId !== null && dispatch(handleLogin(authedUserId))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Navbar LoadingBar={LoadingBar} />
          <main>
            <Routes />
          </main>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser, loadingBar }, ...props) => ({
  authedUser,
  loading: loadingBar.default,
  ...props
})

export default connect(mapStateToProps)(App)
