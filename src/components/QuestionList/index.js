import React, { Fragment } from 'react'
import Question from './Question'

const QuestionList = ({ questions, questionIds }) => (
  <Fragment>
    { questionIds.map(questionId =>
      <Question key={questionId} question={questions[questionId]} />
    )}
  </Fragment>
)

export default QuestionList