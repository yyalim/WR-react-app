import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../../actions/questions'
import { Redirect } from 'react-router-dom'
import Wait from '../Shared/Wait'
import { startLoading } from '../../utils/componentHelpers'
import { isBlank } from '../../utils/stringHelpers'
import { Button, FormControl, Input, Typography } from '@material-ui/core'

class NewQuestionForm extends Component {
  state = {
    isLoading: false,
    isSubmitted: false,
    optionOneText: '',
    optionTwoText: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    const { authedUser, handleSaveQuestion } = this.props
    const { optionOneText, optionTwoText } = this.state

    startLoading.apply(this)

    handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id
    }).then(() => {
      this.setState(() => ({
        isSubmitted: true
      }))
    })
  }

  handleInputChange = event => {
    const { id, value } = event.target

    this.setState(() => ({
      [id]: value
    }))
  }

  render() {
    const { isLoading, isSubmitted, optionOneText, optionTwoText } = this.state

    if(isSubmitted) {
      return <Redirect to="/" />
    }

    const isFieldsBlank = isBlank(optionOneText) || isBlank(optionTwoText)

    return (
      <Wait isWaiting={isLoading}>
        <form onSubmit={this.handleSubmit}>
        <Typography>
          Compolete the question:
        </Typography>
          <Typography variant="title">
            Would you rather...
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <Input
              id="optionOneText"
              placeholder="Enter option one text here"
              type="text"
              value={optionOneText}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <Typography align="center">
            OR
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <Input
              id="optionTwoText"
              placeholder="Enter option two text here"
              type="text"
              value={optionTwoText}
              onChange={this.handleInputChange}
            />
          </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isFieldsBlank}
            >
            Submit
          </Button>
        </form>
      </Wait>
    )
  }
}

const mapStateToProps = ({ authedUser }, ownProps) => ({
  authedUser,
  ...ownProps
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleSaveQuestion: question => dispatch(handleSaveQuestion(question)),
  ...ownProps
})

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionForm)