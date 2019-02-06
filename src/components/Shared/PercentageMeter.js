import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  percentageMeter: {
    display: 'flex',
    width: '100%',
    height: '40px',
    backgroundColor: 'gray'
  },
  percentageText: {
    margin: '0 3px',
    lineHeight: '40px',
    fontSize: '22px',
    color: '#fff',
  }
})

const PercentageMeter = ({ percent,  classes }) => {
  const percentageStyle = {
    width: `${percent}%`,
    backgroundColor: '#2B46DB'
  }

  const textStyle = {
    float: percent < 10 ? 'left' : 'right'
  }

  return (
    <div className={classes.percentageMeter}>
      <div style={percentageStyle}>
        <span
          className={classes.percentageText}
          style={textStyle}
        >
          {percent}%
        </span>
      </div>
    </div>
  )
}

export default withStyles(styles)(PercentageMeter)