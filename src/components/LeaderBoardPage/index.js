import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getScoreboard } from '../../selectors'
import { handleGetUsers } from '../../actions/users'
import Wait from '../Shared/Wait'
import { stopLoading } from '../../utils/componentHelpers'
import User from './User'

class LeaderBoardPage extends Component {
  state = {
    isLoading: true
  }

  componentDidMount() {
    this.props.handleGetUsers()
      .then(() => stopLoading.apply(this))
  }

  render() {
    const { scoreboard } = this.props
    return (
      <Wait isWaiting={this.state.isLoading}>
        <div>
          {scoreboard.map(user => <User key={user.id} user={user} />)}
        </div>
      </Wait>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  scoreboard: getScoreboard(state, state.users),
  ...ownProps
})


const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetUsers: () => dispatch(handleGetUsers()),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaderBoardPage)