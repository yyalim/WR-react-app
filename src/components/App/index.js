import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetUsers } from '../../actions/users'
import LoadingBar from 'react-redux-loading'
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
          <Navbar LoadingBar={LoadingBar}/>
          App
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ loadingBar }) => ({
  loading: loadingBar.default
})

export default connect(mapStateToProps)(App)
