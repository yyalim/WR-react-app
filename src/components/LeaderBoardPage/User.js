import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card, CardContent, CardMedia, Typography
} from '@material-ui/core'

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%',
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

const User = ({ user, classes }) => (
  <Card className={classes.card}>
    <div className={classes.userName}>
      <Typography component="h5" variant="h5">
        {user.name}
      </Typography>
    </div>
    <div className={classes.details}>
      <CardMedia
        className={classes.cover}
        image={user.avatarURL}
        title=""
      />
      <div className={classes.info}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            Answered Questions: {user.score.answersCount}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Created Questions: {user.score.questionsCount}
          </Typography>
          <Typography variant="h4" color="textSecondary">
            Score: {user.score.totalPoints}
          </Typography>
        </CardContent>
      </div>
    </div>
  </Card>
)

export default withStyles(styles)(User)