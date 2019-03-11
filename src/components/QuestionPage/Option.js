import React from 'react'
import PercentageMeter from '../Shared/PercentageMeter'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles  = theme => ({
  option: {
    padding: '10px',
    margin: '10px'
  },
  highlighted: {
    border: '1px solid #3F51B5',
    backgroundColor: 'rgba(63, 81, 181, 0.2)'
  }
})

const Option = ({ text, percentage, votersCount, isAuthedUserChoice, classes }) => (
  <div
    className={classNames(
      classes.option,
      { [classes.highlighted]: isAuthedUserChoice }
    )}
  >
    <Typography variant="subtitle1" color="textSecondary">
      ...{text}... - {votersCount} People/Person voted this option
    </Typography>
    <PercentageMeter percent={percentage} />
  </div>
)

export default withStyles(styles)(Option)