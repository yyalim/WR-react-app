import React from 'react'
import { Button, Avatar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  userInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: '8px'
  },
  typography: {
    marginRight: '8px'
  }
})

const AuthedView = ({ classes, user, handleLogoutClick }) => (
  <div className={classes.userInfo}>
    <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
    <Typography
      variant="h6"
      color="inherit"
      className={classes.typography}
    >
      {user.name}
    </Typography>
    <Button
      color="inherit"
      variant="outlined"
      onClick={handleLogoutClick}
    >
      Logout
    </Button>
  </div>
)

export default withStyles(styles)(AuthedView)