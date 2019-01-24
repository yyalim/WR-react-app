import React from 'react'
import { connect } from 'react-redux'
import { getAuthor } from '../../selectors'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography, Button
} from '@material-ui/core'

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '8px',
    flexDirection: 'column'
  },
  userName: {
    background: '#fefefe',
    border: '1px solid #ddd',
    padding: '3px 10px'
  },
  details: {
    display: 'flex',
    height: '200px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '200px'
  },
  button: {
    margin: '30px auto',
  }
})

const Question = ({ question, author, classes }) => (
  <Card className={classes.card}>
    <div className={classes.userName}>
      <Typography component="h5" variant="h5">
        {author.name} asks:
      </Typography>
    </div>
    <div className={classes.details}>
      <CardMedia
        className={classes.cover}
        image={author.avatarURL}
        title=""
      />
      <div className={classes.info}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Would you rather
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ...{question.optionOne.text}...
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ...{question.optionTwo.text}...
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/question/${question.id}`}
            className={classes.button}
          >
            View Poll
          </Button>
        </CardContent>
      </div>
    </div>
  </Card>
)

const mapStateToProps = (state, ownProps) => {
  const { question } = ownProps
  return ({
    author: getAuthor(state, question.id),
    ...ownProps
  })
}

const connectedQuestion = connect(mapStateToProps)(Question)

export default withStyles(styles)(connectedQuestion)