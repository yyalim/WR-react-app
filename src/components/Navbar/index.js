import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import NavbarItem from './NavbarItem'

const Navbar = props => {
  const navbarItems = [
    { key: 'home', text: 'Home', path: '/', exact: true },
    { key: 'add', text: 'New Question', path: '/add' },
    { key: 'leaderboard', text: 'Leader Board', path: '/leaderboard' }
  ]

  return (
    <AppBar>
      <Toolbar>
        {navbarItems.map(item => <NavbarItem {...item} />)}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar