import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogout } from '../../actions/authedUser'
import AuthedView from './AuthedView'
import NonAuthedView from './NonAuthedView'

class UserInfo extends Component {
  handleLogoutClick = (event) => {
    event.preventDefault()

    this.props.handleLogout()
  }

  render() {
    const { user } = this.props

    return user
      ? <AuthedView {...this.props} handleLogoutClick={this.handleLogoutClick} />
      : <NonAuthedView {...this.props} />
  }
}

const mapStateToProps = ({ authedUser }, props) => {
  return {
    user: authedUser,
    ...props
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLogout: () => dispatch(handleLogout()),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo)