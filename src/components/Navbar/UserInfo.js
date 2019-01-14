import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogout } from '../../actions/authedUser'
import AuthedView from './AuthedView'
import NonAuthedView from './NonAuthedView'

class UserInfo extends Component {
  handleLogoutClick = (event) => {
    event.preventDefault()

    const { dispatch } = this.props

    dispatch(handleLogout())
  }

  render() {
    const { user } = this.props

    return user
      ? <AuthedView {...this.props} handleLogoutClick={this.handleLogoutClick} />
      : <NonAuthedView {...this.props} />
  }
}

const mapStateToProps = ({ users, authedUserId }, props) => ({
  user: users[authedUserId],
  ...props
})

export default connect(mapStateToProps)(UserInfo)