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

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    const authedUserId = ls.getAuthedUserId()

    authedUserId !== null && dispatch(handleLogin(authedUserId))
  }

  render() {
    const { isLoading } = this.props

    if(isLoading) {
      return <LoadingIndicator />
    }

    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Navbar />
          <main>
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

export default connect(mapStateToProps)(App)
