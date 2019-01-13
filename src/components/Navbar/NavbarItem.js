import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import styles from './NavbarItem.module.css'

const NavbarItem = ({ text, path, exact }) => {
  return (
    <NavLink
      exact={exact}
      to={path}
      activeClassName={styles.active}
      className={styles.link}
    >
      <Typography variant="h6" color="inherit">{text}</Typography>
    </NavLink>
  )
}

NavbarItem.propTypes = {
  exact: PropTypes.bool,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

NavbarItem.defaultProps = {
  exact: false
}

export default NavbarItem