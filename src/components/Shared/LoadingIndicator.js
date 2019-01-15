import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  parent: {
    width: '100%',
    height: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const LoadingIndicator = ({ classes }) => (
  <div className={classes.parent}>
    <CircularProgress />
  </div>
)

export default withStyles(styles)(LoadingIndicator)