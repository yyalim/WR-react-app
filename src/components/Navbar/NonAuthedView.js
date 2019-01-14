import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NonAuthedView = ({ classes }) => (
  <Button
    color="inherit"
    variant="outlined"
    component={Link}
    to="/login"
  >
    Login
  </Button>
)

export default NonAuthedView