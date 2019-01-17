import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLogin } from '../../actions/authedUser'
import { USERS_LOADING } from '../../reducers/loadingViews'
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
    selectedUser: ''
  }

  handleChangeUser = (selectedUser) => {
    this.setState(() => ({
      selectedUser
    }))
  }

  handleSubmit = event => {
    event.preventDefault()

    const { dispatch } = this.props
    const { selectedUser } = this.state

    dispatch(handleLogin(selectedUser))
  }

  render() {
    const { classes, users, isLoading } = this.props
    const { selectedUser } = this.state
    const isUserSelected = selectedUser !== ''

    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          {isLoading
            ? <LoadingIndicator />
            : <UserSelect
                users={users}
                selectedUser={selectedUser}
                handleChangeUser={this.handleChangeUser}
              />
          }
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

const mapStateToProps = ({ users, loadingViews }, props) => {
  const userIds = Object.keys(users)

  return {
    users: userIds.map(id => users[id]),
    isLoading: loadingViews.includes(USERS_LOADING),
    ...props
  }
}

const StyledLoginForm = withStyles(styles)(LoginForm)

export default connect(mapStateToProps)(StyledLoginForm)