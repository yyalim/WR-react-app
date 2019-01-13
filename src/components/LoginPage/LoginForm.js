import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, FormControl } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import UserSelect from './UserSelect'

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

  render() {
    const { classes, users } = this.props
    const { selectedUser } = this.state

    return (
      <form className={classes.form}>
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
        >
          Sign in
      </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ users }, props) => ({
  users: Object.keys(users).map(id => users[id]),
  ...props
})

const StyledLoginForm = withStyles(styles)(LoginForm)

export default connect(mapStateToProps)(StyledLoginForm)