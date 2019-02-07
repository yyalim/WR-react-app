import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography
} from '@material-ui/core'
import Option from './Option'

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
    flex: '1 0 auto'
  },
  cover: {
    minWidth: '200px',
    width: '200px'
  },
  button: {
    margin: '30px auto',
  }
})


const AnsweredQuestion = ({ question, author, classes }) => {
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
            <Typography component="h5" variant="h5">
              Results
            </Typography>

            <Option {...question.optionOne} />
            <Option {...question.optionTwo} />

          </CardContent>
        </div>
      </div>
    </Card>
  )
}

export default withStyles(styles)(AnsweredQuestion)