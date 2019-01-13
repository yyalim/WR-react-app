import React, { Component } from 'react'
import { TextField, MenuItem } from '@material-ui/core'

class UserSelect extends Component {
  handleChange = event => {
    const { handleChangeUser } = this.props
    const value = event.target.value

    handleChangeUser(value)
  }
  render() {
    const { users, selectedUser } = this.props
    return (
      <TextField
        select
        label="Select User"
        value={selectedUser}
        onChange={this.handleChange}
        margin="normal"
      >
        {users.map(user => (
          <MenuItem key={user.id} value={user.id}>
            {user.name}
          </MenuItem>
        ))}
      </TextField>
    )
  }
}

export default UserSelect