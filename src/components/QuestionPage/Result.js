import React, { Fragment } from 'react'
import { Typography } from '@material-ui/core'
import Option from './Option'

const Results = ({ question }) => (
  <Fragment>
    <Typography component="h5" variant="h5">
      Results
    </Typography>

    <Option {...question.optionOne} />
    <Option {...question.optionTwo} />
  </Fragment>
)

export default Results