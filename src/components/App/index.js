import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetUsers } from '../../actions/users'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleGetUsers())
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect()(App)
