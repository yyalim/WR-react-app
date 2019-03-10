import React from 'react'
import NewQuestionForm from './NewQuestionForm'
import { Typography, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  paper: {
    width: '400px',
    height: '330px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  header: {
    marginBottom: '30px'
  }
});

const NewQuestionPage = ({ classes }) => (
  <Paper className={classes.paper}>
    <Typography variant="h4" className={classes.header}>
      Create New Question
    </Typography>
    <NewQuestionForm />
  </Paper>
)

export default withStyles(styles)(NewQuestionPage)