import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetUsers } from '../../actions/users'
import { CssBaseline } from '@material-ui/core'
import LoadingBar from 'react-redux-loading'
import Navbar from '../Navbar'
import Routes from '../Routes'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetUsers())
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

const mapStateToProps = ({ loadingBar }) => ({
  loading: loadingBar.default
})

export default connect(mapStateToProps)(App)
