import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button
} from '@material-ui/core';
import { handleSaveQuestionAnswer } from '../../actions/questions';

const styles = theme => ({
  formControl: {
    display: 'block',
  }
})

class AnswerForm extends Component {
  state = {
    answer: null,
    isAnswered: false
  }

  handleChange = event => {
    const value = event.target.value
    this.setState(() => ({ answer: value }))

  }

  handleSubmit = event => {
    event.preventDefault()

    const { answer } = this.state

    const { authedUser, question, handleSaveQuestionAnswer } = this.props

    handleSaveQuestionAnswer({ question, authedUser, answer }).then(() => {
      this.setState(() => ({ isAnswered: true }))
    })
  }

  render() {
    const { question, classes } = this.props
    const { isAnswered } = this.state

    if(isAnswered) {
      return <Redirect to="/" />
    }

    return (
      <form onSubmit={this.handleSubmit} >
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Would You Rather...</FormLabel>
          <RadioGroup
            name="answer"
            value={this.state.answer}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="optionOne"
              control={<Radio />}
              label={question.optionOne.text}
            />
            <FormControlLabel
              value="optionTwo"
              control={<Radio />}
              label={question.optionTwo.text}
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={this.state.answer === null}
        >
          Answer
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ authedUser }, ownProps) => ({
  authedUser,
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSaveQuestionAnswer: ({ question, authedUser, answer }) => (
    dispatch(handleSaveQuestionAnswer({ question, authedUser, answer }))
  )
})

const ConnectedAnswerForm = connect(mapStateToProps, mapDispatchToProps)(AnswerForm)
const StyledAnswerForm = withStyles(styles)(ConnectedAnswerForm)

export default StyledAnswerForm