import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetUsers } from '../../actions/users'
import Navbar from '../Navbar/'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetUsers())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          App
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
