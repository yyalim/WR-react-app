import React, { Fragment } from 'react'

const Question = ({ question }) => (
  <div>
    { question.id } -
    { question.timestamp }
  </div>
)

const QuestionList = ({ questions, questionIds }) => (
  <Fragment>
    { questionIds.map(questionId =>
      <Question question={questions[questionId]} />
    )}
  </Fragment>
)

export default QuestionList