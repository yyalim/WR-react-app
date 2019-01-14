import React from 'react'
import { AppBar, Toolbar, Button} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import NavbarItem from './NavbarItem'
import UserInfo from './UserInfo'

const styles = theme => ({
  toolbar: {
    justifyContent: 'space-between'
  },
  navLinks: {
    display: 'flex'
  }
})

const Navbar = ({ LoadingBar, classes }) => {
  const navbarItems = [
    { key: 'home', text: 'Home', path: '/', exact: true },
    { key: 'add', text: 'New Question', path: '/add' },
    { key: 'leaderboard', text: 'Leader Board', path: '/leaderboard' }
  ]

  return (
    <AppBar position="relative" className={classes.appBar}>
      <LoadingBar />
      <Toolbar className={classes.toolbar}>
        <div className={classes.navLinks}>
          {navbarItems.map(item => <NavbarItem {...item} />)}
        </div>
        <UserInfo />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Navbar)