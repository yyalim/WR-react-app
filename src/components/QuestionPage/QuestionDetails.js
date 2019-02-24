import React from 'react'
import { connect } from 'react-redux'
import { getQuestionDetails } from '../../selectors'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography
} from '@material-ui/core'
import Results from './Result'
import AnswerForm from './AnswerForm'

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '8px',
    width: '800px',
    flexDirection: 'column'
  },
  userName: {
    background: '#fefefe',
    padding: '3px 10px'
  },
  details: {
    display: 'flex',
    height: '200px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: '200px',
    width: '200px'
  },
  button: {
    margin: '30px auto',
  }
})

const QuestionDetails = ({ question, author, classes }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.userName}>
        <Typography component="h5" variant="h5">
          Asked by {author.name}
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
            { question.isAnswered
              ? <Results question={question} />
              : <AnswerForm question={question} />
            }
          </CardContent>
        </div>
      </div>
    </Card>
  )
}

const mapStateToProps = (state, { questionId, ...ownProps }) => {
  const question = getQuestionDetails(state, questionId)
  const author = state.users[question.author]

  return { question, author, ...ownProps }
}

const ConnectedQuestionDetails = connect(mapStateToProps)(QuestionDetails)

export default withStyles(styles)(ConnectedQuestionDetails)