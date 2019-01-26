import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import { handleGetUsers } from '../../actions/users'
import { stopLoading, startLoading } from '../../utils/helpers'
import { Button, FormControl } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import UserSelect from './UserSelect'
import LoadingIndicator from '../Shared/LoadingIndicator'

const styles = theme => ({
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
})

class LoginForm extends Component {
  state = {
    selectedUser: '',
    isLoading: true
  }

  handleChangeUser = (selectedUser) => {
    this.setState(() => ({
      selectedUser
    }))
  }

  handleSubmit = event => {
    event.preventDefault()

    const { handleLogin } = this.props
    const { selectedUser } = this.state

    startLoading.apply(this)

    handleLogin(selectedUser)
  }

  componentDidMount() {
    const { handleGetUsers } = this.props

    handleGetUsers()
      .then(stopLoading.bind(this))
  }

  render() {
    const { classes, users  } = this.props
    const { selectedUser, isLoading } = this.state
    const isUserSelected = selectedUser !== ''

    if(isLoading) {
      return <LoadingIndicator />
    }

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <UserSelect
            users={users}
            selectedUser={selectedUser}
            handleChangeUser={this.handleChangeUser}
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!isUserSelected}
        >
          Sign in
      </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ users }, ownProps) => {
  const userIds = Object.keys(users)

  return {
    users: userIds.map(id => users[id]),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleGetUsers: () => dispatch(handleGetUsers()),
  handleLogin: (selectedUser) => dispatch(handleLogin(selectedUser))
})

const StyledLoginForm = withStyles(styles)(LoginForm)

export default connect(mapStateToProps, mapDispatchToProps)(StyledLoginForm)